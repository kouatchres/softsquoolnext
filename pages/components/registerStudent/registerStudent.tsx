import React, { useState, ChangeEvent, FC } from 'react';
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
  SchoolYear,
  SingleStudentByMatriculeDocument,
  SingleSectionForClassroomsDocument,
  useSingleSectionForClassroomsLazyQuery,
  useCreateAnnStudentClassroomMutation,
  AllAnnStudentClassroomDocument,
  AnnStudentClassroomCreateInput,
  SingleSchoolByPublicCodeDocument,
  AllSchoolYearsQuery,
  useSingleSchoolByPublicCodeLazyQuery,
  useSingleStudentByMatriculeLazyQuery
} from '../../../generated/graphql';
import { IOptions } from '../interfaces';
import { PrismaClient } from '@prisma/client';
import { GetStaticProps } from 'next';
import safeJsonStringify from 'safe-json-stringify';

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
  // subjectName: Yup.string().required('Libellé département Obligatoire'),
  // subjectCode: Yup.string().required('Code département Obligatoire')
});

const registerStudent = ({ schoolYears }: AllSchoolYearsQuery) => {
  const classes = useStyles();

  const [classroomID, setClassroomID] = useState<string>('');

  const [schoolYearID, setSchoolYearID] = useState<string>('');

  const schoolYearsOptions: IOptions[] = schoolYears
    ? schoolYears?.map(schoolYear => ({
        value: schoolYear?.id,
        label: schoolYear?.yearName
      }))
    : [];
  console.log({ schoolYearsOptions });

  // from school Public code get sections in the school
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

  // get one section  and subsequently all its classrooms
  const [
    SingleSectionForClassroomsQuery,
    { data: dataSection, loading: loadingSection }
  ] = useSingleSectionForClassroomsLazyQuery({
    query: SingleSectionForClassroomsDocument
  });

  const classroomsOptions: IOptions[] =
    dataSection?.sectionForClasses && dataSection?.sectionForClasses?.classrooms
      ? dataSection?.sectionForClasses?.classrooms?.map(classroom => ({
          value: classroom?.id,
          label: classroom?.className
        }))
      : [];
  console.log({ classroomsOptions });

  // get Student matricule to obtain their id
  const [
    SingleStudentByMatriculeQuery,
    { data: dataStudent }
  ] = useSingleStudentByMatriculeLazyQuery({
    query: SingleStudentByMatriculeDocument
  });

  const getStudentId =
    dataStudent && dataStudent?.studentByMatricule
      ? dataStudent?.studentByMatricule
      : { id: '', student1stName: '', student2ndName: '', student3rdName: '' };
  console.log({ getStudentId });

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const initialValues: AnnStudentClassroomCreateInput = {
    SchoolYear: {},
    Student: {},
    Classroom: {}
  };
  const [
    createAnnStudentClassroomMutation
  ] = useCreateAnnStudentClassroomMutation();

  const handleClassroomSelectChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setClassroomID(event.target.value);
  };

  const handleYearSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSchoolYearID(event.target.value);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (
        values: AnnStudentClassroomCreateInput,
        { setSubmitting, resetForm }
      ) => {
        const res = await createAnnStudentClassroomMutation({
          variables: {
            data: {
              ...values,
              Classroom: { connect: { id: classroomID } },
              Student: { connect: { id: getStudentId.id } },
              SchoolYear: { connect: { id: schoolYearID } }
            }
          },
          update: (cache: any, { data }) => {
            const currentAnnStudentClassroomList = cache.readQuery({
              query: AllAnnStudentClassroomDocument
            }) ?? { annStudentClassroom: [] };
            const addedAnnStudentClassroom = data?.createOneAnnStudentClassroom;
            if (addedAnnStudentClassroom) {
              cache.writeQuery({
                query: AllAnnStudentClassroomDocument,
                data: {
                  annStudentClassroom: [
                    ...currentAnnStudentClassroomList.annStudentClassroom,
                    addedAnnStudentClassroom
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
            message: 'Operation Successful',
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
                    Register students
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={5} direction="row">
                <Grid item sm={12}>
                  <Grid container direction="column">
                    <Grid item>
                      <Field
                        name="SchoolName"
                        component={TextField}
                        type="text"
                        value={schoolName || ''}
                        label="Nom de l'etablissement"
                        variant="outlined"
                        disabled
                        helpertext={<ErrorMessage name="SchoolName" />}
                      />

                      <Field
                        name="schoolPublicCode"
                        component={TextField}
                        type="text"
                        label="School Public Code"
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
                        name="schoolYear"
                        component={Select}
                        type="text"
                        autoFocus={true}
                        options={schoolYearsOptions}
                        label="Choose School Year"
                        variant="outlined"
                        disabled={isSubmitting}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                          handleYearSelectChange(event);
                        }}
                        helpertext={<ErrorMessage name="schoolYear" />}
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
                          SingleSectionForClassroomsQuery({
                            variables: { id: event.target.value }
                          });
                        }}
                        helpertext={<ErrorMessage name="sectionID" />}
                      />
                      <Field
                        name="classroomID"
                        component={Select}
                        type="text"
                        autoFocus={true}
                        options={classroomsOptions}
                        label="Choose classroom"
                        variant="outlined"
                        disabled={isSubmitting || loadingSection}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                          handleClassroomSelectChange(event);
                        }}
                        helpertext={<ErrorMessage name="classroomID" />}
                      />
                      <Field
                        name="StudentMatricule"
                        component={TextField}
                        type="text"
                        label="Student Matricule"
                        variant="outlined"
                        disabled={isSubmitting}
                        helpertext={<ErrorMessage name="StudentMatricule" />}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                          SingleStudentByMatriculeQuery({
                            variables: {
                              studentMatricule: event.target.value
                            }
                          });
                        }}
                      />
                      <Field
                        name="studentName"
                        component={TextField}
                        type="text"
                        value={
                          `${getStudentId.student1stName} ${getStudentId.student2ndName}` ||
                          ''
                        }
                        label="Student Name"
                        variant="outlined"
                        disabled
                        helpertext={<ErrorMessage name="studentName" />}
                      />
                      <Notification notify={notify} setNotify={setNotify} />
                      <div style={{ placeItems: 'center', display: 'grid' }}>
                        <Button disabled={isSubmitting} onClick={submitForm}>
                          {isSubmitting && <CircularProgress />}
                          {isSubmitting
                            ? 'Creating AnnStudentClassroom'
                            : 'Student yearly dept'}
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

const prisma = new PrismaClient();

export const getStaticProps: GetStaticProps = async () => {
  const allSchoolYears: SchoolYear[] = await prisma.schoolYear.findMany({
    orderBy: [{ yearName: 'asc' }, { yearCode: 'asc' }]
  });

  const stringifiedData = safeJsonStringify(allSchoolYears);
  const schoolYears = JSON.parse(stringifiedData);
  return { props: { schoolYears } };
};
export default registerStudent;
