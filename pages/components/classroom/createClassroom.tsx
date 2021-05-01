import React, { useState, ChangeEvent } from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { TextField, Select } from 'material-ui-formik-components';
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
  useCreateClassroomMutation,
  AllClassroomsDocument,
  ClassroomCreateInput,
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
  className: Yup.string().required('Libellé département Obligatoire'),
  classCode: Yup.string().required('Code département Obligatoire')
});

const createClassroom = () => {
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

  const initialValues: ClassroomCreateInput = {
    className: '',
    classCode: '',
    Section: {}
  };
  const [createClassroomMutation] = useCreateClassroomMutation();

  const handleSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSectionID(event.target.value);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (
        values: ClassroomCreateInput,
        { setSubmitting, resetForm }
      ) => {
        const res = await createClassroomMutation({
          variables: {
            data: {
              ...values,
              Section: { connect: { id: sectionID } }
            }
          },
          update: (cache: any, { data }) => {
            const currentClassroomList = cache.readQuery({
              query: AllClassroomsDocument
            }) ?? { classrooms: [] };
            const addedClassroom = data?.createOneClassroom;
            if (addedClassroom) {
              cache.writeQuery({
                query: AllClassroomsDocument,
                data: {
                  classrooms: [
                    ...currentClassroomList.classrooms,
                    addedClassroom
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
            message: 'New classroom added',
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
                container
                direction="row"
                alignItems="center"
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
                    New Classroom
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={5} direction="row">
                <Grid item sm={12}>
                  <Grid container direction="column">
                    <Grid item>
                      <Field
                        name="School Name"
                        component={TextField}
                        type="text"
                        value={schoolName || ''}
                        label="Section Name"
                        variant="outlined"
                        disabled
                        helpertext={<ErrorMessage name="School Name" />}
                      />

                      <Field
                        name="schoolPublicCode"
                        component={TextField}
                        type="text"
                        label="School public Code"
                        variant="outlined"
                        disabled={isSubmitting}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                          SingleSchoolBySchoolPublicCodeQuery({
                            variables: {
                              schoolPublicCode: event.target.value
                            }
                          });
                        }}
                        helpertext={<ErrorMessage name="schoolPublicCode" />}
                      />

                      <Field
                        name="sectionID"
                        component={Select}
                        type="text"
                        autoFocus={true}
                        options={sectionsOptions}
                        label="Section"
                        variant="outlined"
                        disabled={isSubmitting}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                          handleSelectChange(event);
                        }}
                        helpertext={<ErrorMessage name="sectionID" />}
                      />
                      <Field
                        name="className"
                        component={TextField}
                        type="text"
                        label="Class Name"
                        variant="outlined"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="className" />}
                      />
                      <Field
                        name="classCode"
                        component={TextField}
                        type="text"
                        label="Class code"
                        variant="outlined"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="classCode" />}
                      />
                      <Notification notify={notify} setNotify={setNotify} />
                      <div style={{ placeItems: 'center', display: 'grid' }}>
                        <Button disabled={isSubmitting} onClick={submitForm}>
                          {isSubmitting && <CircularProgress />}
                          {isSubmitting
                            ? 'Creating Classroom'
                            : 'New Classroom'}
                        </Button>
                      </div>
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

export default createClassroom;
