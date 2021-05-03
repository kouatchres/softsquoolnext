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
import Notification from '../Notification';
import {
  Maybe,
  SchoolYear,
  AnnProfDeptFragmentFragment,
  useSingleAnnProfDeptLazyQuery,
  SingleAnnProfDeptDocument,
  SingleProfByMatriculeDocument,
  SingleSectionDocument,
  useSingleSectionLazyQuery,
  useCreateAnnProfSubjDistroMutation,
  AnnProfSubjDistroCreateInput,
  SingleSectionForClassroomsDocument,
  AllSchoolYearsQuery,
  useSingleSchoolByPublicCodeLazyQuery,
  SingleSchoolByPublicCodeDocument,
  useSingleSectionForClassroomsLazyQuery,
  useSingleProfByMatriculeLazyQuery,
  useSubjectsOfADeptLazyQuery,
  SubjectsOfADeptDocument
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
      maxWidth: '45%',
      minWidth: '10rem'
    }
  })
);
const validationSchema = Yup.object().shape({
  // schoolYear: Yup.string().required('No school Year'),
  // sectionID: Yup.string().required('No Section'),
  // departmentID: Yup.string().required('No Dept'),
  // profMatricule: Yup.string().required('No prof Matricule')
});

const subjDistro = ({ schoolYears }: AllSchoolYearsQuery) => {
  const classes = useStyles();

  const [departmentID, setDepartmentID] = useState<string>('');

  const [classroomID, setClassroomID] = useState<string>('');

  const [schoolYearID, setSchoolYearID] = useState<string>('');
  const [subjectID, setSubjectID] = useState<string>('');

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
    { data: dataClass, loading: loadingClass }
  ] = useSingleSectionForClassroomsLazyQuery({
    query: SingleSectionForClassroomsDocument
  });

  const classroomsOptions: IOptions[] =
    dataClass?.sectionForClasses && dataClass?.sectionForClasses?.classrooms
      ? dataClass?.sectionForClasses?.classrooms?.map(classroom => ({
          value: classroom?.id,
          label: classroom?.className
        }))
      : [];
  console.log({ classroomsOptions });

  // get one section to obtain all the depts
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

  // get prof matricule to obtain their id
  const [
    SingleProfByMatriculeQuery,
    { data: dataProf }
  ] = useSingleProfByMatriculeLazyQuery({
    query: SingleProfByMatriculeDocument
  });

  const getProf =
    dataProf && dataProf?.profByMatricule
      ? dataProf?.profByMatricule
      : { id: '', prof1stName: '', prof2ndName: '', prof3rdName: '' };
  console.log({ getProf });

  // get the various subjects of the given dept
  const [
    SubjectsOfADeptQuery,
    { data: dataSubjs, loading: loadingSubj }
  ] = useSubjectsOfADeptLazyQuery({
    query: SubjectsOfADeptDocument
  });

  const subjsOptions: IOptions[] =
    dataSubjs?.department && dataSubjs?.department?.subjects
      ? dataSubjs?.department?.subjects?.map(subject => ({
          value: subject?.id,
          label: subject?.subjectName
        }))
      : [];
  console.log({ subjsOptions });

  const [
    SingleAnnProfDeptQuery,
    { data: dataAnnProf }
  ] = useSingleAnnProfDeptLazyQuery({
    query: SingleAnnProfDeptDocument
  });

  const allAnnProfDept:
    | Maybe<Maybe<AnnProfDeptFragmentFragment>[]>
    | null
    | undefined =
    dataAnnProf && dataAnnProf.yearlyProfDept ? dataAnnProf.yearlyProfDept : [];

  console.log({ allAnnProfDept });
  console.log({ getProf });
  console.log({ departmentID });
  console.log({ schoolYearID });

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const initialValues: AnnProfSubjDistroCreateInput = {
    Subject: {},
    Classroom: {},
    AnnProfDept: {}
  };
  const [
    CreateAnnProfSubjDistroMutation
  ] = useCreateAnnProfSubjDistroMutation();

  const handleDeptSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDepartmentID(event.target.value);
  };

  const handleClassSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
    setClassroomID(event.target.value);
  };

  const handleYearSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSchoolYearID(event.target.value);
  };

  const handleAnnProfDeptChange = (
    getProfID: string,
    getDeptID: string,
    getYearID: string
  ) => {
    console.log('running the query');
    SingleAnnProfDeptQuery({
      variables: {
        profId: getProfID,
        departmentId: getDeptID,
        schoolYearId: getYearID
      }
    });
  };

  const handleSubjectSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSubjectID(event.target.value);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (
        values: AnnProfSubjDistroCreateInput,
        { setSubmitting, resetForm }
      ) => {
        handleAnnProfDeptChange(getProf.id, departmentID, schoolYearID);
        const res = await CreateAnnProfSubjDistroMutation({
          variables: {
            data: {
              ...values,
              AnnProfDept: {
                connect: { id: allAnnProfDept[0] && allAnnProfDept[0].id }
              },
              Subject: { connect: { id: subjectID } },
              Classroom: { connect: { id: classroomID } }
            }
          }
          // update: (cache: any, { data }) => {
          //   const currentAnnProfDeptList = cache.readQuery({
          //     query: AllAnnProfDeptsDocument
          //   }) ?? { annProfDept: [] };
          //   const addedAnnProfDept = data?.createOneAnnProfDept;
          //   if (addedAnnProfDept) {
          //     cache.writeQuery({
          //       query: AllAnnProfDeptsDocument,
          //       data: {
          //         annProfDept: [
          //           ...currentAnnProfDeptList.annProfDept,
          //           addedAnnProfDept
          //         ]
          //       }
          //     });
          //   }
          // }
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
                    Subject distribution
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1} direction="row">
                <Grid item xs={12} md={6}>
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
                      SingleSectionForClassroomsQuery({
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
                    disabled={isSubmitting || loadingSection}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      handleDeptSelectChange(event);
                      SubjectsOfADeptQuery({
                        variables: { id: event.target.value }
                      });
                      handleAnnProfDeptChange(
                        getProf.id,
                        departmentID,
                        schoolYearID
                      );
                    }}
                    helpertext={<ErrorMessage name="departmentID" />}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    name="profName"
                    component={TextField}
                    type="text"
                    value={
                      `${getProf.prof1stName} ${getProf.prof2ndName} ${getProf.prof3rdName}` ||
                      ''
                    }
                    label="prof Name"
                    variant="outlined"
                    disabled
                    helpertext={<ErrorMessage name="profName" />}
                  />
                  <Field
                    name="profMatricule"
                    component={TextField}
                    type="text"
                    label="Prof Matricule"
                    variant="outlined"
                    disabled={isSubmitting}
                    helpertext={<ErrorMessage name="profMatricule" />}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      SingleProfByMatriculeQuery({
                        variables: {
                          profMatricule: event.target.value
                        }
                      });
                      handleAnnProfDeptChange(
                        getProf.id,
                        departmentID,
                        schoolYearID
                      );
                    }}
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
                      handleAnnProfDeptChange(
                        getProf.id,
                        departmentID,
                        schoolYearID
                      );
                    }}
                    helpertext={<ErrorMessage name="schoolYear" />}
                  />
                  <Field
                    name="classroomID"
                    component={Select}
                    type="text"
                    autoFocus={true}
                    options={classroomsOptions}
                    label="Choose Classroom"
                    variant="outlined"
                    disabled={isSubmitting || loadingClass}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      handleClassSelectChange(event);
                      handleAnnProfDeptChange(
                        getProf.id,
                        departmentID,
                        schoolYearID
                      );
                    }}
                    helpertext={<ErrorMessage name="classroomID" />}
                  />
                </Grid>
              </Grid>
              <Grid container direction="row">
                <Grid item xs={12}>
                  <Field
                    name="subjectID"
                    component={Select}
                    type="text"
                    autoFocus={true}
                    options={subjsOptions}
                    label="Choose Subject"
                    variant="outlined"
                    disabled={isSubmitting || loadingSection}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      handleSubjectSelectChange(event);
                      handleAnnProfDeptChange(
                        getProf.id,
                        departmentID,
                        schoolYearID
                      );
                    }}
                    helpertext={<ErrorMessage name="subjectID" />}
                  />
                </Grid>
              </Grid>
              <Notification notify={notify} setNotify={setNotify} />
              <Grid container direction="row">
                <Grid item xs={12}>
                  <div style={{ placeItems: 'center', display: 'grid' }}>
                    <Button disabled={isSubmitting} onClick={submitForm}>
                      {isSubmitting && <CircularProgress />}
                      {isSubmitting ? 'Registering' : 'Give Subject'}
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

const prisma = new PrismaClient();

export const getStaticProps: GetStaticProps = async () => {
  const allSchoolYears: SchoolYear[] = await prisma.schoolYear.findMany({
    orderBy: [{ yearName: 'asc' }, { yearCode: 'asc' }]
  });

  const stringifiedData = safeJsonStringify(allSchoolYears);
  const schoolYears = JSON.parse(stringifiedData);
  return { props: { schoolYears } };
};
export default subjDistro;
