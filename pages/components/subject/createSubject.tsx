import React, { useState, ChangeEvent, FC } from 'react';
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
  SingleSectionDocument,
  useSingleSectionLazyQuery,
  useCreateSubjectMutation,
  AllSubjectsDocument,
  SubjectCreateInput,
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
  subjectName: Yup.string().required('Libellé département Obligatoire'),
  subjectCode: Yup.string().required('Code département Obligatoire')
});

const NewSubject = () => {
  const classes = useStyles();
  const [departmentID, setDepartmentID] = useState<string>('');

  const [
    SingleSchoolBySchoolPublicCodeQuery,
    { data }
  ] = useSingleSchoolByPublicCodeLazyQuery({
    query: SingleSchoolByPublicCodeDocument
  });

  const { schoolName, id } =
    data && data.schoolByPublicCode
      ? data.schoolByPublicCode
      : { schoolName: '', id: '' };
  console.log({ data });

  const sectionsOptions: IOptions[] =
    data?.schoolByPublicCode && data?.schoolByPublicCode?.sections
      ? data?.schoolByPublicCode?.sections?.map(section => ({
          value: section?.id,
          label: section?.sectionName
        }))
      : [];
  console.log({ sectionsOptions });

  const [
    SingleSectionQuery,
    { data: dataSection, loading: loadingSection }
  ] = useSingleSectionLazyQuery({
    query: SingleSectionDocument
  });

  const deptsOptions: IOptions[] =
    dataSection?.section && dataSection?.section?.departments
      ? dataSection?.section?.departments?.map(department => ({
          value: department?.id,
          label: department?.deptName
        }))
      : [];
  console.log({ deptsOptions });

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const initialValues: SubjectCreateInput = {
    subjectName: '',
    subjectCode: '',
    Department: {}
  };
  const [createSubjectMutation] = useCreateSubjectMutation();

  const handleSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDepartmentID(event.target.value);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (
        values: SubjectCreateInput,
        { setSubmitting, resetForm }
      ) => {
        const res = await createSubjectMutation({
          variables: {
            data: {
              ...values,
              Department: { connect: { id: departmentID } }
            }
          },
          update: (cache: any, { data }) => {
            const currentSubjectList = cache.readQuery({
              query: AllSubjectsDocument
            }) ?? { subjects: [] };
            const addedSubject = data?.createOneSubject;
            if (addedSubject) {
              cache.writeQuery({
                query: AllSubjectsDocument,
                data: {
                  subjects: [...currentSubjectList.subjects, addedSubject]
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
            message: 'New subjects added',
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
                justify="center"
                alignItems="center"
                style={{
                  paddingTop: '0.2rem',
                  backgroundColor: '#ede6b9',
                  borderRadius: '0.2rem'
                }}
              >
                <Grid item>
                  <Typography
                    color="primary"
                    gutterBottom
                    variant="body2"
                    component="h6"
                  >
                    New subject
                  </Typography>
                </Grid>
              </Grid>
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
                    label="School secret Code"
                    variant="outlined"
                    disabled={isSubmitting}
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
                    disabled={isSubmitting || !data}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      SingleSectionQuery({
                        variables: { id: event.target.value }
                      });
                    }}
                    helpertext={<ErrorMessage name="sectionID" />}
                  />
                  <Field
                    name="departmentID"
                    component={Select}
                    type="text"
                    autoFocus={true}
                    options={deptsOptions}
                    label="Choose department"
                    variant="outlined"
                    disabled={isSubmitting || loadingSection || !dataSection}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      handleSelectChange(event);
                    }}
                    helpertext={<ErrorMessage name="departmentID" />}
                  />
                  <Field
                    name="subjectName"
                    component={TextField}
                    type="text"
                    label="Libellé Subject"
                    variant="outlined"
                    disabled={isSubmitting}
                    helpertext={<ErrorMessage name="subjectName" />}
                  />
                  <Field
                    name="subjectCode"
                    component={TextField}
                    type="text"
                    label="Code Subject"
                    variant="outlined"
                    disabled={isSubmitting}
                    helpertext={<ErrorMessage name="subjectCode" />}
                  />
                  <Notification notify={notify} setNotify={setNotify} />
                  <div style={{ placeItems: 'center', display: 'grid' }}>
                    <Button disabled={isSubmitting} onClick={submitForm}>
                      {isSubmitting && <CircularProgress />}
                      {isSubmitting ? 'Creating Subject' : 'New subject'}
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Form>
          </Paper>
        );
      }}
    </Formik>
  );
};

export default NewSubject;
