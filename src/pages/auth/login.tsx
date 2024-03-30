import { FormControl, Link, Stack, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../../components/common/LoadingButton";
import loginSchema from "../../schemas/loginSchema";
import userService from "../../services/userService";
import IAuthUser from "./interface/IAuthUser";
import ILoginValues from "./interface/ILoginValues";

const Login = () => {
  const [submitting, setSubmitting] = useState(false);
  const initialValues: ILoginValues = { email: "", password: "" };

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

  const handleSubmit = async (values: ILoginValues) => {
    setSubmitting(true);
    const response = await userService.login(values);
    if (response) {
      if (response.data.mode === "signin") {
        handleSignIn(response.data.token, response.data.userData);
        navigate("/");
        console.log("login success");
      } else if (response.data.mode === "auth") {
        window.location.href = response.data.redirect_url;
      }
    }
    setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={(values: ILoginValues) => {
          console.log();
          handleSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Stack spacing={2}>
              <Typography variant="h4" fontWeight="bold" textAlign="center">
                Sign in Account
              </Typography>
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
              <LoadingButton isSubmitting={submitting} buttonText="Login" />
            </Stack>
          </Form>
        )}
      </Formik>

      <Link href="/register" underline="none">
        <Typography marginTop="10px" textAlign="right">
          {`Don't have an account? Sign Up!`}
        </Typography>
      </Link>
    </>
  );
};
export default Login;
