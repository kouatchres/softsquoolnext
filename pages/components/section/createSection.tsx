import React, { useState, ChangeEvent } from 'react';
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
  useSingleSchoolByPublicCodeLazyQuery,
  SingleSchoolByPublicCodeDocument,
  useCreateSectionMutation,
  SectionCreateInput,
  AllSectionsDocument
} from '../../../generated/graphql';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageStyled: {
      margin: 'auto',
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(1.2),
      paddingRight: theme.spacing(1.2),
      maxWidth: '25%',
      minWidth: '10rem',
      borderTop: '1.5rem solid #829079'
    }
  })
);
const validationSchema = Yup.object().shape({
  sectionName: Yup.string().required('Libellé Section Obligatoire'),
  sectionCode: Yup.string().required('Code Section Obligatoire')
});

const createSection = () => {
  const classes = useStyles();

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

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const initialValues: SectionCreateInput = {
    sectionName: '',
    sectionCode: '',
    School: {}
  };
  const [createSectionMutation] = useCreateSectionMutation();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (
        values: SectionCreateInput,
        { setSubmitting, resetForm }
      ) => {
        const res = await createSectionMutation({
          variables: {
            data: {
              ...values,
              School: { connect: { id: id } }
            }
          },
          update: (cache: any, { data }) => {
            const currentSectionList = cache.readQuery({
              query: AllSectionsDocument
            }) ?? { sections: [] };
            const addedSection = data?.createOneSection;
            if (addedSection) {
              cache.writeQuery({
                query: AllSectionsDocument,
                data: {
                  sections: [...currentSectionList.sections, addedSection]
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
            message: 'New section created',
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
                        New Section
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
                          name="sectionName"
                          component={TextField}
                          type="text"
                          label="Libellé Section"
                          variant="outlined"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="sectionName" />}
                        />
                        <Field
                          name="sectionCode"
                          component={TextField}
                          type="text"
                          label="Code Section"
                          variant="outlined"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="sectionCode" />}
                        />
                        <Notification notify={notify} setNotify={setNotify} />
                        <div style={{ placeItems: 'center', display: 'grid' }}>
                          <Button disabled={isSubmitting} onClick={submitForm}>
                            {isSubmitting && <CircularProgress />}
                            {isSubmitting ? 'Creating Section' : 'New Section'}
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

export default createSection;
