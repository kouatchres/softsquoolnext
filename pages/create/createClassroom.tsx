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
import Notification from '../../components/utils/Notification';
import {
  useCreateClassroomMutation,
  AllClassroomsDocument,
  ClassroomCreateInput,
  SingleSchoolBySecretCodeDocument,
  useSingleSchoolBySecretCodeLazyQuery
} from '../../generated/graphql';
import { IOptions } from '../../interfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageStyled: {
      margin: 'auto',
      borderTop: '1.5rem solid #829079',
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(1.5),
      paddingRight: theme.spacing(1.5),
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
    SingleSchoolBySchoolSecretCodeQuery,
    { data, loading, error }
  ] = useSingleSchoolBySecretCodeLazyQuery({
    query: SingleSchoolBySecretCodeDocument
  });

  console.log({ data });

  const { schoolName } =
    data && data.schoolBySecretCode
      ? data.schoolBySecretCode
      : { schoolName: '' };

  const sectionsOptions: IOptions[] =
    data?.schoolBySecretCode && data?.schoolBySecretCode?.sections
      ? data?.schoolBySecretCode?.sections?.map(section => ({
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
                direction="column"
                container
                alignItems="center"
                justify="center"
              >
                <Grid item>
                  <Grid container direction="row" justify="center">
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
                          label="Section Name"
                          variant="outlined"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="sectionName" />}
                        />

                        <Field
                          name="schoolSecret"
                          component={TextField}
                          type="text"
                          label="School secret Code"
                          variant="outlined"
                          disabled={isSubmitting}
                          onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            SingleSchoolBySchoolSecretCodeQuery({
                              variables: {
                                schoolSecretCode: event.target.value
                              }
                            });
                          }}
                          helpertext={<ErrorMessage name="schoolSecret" />}
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
                          name="className"
                          component={TextField}
                          type="text"
                          label="Libellé département"
                          variant="outlined"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="className" />}
                        />
                        <Field
                          name="classCode"
                          component={TextField}
                          type="text"
                          label="Code département"
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
              </Grid>
            </Form>
          </Paper>
        );
      }}
    </Formik>
  );
};

export default createClassroom;
