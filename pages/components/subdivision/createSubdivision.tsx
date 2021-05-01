import React, { useState, ChangeEvent } from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';
// import Error from "../../ErrorMessage"

import { TextField } from 'material-ui-formik-components/TextField';
import { Select } from 'material-ui-formik-components/Select';
import { IOptions } from '../interfaces';
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
  AllSubdivisionsDocument,
  useCreateSubdivisionMutation,
  useSingleRegionLazyQuery,
  SingleRegionDocument,
  SubdivisionCreateInput,
  AllRegionsQuery
} from '../../../generated/graphql';
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
    // [theme.breakpoints.up('sm')]: {
    //   maxWidth: '20%',
    //   minWidth: '8rem'
    // }
  })
);
const validationSchema = Yup.object().shape({
  subdivName: Yup.string().required('Libellé département Obligatoire'),
  subdivCode: Yup.string().required('Code département Obligatoire')
});

const CreateSubdivision = ({ regions }: AllRegionsQuery) => {
  const classes = useStyles();

  const [divisionID, setDivisionID] = useState<string | undefined | null>('');

  const regionsOptions =
    regions &&
    regions?.map(region => ({ value: region?.id, label: region?.regName }));
  console.log({ regionsOptions });

  const [SingleRegionQuery, { data, error }] = useSingleRegionLazyQuery({
    query: SingleRegionDocument
  });

  const divisionsOptions: IOptions[] =
    data && data.region && data.region.divisions
      ? data.region?.divisions?.map(division => ({
          value: division?.id,
          label: division?.divisionName
        }))
      : [];
  console.log({ divisionsOptions });

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const initialValues: SubdivisionCreateInput = {
    subdivName: '',
    subdivCode: '',
    Division: {}
  };
  const [
    createSubdivisionMutation,
    { error: errMut }
  ] = useCreateSubdivisionMutation();

  const handleDivisionSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDivisionID(event.target.value);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (
        values: SubdivisionCreateInput,
        { setSubmitting, resetForm }
      ) => {
        const res = await createSubdivisionMutation({
          variables: {
            data: {
              ...values,
              Division: { connect: { id: divisionID } }
            }
          },
          update: (cache: any, { data }) => {
            const currentSubdivisionList = cache.readQuery({
              query: AllSubdivisionsDocument
            }) ?? { subdivisions: [] };
            const addedSubdivision = data?.createOneSubdivision;
            if (addedSubdivision) {
              cache.writeQuery({
                query: AllSubdivisionsDocument,
                data: {
                  subdivisions: [
                    ...currentSubdivisionList.subdivisions,
                    addedSubdivision
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
            message: 'New subdivision created',
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
              {/* <Error error={error || errMut} /> */}

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
                        New Subdivision
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
                            handleDivisionSelectChange(event);
                          }}
                          helpertext={<ErrorMessage name="divisionID" />}
                        />
                        <Field
                          name="subdivName"
                          component={TextField}
                          type="text"
                          label="Libellé département"
                          variant="outlined"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="subdivName" />}
                        />
                        <Field
                          name="subdivCode"
                          component={TextField}
                          type="text"
                          label="Code département"
                          variant="outlined"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="subdivCode" />}
                        />
                        <Notification notify={notify} setNotify={setNotify} />
                        <div style={{ placeItems: 'center', display: 'grid' }}>
                          <Button disabled={isSubmitting} onClick={submitForm}>
                            {isSubmitting && <CircularProgress />}
                            {isSubmitting
                              ? 'Creating subdivision'
                              : 'New ssubdivision'}
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

export default CreateSubdivision;
