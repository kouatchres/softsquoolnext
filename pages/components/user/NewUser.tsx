import React, { useState, ChangeEvent } from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { TextField } from 'material-ui-formik-components/TextField';
import {
  Grid,
  Typography,
  Paper,
  Button,
  LinearProgress,
  FormControl,
  CircularProgress
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import * as Yup from 'yup';
import Notification from '../utils/Notification';
import {
  UserCreateInput,
  useCreateOneUserMutation
} from '../../../generated/graphql';

const useStyles = makeStyles((theme: Theme) => ({
  pageStyled: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(2)
    // maxWidth: '30%',
    // minWidth: '10rem',
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '25%',
    minWidth: '8rem'
  }
}));

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Libellé Région Obligatoire'),
  image: Yup.string().required('Code Région Obligatoire')
});

const NewUser: React.FC<UserCreateInput> = () => {
  const classes = useStyles();

  const [image, setImage] = useState<string>('');

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });

  const initialValues: UserCreateInput = {
    name: '',
    email: '',
    image: ''
  };
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

  const [createOneUserMutation] = useCreateOneUserMutation();

  console.log(image);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (
        values: UserCreateInput,
        { setSubmitting, resetForm }
      ) => {
        const res = await createOneUserMutation({
          variables: {
            data: {
              ...values,
              image: image
            }
          }
          // update: (cache, { data }) => {
          //   const currentUserList: AllUsersQuery = cache.readQuery({
          //     query: AllUsersDocument
          //   }) ?? { users: [] };
          //   const addedUser = data?.createOneUser;
          //   if (addedUser) {
          //     cache.writeQuery({
          //       query: AllUsersDocument,
          //       data: {
          //         regions: [...currentUserList.users, addedUser]
          //       }
          //     });
          //   }
          // }
        });

        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          setNotify({
            isOpen: true,
            message: 'User creation successful ',
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
                    New User
                  </Typography>
                </Grid>
              </Grid>
              <Grid container direction="column">
                <Grid item>
                  <FormControl fullWidth>
                    <Field
                      helpertext={<ErrorMessage name="file" />}
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
                    <Field
                      name="name"
                      component={TextField}
                      type="text"
                      fullWidth
                      label="User Name"
                      variant="outlined"
                      disabled={isSubmitting}
                      helpertext={<ErrorMessage name="name" />}
                    />
                    <Field
                      name="email"
                      component={TextField}
                      type="text"
                      fullWidth
                      label="Email"
                      variant="outlined"
                      disabled={isSubmitting}
                      helpertext={<ErrorMessage name="email" />}
                    />

                    <Grid container justify="center">
                      <Grid item>
                        <img
                          style={{
                            height: 'auto',
                            width: '40%',
                            display: 'grid',
                            placeItems: 'center',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            borderRadius: '0.5rem',
                            margin: '0.5rem  auto'
                          }}
                          src={image}
                          alt="Upload image"
                        />
                      </Grid>
                    </Grid>
                    <Notification notify={notify} setNotify={setNotify} />
                    <div style={{ placeItems: 'center', display: 'grid' }}>
                      <Button disabled={isSubmitting} onClick={submitForm}>
                        {isSubmitting && <CircularProgress />}
                        {isSubmitting ? 'Creating User' : 'New User'}
                      </Button>
                    </div>
                  </FormControl>
                </Grid>
              </Grid>
            </Form>
          </Paper>
        );
      }}
    </Formik>
  );
};
export default NewUser;
