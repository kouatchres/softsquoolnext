import React, { useState, FC, ChangeEvent } from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { TextField } from 'material-ui-formik-components/TextField';
import { uniqueCodeGen } from '../../components/utils/Functions';
import { useRouter } from 'next/router';
import {
  Grid,
  Typography,
  Paper,
  Button,
  LinearProgress,
  CircularProgress
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import FRadioGroup from '../../components/muiComponents/controls/SygefexMuiRadioGroup';
import {
  makeStyles,
  Theme,
  createStyles,
  useTheme
} from '@material-ui/core/styles';
import * as Yup from 'yup';
import Notification from '../../components/utils/Notification';
import {
  useCreateStudentMutation,
  AllStudentsDocument,
  StudentCreateInput
} from '../../generated/graphql';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageStyled: {
      margin: 'auto',
      borderTop: '1.5rem solid #829079',
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(1.5),
      paddingRight: theme.spacing(1.5),
      paddingBottom: theme.spacing(1.3),
      maxWidth: '45%',
      minWidth: '30%'
    }
  })
);

const validationSchema = Yup.object().shape({
  student1stName: Yup.string().required('Nom obligatoire'),
  student2ndName: Yup.string().required('Prénom obligatoire'),
  student3rdName: Yup.string(),
  studentMatricule: Yup.string(),
  image: Yup.string(),
  studentSecretCode: Yup.string(),
  dateOfBirth: Yup.date().required('Date of Birth needed'),
  placeOfBirth: Yup.string().required('Lieu de naissance obligatoire'),
  phoneNumber: Yup.number().required('Numéro de portable obligatoire'),
  gender: Yup.string().required('Choix du sexe obligatoire'),
  email: Yup.string().email('Email invalide').required('Email obligatoire')
});

const CreateStudent: FC<StudentCreateInput> = () => {
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

  const initialValues: StudentCreateInput = {
    student1stName: '',
    student2ndName: '',
    student3rdName: '',
    email: '',
    studentMatricule: '',
    studentSecretCode: '',
    image: '',
    phoneNumber: 0,
    placeOfBirth: '',
    dateOfBirth: '2018-01-01T00:00',
    gender: ''
  };
  const [createStudentMutation] = useCreateStudentMutation();

  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    setImage('');

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
        const res = await createStudentMutation({
          variables: {
            data: {
              ...values,
              image,
              dateOfBirth: new Date(values.dateOfBirth),
              studentSecretCode: uniqueCodeGen(20)
            }
          },
          //   router.push({
          //   pathname: '/show/singleCand',
          //   query: {
          //     id: res.data.createMultipleCandidates.id,
          //   },
          // }),
          update: (cache: any, { data }) => {
            const currentStudentList = cache.readQuery({
              query: AllStudentsDocument
            }) ?? { students: [] };
            const addedStudent = data?.createOneStudent;
            if (addedStudent) {
              cache.writeQuery({
                query: AllStudentsDocument,
                data: {
                  students: [...currentStudentList.students, addedStudent]
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
            message: 'New student added',
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
                <Grid item style={{ display: 'grid', placeItems: 'center' }}>
                  <Typography
                    align={matchesSM ? 'center' : undefined}
                    color="primary"
                    gutterBottom
                    variant="h6"
                    component="h5"
                  >
                    Student Info
                  </Typography>
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={1}>
                <Grid item xs={12} sm={6}>
                  <Field
                    helperText={<ErrorMessage name="student1stName" />}
                    component={TextField}
                    name="student1stName"
                    label="Nom"
                    disabled={isSubmitting}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="dateOfBirth"
                    component={TextField}
                    id="date"
                    label="Birthdate"
                    type="date"
                    format="dddd/mmm/yyyy"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    helperText={<ErrorMessage name="student2ndName" />}
                    component={TextField}
                    name="student2ndName"
                    label="Prénom"
                    disabled={isSubmitting}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    helperText={<ErrorMessage name="placeOfBirth" />}
                    component={TextField}
                    name="placeOfBirth"
                    label="Lieu de Naissance"
                    disabled={isSubmitting}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field
                    helperText={<ErrorMessage name="student3rdName" />}
                    component={TextField}
                    name="student3rdName"
                    label="Autres Noms"
                    disabled={isSubmitting}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field
                    helperText={<ErrorMessage name="phoneNumber" />}
                    component={TextField}
                    name="phoneNumber"
                    type="number"
                    label="No de tel"
                    disabled={isSubmitting}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    helperText={<ErrorMessage name="email" />}
                    component={TextField}
                    name="email"
                    type="email"
                    label="Email"
                    disabled={isSubmitting}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    helperText={<ErrorMessage name="studentMatricule" />}
                    component={TextField}
                    name="studentMatricule"
                    type="text"
                    label="Student Matricule"
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
                <Grid item xs={12} sm={6}>
                  <Field
                    helperText={<ErrorMessage name="Gender" />}
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
                <Grid item xs={12} sm={6}>
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
                      {isSubmitting ? 'Creating Student' : 'New student'}
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
export default CreateStudent;
