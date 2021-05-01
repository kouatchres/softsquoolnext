import React, { useState, useEffect, ChangeEvent, FC } from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { TextField } from 'material-ui-formik-components/TextField';
import { Select } from 'material-ui-formik-components/Select';
import {
  Grid,
  Typography,
  Paper,
  Button,
  LinearProgress,
  CircularProgress
} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';
import Notification from 'utils/Notification';
import {
  useCreateDepartmentMutation,
  AllDepartmentsDocument,
  DepartmentCreateInput,
  SingleSchoolByPublicCodeDocument,
  useSingleSchoolByPublicCodeLazyQuery
} from '../../../generated/graphql';
import { IOptions } from '../interfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageStyled: {
      margin: 'auto',
      borderTop: '1.5rem solid #829079',
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(1.7),
      paddingRight: theme.spacing(1.7),
      maxWidth: '25%',
      minWidth: '10rem'
    }
  })
);
const validationSchema = Yup.object().shape({
  deptName: Yup.string().required('Libellé département Obligatoire'),
  deptCode: Yup.string().required('Code département Obligatoire')
});

const createDept = () => {
  const classes = useStyles();
  const [sectionID, setSectionID] = useState<string>('');

  const [
    SingleSchoolBySchoolPublicCodeQuery,
    { data, loading, error }
  ] = useSingleSchoolByPublicCodeLazyQuery({
    query: SingleSchoolByPublicCodeDocument
  });

  console.log({ data });

  const { schoolName } =
    data && data.schoolByPublicCode
      ? data.schoolByPublicCode
      : { schoolName: '' };

  const sectionsOptions: IOptions[] =
    data?.schoolByPublicCode && data?.schoolByPublicCode?.sections
      ? data?.schoolByPublicCode?.sections?.map(section => ({
          value: section?.id,
          label: section?.sectionName
        }))
      : [];
  console.log({ sectionsOptions });

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const initialValues: DepartmentCreateInput = {
    deptName: '',
    deptCode: '',
    Section: {}
  };
  const [createDepartmentMutation] = useCreateDepartmentMutation();

  const handleSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSectionID(event.target.value);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (
        values: DepartmentCreateInput,
        { setSubmitting, resetForm }
      ) => {
        const res = await createDepartmentMutation({
          variables: {
            data: {
              ...values,
              Section: { connect: { id: sectionID } }
            }
          },
          update: (cache: any, { data }) => {
            const currentDepartmentList = cache.readQuery({
              query: AllDepartmentsDocument
            }) ?? { departments: [] };
            const addedDepartment = data?.createOneDepartment;
            if (addedDepartment) {
              cache.writeQuery({
                query: AllDepartmentsDocument,
                data: {
                  departments: [
                    ...currentDepartmentList.departments,
                    addedDepartment
                  ]
                }
              });
            }
          }
        });

        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);

          setNotify({
            isOpen: true,
            message: 'New department added',
            type: 'success'
          });
          resetForm();
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ submitForm, isSubmitting }) => {
        return (
          <Paper className={classes.pageStyled}>
            <Form aria-busy={isSubmitting}>
              {isSubmitting && <LinearProgress />}
              <Grid
                direction="column"
                container
                alignItems="center"
                justify="center"
              >
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    style={{
                      backgroundColor: '#ede6b9',
                      borderRadius: '0.2rem',
                      paddingTop: '0.2rem'
                    }}
                  >
                    <Grid item>
                      <Typography
                        color="primary"
                        gutterBottom
                        variant="body2"
                        component="h6"
                      >
                        New department
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={5} direction="row">
                  <Grid item sm={12}>
                    <Grid container direction="column">
                      <Grid item>
                        <Field
                          name="sectionName"
                          component={TextField}
                          type="text"
                          value={schoolName || ''}
                          label="Nom de l'etablissement"
                          variant="outlined"
                          disabled
                          helpertext={<ErrorMessage name="sectionName" />}
                        />

                        <Field
                          name="schoolPublic"
                          component={TextField}
                          type="text"
                          label="School Public Code"
                          variant="outlined"
                          disabled={isSubmitting || loading}
                          onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            SingleSchoolBySchoolPublicCodeQuery({
                              variables: {
                                schoolPublicCode: event.target.value
                              }
                            });
                          }}
                          helpertext={<ErrorMessage name="schoolPublic" />}
                        />

                        <Field
                          name="sectionID"
                          component={Select}
                          type="text"
                          autoFocus={true}
                          options={sectionsOptions}
                          label="Choix de section"
                          variant="outlined"
                          disabled={isSubmitting}
                          onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            handleSelectChange(event);
                          }}
                          helpertext={<ErrorMessage name="sectionID" />}
                        />
                        <Field
                          name="deptName"
                          component={TextField}
                          type="text"
                          label="Libellé département"
                          variant="outlined"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="deptName" />}
                        />
                        <Field
                          name="deptCode"
                          component={TextField}
                          type="text"
                          label="Code département"
                          variant="outlined"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="deptCode" />}
                        />
                        <Notification notify={notify} setNotify={setNotify} />
                        <div style={{ placeItems: 'center', display: 'grid' }}>
                          <Button disabled={isSubmitting} onClick={submitForm}>
                            {isSubmitting && <CircularProgress />}
                            {isSubmitting
                              ? 'Creating Department'
                              : 'New department'}
                          </Button>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          </Paper>
        );
      }}
    </Formik>
  );
};

export default createDept;
