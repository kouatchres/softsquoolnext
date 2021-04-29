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
  useCreateTermMutation,
  AllTermsDocument,
  TermCreateInput
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
  termName: Yup.string().required('Libellé Région Obligatoire'),
  termCode: Yup.string().required('Code Région Obligatoire')
});

const CreateTerm: FC<TermCreateInput> = () => {
  const classes = useStyles();

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const initialValues: TermCreateInput = {
    termName: '',
    termCode: ''
  };
  const [createTermMutation] = useCreateTermMutation();
  // const { data, loading error } = useAllTermsQuery()

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createTermMutation({
          variables: { data: values },
          update: (cache: any, { data }) => {
            const currentTermList = cache.readQuery({
              query: AllTermsDocument
            }) ?? { terms: [] };
            const addedTerm = data?.createOneTerm;
            if (addedTerm) {
              cache.writeQuery({
                query: AllTermsDocument,
                data: {
                  terms: [...currentTermList.terms, addedTerm]
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
            message: 'New term added',
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
                        New term
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={5} direction="row">
                  <Grid item sm={12}>
                    <Grid container direction="column">
                      <Grid item>
                        <Field
                          name="termName"
                          component={TextField}
                          type="text"
                          label="Libellé Trimestre"
                          variant="outlined"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="termName" />}
                        />
                        <Field
                          name="termCode"
                          component={TextField}
                          type="text"
                          label="Code Trimestre"
                          variant="outlined"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="termCode" />}
                        />
                        <Notification notify={notify} setNotify={setNotify} />
                        <div style={{ placeItems: 'center', display: 'grid' }}>
                          <Button disabled={isSubmitting} onClick={submitForm}>
                            {isSubmitting && <CircularProgress />}
                            {isSubmitting ? 'Creating Term' : 'New term'}
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
export default CreateTerm;
