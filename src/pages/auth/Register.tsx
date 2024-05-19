import { Checkbox, FormControl, FormControlLabel, Link, Stack, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";
import TermsDialog from "../../components/TermsDialog";
import LoadingButton from "../../components/common/LoadingButton";
import popUpError from "../../helpers/popUpError";
import registerSchema from "../../schemas/registerSchema";
import userService from "../../services/userService";
import IAuthUser from "./interface/IAuthUser";
import IRegisterValues from "./interface/IRegisterValues";

const Register = () => {
  const [submitting, setSubmitting] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const initialValues: IRegisterValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const navigate = useNavigate();
  const signIn = useSignIn();

  const handleSignIn = (token: string, userData: IAuthUser) => {
    signIn({
      auth: {
        token: token,
      },
      userState: {
        id: userData.id,
        email: userData.email,
        name: userData.name,
      },
    });
  };

  const handleSubmit = async (values: IRegisterValues) => {
    setSubmitting(true);
    const response = await userService.register(values);
    console.log(response);
    if (response) {
      handleSignIn(response.data.token, response.data.userData);
      navigate("/");
      console.log("login success");
    }
    setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={(values: IRegisterValues) => {
          if (acceptTerms) {
            handleSubmit(values);
          } else {
            popUpError("You need to agree to the terms and conditions to register")
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Stack spacing={2}>
              <Typography variant="h4" fontWeight="bold" textAlign="center">
                Create Account
              </Typography>

              <FormControl>
                <Field
                  as={TextField}
                  type="text"
                  name="name"
                  label="Name"
                  variant="outlined"
                  error={errors.name && touched.name}
                  helperText={errors.name && touched.name ? errors.name : ""}
                />
              </FormControl>
              <FormControl>
                <Field
                  as={TextField}
                  type="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  error={errors.email && touched.email}
                  helperText={errors.email && touched.email ? errors.email : ""}
                />
              </FormControl>
              <FormControl>
                <Field
                  as={TextField}
                  type="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  error={errors.password && touched.password}
                  helperText={
                    errors.password && touched.password ? errors.password : ""
                  }
                />
              </FormControl>
              <FormControl>
                <Field
                  as={TextField}
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password"
                  variant="outlined"
                  error={errors.confirmPassword && touched.confirmPassword}
                  helperText={
                    errors.confirmPassword && touched.confirmPassword
                      ? errors.confirmPassword
                      : ""
                  }
                />
              </FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                  />
                }
                label={
                  <Typography>
                    I agree to the{' '}
                    <Link
                      component="button"
                      onClick={() => setTermsOpen(true)}
                    >
                      Terms and Conditions
                    </Link>
                  </Typography>
                }
              />
              <LoadingButton isSubmitting={submitting} buttonText="Register" />
            </Stack>
          </Form>
        )}
      </Formik>

      <Link href="/login" underline="none">
        <Typography marginTop="10px" textAlign="right">
          Already have an account? Sign In!
        </Typography>
      </Link>

      <TermsDialog open={termsOpen} onClose={() => setTermsOpen(false)} /><TermsDialog open={termsOpen} onClose={() => setTermsOpen(false)} />
    </>
  );
};
export default Register;
