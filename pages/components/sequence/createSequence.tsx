import React, { useState, useEffect, ChangeEvent, FC } from 'react';
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
import Notification from 'utils/Notification';
import {
  Term,
  useCreateSequenceMutation,
  AllSequencesDocument,
  SequenceCreateInput,
  AllTermsQuery
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
    // [theme.breakpoints.up('sm')]: {
    //   maxWidth: '20%',
    //   minWidth: '8rem'
    // }
  })
);
const validationSchema = Yup.object().shape({
  seqName: Yup.string().required('Libellé séquence Obligatoire'),
  seqCode: Yup.string().required('Code séquence Obligatoire')
});

const NewSequence = ({ terms }: AllTermsQuery) => {
  const classes = useStyles();
  const [termID, setTermID] = useState<string>('');

  const termOptions: IOptions[] = terms
    ? terms?.map(term => ({ value: term?.id, label: term?.termName }))
    : [];
  console.log({ termOptions });

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const initialValues: SequenceCreateInput = {
    seqName: '',
    seqCode: '',
    Term: {}
  };
  const [createSequenceMutation] = useCreateSequenceMutation();

  const handleSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTermID(event.target.value);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (
        values: SequenceCreateInput,
        { setSubmitting, resetForm }
      ) => {
        const res = await createSequenceMutation({
          variables: {
            data: {
              ...values,
              Term: { connect: { id: termID } }
            }
          },
          update: (cache: any, { data }) => {
            const currentSequenceList = cache.readQuery({
              query: AllSequencesDocument
            }) ?? { sequences: [] };
            const addedSequence = data?.createOneSequence;
            if (addedSequence) {
              cache.writeQuery({
                query: AllSequencesDocument,
                data: {
                  sequences: [...currentSequenceList.sequences, addedSequence]
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
            message: 'New sequence  added',
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
              {/* <Error error={errMut} /> */}

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
                        New sequence
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={5} direction="row">
                  <Grid item sm={12}>
                    <Grid container direction="column">
                      <Grid item>
                        <Field
                          name="termID"
                          component={Select}
                          type="text"
                          autoFocus={true}
                          options={termOptions}
                          label="Choix de tern"
                          variant="outlined"
                          disabled={isSubmitting}
                          onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            handleSelectChange(event);
                          }}
                          helpertext={<ErrorMessage name="termID" />}
                        />
                        <Field
                          name="seqName"
                          component={TextField}
                          type="text"
                          label="Libellé séquence"
                          variant="outlined"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="seqName" />}
                        />
                        <Field
                          name="seqCode"
                          component={TextField}
                          type="text"
                          label="Code séquence"
                          variant="outlined"
                          disabled={isSubmitting}
                          helpertext={<ErrorMessage name="seqCode" />}
                        />
                        <Notification notify={notify} setNotify={setNotify} />
                        <div style={{ placeItems: 'center', display: 'grid' }}>
                          <Button disabled={isSubmitting} onClick={submitForm}>
                            {isSubmitting && <CircularProgress />}
                            {isSubmitting
                              ? 'Creating Sequence'
                              : 'New sequence'}
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
  const allTerms: Term[] = await prisma.term.findMany({
    orderBy: [{ termName: 'asc' }, { termCode: 'asc' }]
  });

  const stringifiedData = safeJsonStringify(allTerms);
  const terms = JSON.parse(stringifiedData);
  return { props: { terms } };
};

export default NewSequence;
