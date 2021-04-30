import React, { useState, FC, ChangeEvent } from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { TextField } from 'material-ui-formik-components/TextField';
import { useRouter } from 'next/router';
import randomize from 'randomatic';
import {
  Grid,
  Typography,
  Paper,
  Button,
  LinearProgress,
  CircularProgress
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import FRadioGroup from 'muiComponents/controls/SygefexMuiRadioGroup';
import {
  makeStyles,
  Theme,
  createStyles,
  useTheme
} from '@material-ui/core/styles';
import * as Yup from 'yup';
import Notification from 'utils/Notification';
import {
  useCreateProfMutation,
  AllProfsDocument,
  ProfCreateInput
} from '../../../generated/graphql';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageStyled: {
      margin: 'auto',
      borderTop: '1.5rem solid #829079',
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(1.7),
      paddingRight: theme.spacing(1.7),
      paddingBottom: theme.spacing(1.3),

      maxWidth: '45%',
      minWidth: '30%'
    },
    titleBackground: {
      backgroundColor: '#425ade',
      color: '#eafbc1'
    }
  })
);

const validationSchema = Yup.object().shape({
  prof1stName: Yup.string().required('Nom obligatoire'),
  prof2ndName: Yup.string().required('Prénom obligatoire'),
  prof3rdName: Yup.string(),
  profMatricule: Yup.string(),
  image: Yup.string(),
  profSecretCode: Yup.string(),
  specialty: Yup.string(),
  phoneNumber: Yup.number().required('Numéro de portable obligatoire'),
  gender: Yup.string().required('Choix du sexe obligatoire'),
  email: Yup.string().email('Email invalide').required('Email obligatoire')
});

const CreateProf: FC<ProfCreateInput> = () => {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();

  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [image, setImage] = useState<string>('');

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const initialValues: ProfCreateInput = {
    prof1stName: '',
    prof2ndName: '',
    prof3rdName: '',
    email: '',
    profMatricule: '',
    profSecretCode: '',
    specialty: '',
    image: '',
    phoneNumber: 0,
    gender: ''
  };
  const [createProfMutation] = useCreateProfMutation();

  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length) {
      const files: FileList = event.target.files;
      console.log({ files });
      const data = new FormData();
      data.append('file', files[0]);
      data.append('upload_preset', 'ineximages');
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/inex/image/upload',
        {
          method: 'POST',
          body: data
        }
      );
      const file = await res.json();
      console.log(file);
      setImage(file.secure_url);
    }
  };

  console.log({ image });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createProfMutation({
          variables: {
            data: {
              ...values,
              image,
              profSecretCode: randomize('*', 20, {
                exclude: "~!^()_+-={}[];',."
              }),
              profMatricule: randomize('Aa0', 10)
            }
          },
          //   router.push({
          //   pathname: '/show/singleCand',
          //   query: {
          //     id: res.data.createMultipleCandidates.id,
          //   },
          // }),
          update: (cache: any, { data }) => {
            const currentProfList = cache.readQuery({
              query: AllProfsDocument
            }) ?? { profs: [] };
            const addedProf = data?.createOneProf;
            if (addedProf) {
              cache.writeQuery({
                query: AllProfsDocument,
                data: {
                  profs: [...currentProfList.profs, addedProf]
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
            message: 'New prof added',
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
              <Grid container direction="row" justify="center">
                <Grid item>
                  <Typography
                    align={matchesSM ? 'center' : undefined}
                    color="primary"
                    gutterBottom
                    variant="h6"
                    component="h5"
                  >
                    Prof Info
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} direction="row">
                <Grid item xs={12} md={6}>
                  <Field
                    helperText={<ErrorMessage name="prof1stName" />}
                    component={TextField}
                    name="prof1stName"
                    label="Nom"
                    disabled={isSubmitting}
                  />

                  <Field
                    helperText={<ErrorMessage name="prof2ndName" />}
                    component={TextField}
                    name="prof2ndName"
                    label="Prénom"
                    disabled={isSubmitting}
                  />
                  <Field
                    helperText={<ErrorMessage name="prof3rdName" />}
                    component={TextField}
                    name="prof3rdName"
                    label="Autres Noms"
                    disabled={isSubmitting}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    helperText={<ErrorMessage name="phoneNumber" />}
                    component={TextField}
                    name="phoneNumber"
                    type="number"
                    label="No de tel"
                    disabled={isSubmitting}
                  />
                  <Field
                    helperText={<ErrorMessage name="specialty" />}
                    component={TextField}
                    name="specialty"
                    label="Specialty"
                    disabled={isSubmitting}
                  />

                  <Field
                    helperText={<ErrorMessage name="email" />}
                    component={TextField}
                    name="email"
                    type="email"
                    label="Email"
                    disabled={isSubmitting}
                  />
                </Grid>
              </Grid>
              <Grid container direction="row">
                <Grid item xs={12}>
                  <Field
                    helperText={<ErrorMessage name="file" />}
                    component={TextField}
                    label="Votre photo"
                    name="file"
                    type="file"
                    autoFocus={true}
                    onChange={uploadFile}
                    disabled={isSubmitting}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container direction="row">
                <Grid item xs={12} md={6}>
                  <Field
                    helpertext={<ErrorMessage name="Gender" />}
                    required
                    name="gender"
                    id="gender"
                    component={FRadioGroup}
                    label="Sexe"
                    options={[
                      { value: 'M', label: 'Male' },
                      { value: 'F', label: 'Femele' }
                    ]}
                    groupProps={{ row: true }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <img
                    style={{
                      height: 'auto',
                      width: '40%',
                      display: 'grid',
                      placeItems: 'center',
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      borderRadius: '0.5rem',
                      margin: 'auto',
                      marginBottom: '0.2rem'
                    }}
                    src={image}
                    alt="Upload image"
                  />
                </Grid>
              </Grid>
              <Notification notify={notify} setNotify={setNotify} />

              <Grid container direction="row">
                <Grid item xs={12} justify="center">
                  <div style={{ display: 'grid', placeItems: 'center' }}>
                    <Button disabled={isSubmitting} onClick={submitForm}>
                      {isSubmitting && <CircularProgress />}
                      {isSubmitting ? 'Creating prof' : 'New prof'}
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Form>
          </Paper>
        );
      }}
    </Formik>
  );
};
export default CreateProf;
