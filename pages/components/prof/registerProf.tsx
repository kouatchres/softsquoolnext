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
  SchoolYear,
  SingleProfByMatriculeDocument,
  SingleSectionDocument,
  useSingleSectionLazyQuery,
  useCreateAnnProfDeptMutation,
  AllAnnProfDeptsDocument,
  AnnProfDeptCreateInput,
  SingleSchoolByPublicCodeDocument,
  AllSchoolYearsQuery,
  useSingleSchoolByPublicCodeLazyQuery,
  useSingleProfByMatriculeLazyQuery
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
  // schoolYear: Yup.string().required('No school Year'),
  // sectionID: Yup.string().required('No Section'),
  // departmentID: Yup.string().required('No Dept'),
  // profMatricule: Yup.string().required('No prof Matricule')
});

const registerProf = ({ schoolYears }: AllSchoolYearsQuery) => {
  const classes = useStyles();

  const [departmentID, setDepartmentID] = useState<string>('');

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

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const initialValues: AnnProfDeptCreateInput = {
    SchoolYear: {},
    Prof: {},
    Department: {}
  };
  const [createAnnProfDeptMutation] = useCreateAnnProfDeptMutation();

  const handleDeptSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDepartmentID(event.target.value);
  };

  const handleYearSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSchoolYearID(event.target.value);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (
        values: AnnProfDeptCreateInput,
        { setSubmitting, resetForm }
      ) => {
        const res = await createAnnProfDeptMutation({
          variables: {
            data: {
              ...values,
              Department: { connect: { id: departmentID } },
              Prof: { connect: { id: getProf.id } },
              SchoolYear: { connect: { id: schoolYearID } }
            }
          },
          update: (cache: any, { data }) => {
            const currentAnnProfDeptList = cache.readQuery({
              query: AllAnnProfDeptsDocument
            }) ?? { annProfDept: [] };
            const addedAnnProfDept = data?.createOneAnnProfDept;
            if (addedAnnProfDept) {
              cache.writeQuery({
                query: AllAnnProfDeptsDocument,
                data: {
                  annProfDept: [
                    ...currentAnnProfDeptList.annProfDept,
                    addedAnnProfDept
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
                    Register Prof
                  </Typography>
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
                        disabled={isSubmitting || loadingSection}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                          handleDeptSelectChange(event);
                        }}
                        helpertext={<ErrorMessage name="departmentID" />}
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
                        }}
                      />
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
                      <Notification notify={notify} setNotify={setNotify} />
                      <div style={{ placeItems: 'center', display: 'grid' }}>
                        <Button
                          disabled={isSubmitting}
                          onClick={submitForm}
                          // startIcon={<SaveIcon />}
                        >
                          {isSubmitting && <CircularProgress />}
                          {isSubmitting ? 'Registering' : 'Register prof'}
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
export default registerProf;
