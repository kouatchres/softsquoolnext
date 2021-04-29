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
import Notification from '../../components/utils/Notification';
import {
  SchoolYear,
  SingleProfByMatriculeDocument,
  SingleSectionDocument,
  useSingleSectionLazyQuery,
  useCreateAnnProfDeptMutation,
  AllAnnProfDeptsDocument,
  AnnProfDeptCreateInput,
  SingleSchoolBySecretCodeDocument,
  AllSchoolYearsQuery,
  useSingleSchoolBySecretCodeLazyQuery,
  useSingleProfByMatriculeLazyQuery
} from '../../generated/graphql';
import { IOptions } from '../../interfaces';
import { PrismaClient } from '@prisma/client';
import { GetStaticProps } from 'next';
import safeJsonStringify from 'safe-json-stringify';

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
  // subjectName: Yup.string().required('Libellé département Obligatoire'),
  // subjectCode: Yup.string().required('Code département Obligatoire')
});

const createAnnProfDept = ({ schoolYears }: AllSchoolYearsQuery) => {
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

  // from school secret code get sections in the school
  const [
    SingleSchoolBySchoolSecretCodeQuery,
    { data }
  ] = useSingleSchoolBySecretCodeLazyQuery({
    query: SingleSchoolBySecretCodeDocument
  });

  const { schoolName, id } =
    data && data.schoolBySecretCode
      ? data.schoolBySecretCode
      : { schoolName: '', id: '' };
  console.log({ data });

  const sectionsOptions: IOptions[] =
    data?.schoolBySecretCode && data?.schoolBySecretCode?.sections
      ? data?.schoolBySecretCode?.sections?.map(section => ({
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

  const getprofId =
    dataProf && dataProf?.profByMatricule
      ? dataProf?.profByMatricule
      : { id: '' };
  console.log({ getprofId });

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
              Prof: { connect: { id: getprofId.id } },
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
            message: 'New annProfDept added',
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
                        Prof Yearly Dept
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
                          name="schoolSecretCode"
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
                          helpertext={<ErrorMessage name="schoolSecretCode" />}
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
                          disabled={
                            isSubmitting || loadingSection || !dataSection
                          }
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

                        <Notification notify={notify} setNotify={setNotify} />
                        <div style={{ placeItems: 'center', display: 'grid' }}>
                          <Button disabled={isSubmitting} onClick={submitForm}>
                            {isSubmitting && <CircularProgress />}
                            {isSubmitting
                              ? 'Creating AnnProfDept'
                              : 'Prof yearly dept'}
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

const prisma = new PrismaClient();

export const getStaticProps: GetStaticProps = async () => {
  const allSchoolYears: SchoolYear[] = await prisma.schoolYear.findMany({
    orderBy: [{ yearName: 'asc' }, { yearCode: 'asc' }]
  });

  const stringifiedData = safeJsonStringify(allSchoolYears);
  const schoolYears = JSON.parse(stringifiedData);
  return { props: { schoolYears } };
};
export default createAnnProfDept;
