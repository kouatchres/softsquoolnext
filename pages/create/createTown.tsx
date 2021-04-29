import React, { useState, ChangeEvent } from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';
// import Error from "../../ErrorMessage"

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
  Region,
  AllTownsDocument,
  useCreateTownMutation,
  useSingleRegionLazyQuery,
  SingleRegionDocument,
  SingleDivisionDocument,
  TownCreateInput,
  useSingleDivisionLazyQuery,
  AllRegionsQuery
} from '../../generated/graphql';
import { PrismaClient } from '@prisma/client';
import { GetStaticProps } from 'next';
import safeJsonStringify from 'safe-json-stringify';

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
  townName: Yup.string().required('Libellé Ville Obligatoire'),
  townCode: Yup.string().required('Code Ville Obligatoire')
});

const createTown = ({ regions }: AllRegionsQuery) => {
  const classes = useStyles();

  const [subdivisionID, setSubdivisionID] = useState<string | undefined | null>(
    ''
  );

  const regionsOptions =
    regions &&
    regions?.map(region => ({ value: region?.id, label: region?.regName }));
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

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const initialValues: TownCreateInput = {
    townName: '',
    townCode: '',
    Subdivision: {}
  };
  const [createTownMutation, { error: errMut }] = useCreateTownMutation();

  const handleSubdivisionSelectChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setSubdivisionID(event.target.value);
    console.log({ subdivisionID });
  };

  console.log({ subdivisionID });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (
        values: TownCreateInput,
        { setSubmitting, resetForm }
      ) => {
        const res = await createTownMutation({
          variables: {
            data: {
              ...values,
              Subdivision: { connect: { id: subdivisionID } }
            }
          },
          update: (cache: any, { data }) => {
            const currentTownList = cache.readQuery({
              query: AllTownsDocument
            }) ?? { towns: [] };
            const addedTown = data?.createOneTown;
            if (addedTown) {
              cache.writeQuery({
                query: AllTownsDocument,
                data: {
                  towns: [...currentTownList.towns, addedTown]
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
            message: 'New town created',
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
              {/* <Error error={ error || errMut ||errDiv} /> */}

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
                        New Town
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
                          label="Choix de l'arrondissment"
                          variant="outlined"
                          disabled={isSubmitting || !dataDivision}
                          onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            handleSubdivisionSelectChange(event);
                          }}
                          helpertext={<ErrorMessage name="subdivisionID" />}
                        />
                        <Field
                          name="townName"
                          component={TextField}
                          type="text"
                          label="Libellé Ville"
                          variant="outlined"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="townName" />}
                        />
                        <Field
                          name="townCode"
                          component={TextField}
                          type="text"
                          label="Code Ville"
                          variant="outlined"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="townCode" />}
                        />
                        <Notification notify={notify} setNotify={setNotify} />
                        <div style={{ placeItems: 'center', display: 'grid' }}>
                          <Button disabled={isSubmitting} onClick={submitForm}>
                            {isSubmitting && <CircularProgress />}
                            {isSubmitting ? 'Creating Town' : 'New Town'}
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

export default createTown;
