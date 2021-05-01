import React, { useState, ChangeEvent, FC } from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import randomize from 'randomatic';
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
  Region,
  AllSchoolsDocument,
  useCreateSchoolMutation,
  useSingleRegionLazyQuery,
  useSingleSubdivisionLazyQuery,
  SingleRegionDocument,
  SingleDivisionDocument,
  SingleSubdivisionDocument,
  SchoolCreateInput,
  useSingleDivisionLazyQuery,
  AllRegionsQuery
} from '../../../generated/graphql';
import { PrismaClient } from '@prisma/client';
import { GetStaticProps } from 'next';
import safeJsonStringify from 'safe-json-stringify';
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
  schoolName: Yup.string().required('Libellé Ville Obligatoire'),
  schoolCode: Yup.string().required('Code Ville Obligatoire')
});

const CreateSchool = ({ regions }: AllRegionsQuery) => {
  const classes = useStyles();

  const [townID, setTownID] = useState<string | undefined | null>('');

  const regionsOptions = regions
    ? regions?.map(region => ({ value: region?.id, label: region?.regName }))
    : [];
  console.log({ regionsOptions });

  const [
    SingleRegionQuery,
    { data, loading, error }
  ] = useSingleRegionLazyQuery({ query: SingleRegionDocument });

  const divisionsOptions: IOptions[] =
    data && data.region && data.region.divisions
      ? data.region?.divisions?.map(division => ({
          value: division?.id,
          label: division?.divisionName
        }))
      : [];
  console.log({ divisionsOptions });

  const [
    SingleDivisionQuery,
    { data: dataDivision, loading: loadingDiv, error: errDiv }
  ] = useSingleDivisionLazyQuery({ query: SingleDivisionDocument });

  const subdivisionsOptions: IOptions[] =
    dataDivision && dataDivision.division && dataDivision.division.subdivisions
      ? dataDivision.division?.subdivisions?.map(subdivision => ({
          value: subdivision?.id,
          label: subdivision?.subdivName
        }))
      : [];
  console.log({ subdivisionsOptions });

  const [
    SingleSubdivisionQuery,
    { data: dataSubdivision, loading: loadingSubdiv, error: errSubdiv }
  ] = useSingleSubdivisionLazyQuery({ query: SingleSubdivisionDocument });

  const townsOptions: IOptions[] =
    dataSubdivision &&
    dataSubdivision.subdivision &&
    dataSubdivision.subdivision.towns
      ? dataSubdivision.subdivision?.towns?.map(town => ({
          value: town?.id,
          label: town?.townName
        }))
      : [];
  console.log({ townsOptions });

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const initialValues: SchoolCreateInput = {
    schoolName: '',
    schoolCode: '',
    schoolSecretCode: '',
    schoolPublicCode: '',
    Town: {}
  };
  const [createSchoolMutation, { error: errMut }] = useCreateSchoolMutation();

  const handleTownSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTownID(event.target.value);
    console.log({ townID });
  };

  console.log({ townID });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (
        values: SchoolCreateInput,
        { setSubmitting, resetForm }
      ) => {
        const res = await createSchoolMutation({
          variables: {
            data: {
              ...values,
              schoolSecretCode: randomize('*', 25, {
                exclude: "~!^()_+-={}[];',."
              }),
              schoolPublicCode: randomize('Aa0', 12),
              Town: { connect: { id: townID } }
            }
          },
          update: (cache: any, { data }) => {
            const currentSchoolList = cache.readQuery({
              query: AllSchoolsDocument
            }) ?? { schools: [] };
            const addedSchool = data?.createOneSchool;
            if (addedSchool) {
              cache.writeQuery({
                query: AllSchoolsDocument,
                data: {
                  schools: [...currentSchoolList.schools, addedSchool]
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
            message: 'New school created',
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
              {/* <Error error={error || errMut ||errSubdiv  ||errDiv} /> */}

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
                        New School
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={5} direction="row">
                  <Grid item sm={12}>
                    <Grid container direction="column">
                      <Grid item>
                        <Field
                          name="regionID"
                          component={Select}
                          type="text"
                          options={regionsOptions}
                          label="Choix de region"
                          variant="outlined"
                          disabled={isSubmitting}
                          onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            SingleRegionQuery({
                              variables: { id: event.target.value }
                            });
                          }}
                          helpertext={<ErrorMessage name="regionID" />}
                        />

                        <Field
                          name="divisionID"
                          component={Select}
                          type="text"
                          options={divisionsOptions}
                          label="Choix du Department"
                          variant="outlined"
                          disabled={isSubmitting || !data}
                          onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            SingleDivisionQuery({
                              variables: { id: event.target.value }
                            });
                          }}
                          helpertext={<ErrorMessage name="divisionID" />}
                        />

                        <Field
                          name="subdivisionID"
                          component={Select}
                          type="text"
                          options={subdivisionsOptions}
                          label="Choix de l'arrondissement"
                          variant="outlined"
                          disabled={isSubmitting || !dataDivision}
                          onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            SingleSubdivisionQuery({
                              variables: { id: event.target.value }
                            });
                          }}
                          helpertext={<ErrorMessage name="subdivisionID" />}
                        />

                        <Field
                          name="TownID"
                          component={Select}
                          type="text"
                          options={townsOptions}
                          label="Choix de la ville"
                          variant="outlined"
                          disabled={isSubmitting || !dataSubdivision}
                          onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            handleTownSelectChange(event);
                          }}
                          helpertext={<ErrorMessage name="TownID" />}
                        />
                        <Field
                          name="schoolName"
                          component={TextField}
                          type="text"
                          label="Libellé Ecole"
                          variant="outlined"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="schoolName" />}
                        />
                        <Field
                          name="schoolCode"
                          component={TextField}
                          type="text"
                          label="Code Ecole"
                          variant="outlined"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="schoolCode" />}
                        />

                        <Notification notify={notify} setNotify={setNotify} />
                        <div style={{ placeItems: 'center', display: 'grid' }}>
                          <Button disabled={isSubmitting} onClick={submitForm}>
                            {isSubmitting && <CircularProgress />}
                            {isSubmitting ? 'Creating School' : 'New School'}
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
  const allRegions: Region[] = await prisma.region.findMany({
    orderBy: [{ regName: 'asc' }, { regCode: 'asc' }]
  });

  const stringifiedData = safeJsonStringify(allRegions);
  const regions = JSON.parse(stringifiedData);
  return { props: { regions } };
};

export default CreateSchool;
