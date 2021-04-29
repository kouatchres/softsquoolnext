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
import Notification from '../utils/Notification';
import {
  useCreateDivisionMutation,
  AllDivisionsDocument,
  useAllRegionsQuery,
  DivisionCreateInput,
  useSingleRegionQuery
} from '../../../generated/graphql';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageStyled: {
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(1.7),
      paddingRight: theme.spacing(1.7),
      maxWidth: '35%',
      minWidth: '10rem'
    }
    // [theme.breakpoints.up('sm')]: {
    //   maxWidth: '30%',
    //   minWidth: '8rem'
    // }
  })
);
const validationSchema = Yup.object().shape({
  divisionName: Yup.string().required('Libellé département Obligatoire'),
  divisionCode: Yup.string().required('Code département Obligatoire')
});

const NewDivision: FC<DivisionCreateInput> = () => {
  const classes = useStyles();
  const [regionID, setRegionID] = useState<string>('');

  const { data } = useAllRegionsQuery();
  const getRegions = data && data.regions;

  const regionsOptions = getRegions?.map(region => ({
    value: region?.id,
    label: region?.regName
  }));
  console.log({ regionsOptions });

  const { data: allDivsOfARegion } = useSingleRegionQuery({
    variables: { id: regionID }
  });
  console.log({ allDivsOfARegion });

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const initialValues: DivisionCreateInput = {
    divisionName: '',
    divisionCode: '',
    Region: {}
  };
  const [createDivisionMutation] = useCreateDivisionMutation();

  const handleSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRegionID(event.target.value);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (
        values: DivisionCreateInput,
        { setSubmitting, resetForm }
      ) => {
        const res = await createDivisionMutation({
          variables: {
            data: {
              ...values,
              Region: { connect: { id: regionID } }
            }
          },
          update: (cache: any, { data }) => {
            const currentDivisionList = cache.readQuery({
              query: AllDivisionsDocument
            }) ?? { divisions: [] };
            const addedDivision = data?.createOneDivision;
            if (addedDivision) {
              cache.writeQuery({
                query: AllDivisionsDocument,
                data: {
                  divisions: [...currentDivisionList.divisions, addedDivision]
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
            message: 'New division added',
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
                        New division
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
                          autoFocus={true}
                          options={regionsOptions}
                          label="Choix de region"
                          variant="outlined"
                          disabled={isSubmitting}
                          onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            handleSelectChange(event);
                          }}
                          helpertext={<ErrorMessage name="regionID" />}
                        />
                        <Field
                          name="divisionName"
                          component={TextField}
                          type="text"
                          label="Libellé département"
                          variant="outlined"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="divisionName" />}
                        />
                        <Field
                          name="divisionCode"
                          component={TextField}
                          type="text"
                          label="Code département"
                          variant="outlined"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="divisionCode" />}
                        />
                        <Notification notify={notify} setNotify={setNotify} />
                        <div style={{ placeItems: 'center', display: 'grid' }}>
                          <Button disabled={isSubmitting} onClick={submitForm}>
                            {isSubmitting && <CircularProgress />}
                            {isSubmitting
                              ? 'Creating Division'
                              : 'New division'}
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

// const prisma = new PrismaClient()

// export const getStaticProps: GetStaticProps = async () => {
//   const allRegions:Region[] = await prisma.region.findMany({
//     orderBy: [{ regName: 'asc', }, { regCode: 'asc', },],
//   });

//   const stringifiedData = safeJsonStringify(allRegions);
//   const regions = JSON.parse(stringifiedData);
//   return { props: { regions }, };
// }

export default NewDivision;
