import React, { useState, FC } from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { TextField } from 'material-ui-formik-components/TextField';
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
  useCreateSchoolYearMutation,
  AllSchoolYearsDocument,
  SchoolYearCreateInput
} from '../../../generated/graphql';

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
  yearName: Yup.string().required('Libellé Région Obligatoire'),
  yearCode: Yup.string().required('Code Région Obligatoire')
});

const CreateSchoolYear: FC<SchoolYearCreateInput> = () => {
  const classes = useStyles();

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const initialValues: SchoolYearCreateInput = {
    yearName: '',
    yearCode: ''
  };
  const [createSchoolYearMutation] = useCreateSchoolYearMutation();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createSchoolYearMutation({
          variables: { data: values },
          update: (cache: any, { data }) => {
            const currentSchoolYearList = cache.readQuery({
              query: AllSchoolYearsDocument
            }) ?? { schoolYears: [] };
            const addedSchoolYear = data?.createOneSchoolYear;
            if (addedSchoolYear) {
              cache.writeQuery({
                query: AllSchoolYearsDocument,
                data: {
                  schoolYears: [
                    ...currentSchoolYearList.schoolYears,
                    addedSchoolYear
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
            message: 'New School Year added',
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
                        New schoolYear
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={5} direction="row">
                  <Grid item sm={12}>
                    <Grid container direction="column">
                      <Grid item>
                        <Field
                          name="yearName"
                          component={TextField}
                          type="text"
                          label="Libellé Année"
                          variant="outlined"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="yearName" />}
                        />
                        <Field
                          name="yearCode"
                          component={TextField}
                          type="text"
                          label="Code Année"
                          variant="outlined"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="yearCode" />}
                        />
                        <Notification notify={notify} setNotify={setNotify} />
                        <div style={{ placeItems: 'center', display: 'grid' }}>
                          <Button disabled={isSubmitting} onClick={submitForm}>
                            {isSubmitting && <CircularProgress />}
                            {isSubmitting
                              ? 'Creating SchoolYear'
                              : 'New schoolYear'}
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
export default CreateSchoolYear;
