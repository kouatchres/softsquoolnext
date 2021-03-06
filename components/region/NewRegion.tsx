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
import Notification from '../utils/Notification';
import {
  useCreateRegionMutation,
  AllRegionsDocument,
  RegionCreateInput,
  AllRegionsQuery
} from '../../generated/graphql';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageStyled: {
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(3)
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '30%',
      minWidth: '8rem'
    }
  })
);
const validationSchema = Yup.object().shape({
  regName: Yup.string().required('Libellé Région Obligatoire'),
  regCode: Yup.string().required('Code Région Obligatoire')
});

const NewRegion = () => {
  const classes = useStyles();

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const initialValues: RegionCreateInput = {
    regName: '',
    regCode: ''
  };
  const [createRegionMutation] = useCreateRegionMutation();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createRegionMutation({
          variables: { data: values },
          update: (cache: any, { data }) => {
            const currentRegionList = cache.readQuery({
              query: AllRegionsDocument
            }) ?? { regions: [] };
            const addedRegion = data?.createOneRegion;
            if (addedRegion) {
              cache.writeQuery({
                query: AllRegionsDocument,
                data: {
                  regions: [...currentRegionList.regions, addedRegion]
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
            message: 'New region added',
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
                        New region
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={5} direction="row">
                  <Grid item sm={12}>
                    <Grid container direction="column">
                      <Grid item>
                        <Field
                          name="regName"
                          component={TextField}
                          type="text"
                          label="Libellé Région"
                          variant="outlined"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="regName" />}
                        />
                        <Field
                          name="regCode"
                          component={TextField}
                          type="text"
                          label="Code Région"
                          variant="outlined"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="regCode" />}
                        />
                        <Notification notify={notify} setNotify={setNotify} />
                        <div style={{ placeItems: 'center', display: 'grid' }}>
                          <Button disabled={isSubmitting} onClick={submitForm}>
                            {isSubmitting && <CircularProgress />}
                            {isSubmitting ? 'Creating Region' : 'New region'}
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
export default NewRegion;
