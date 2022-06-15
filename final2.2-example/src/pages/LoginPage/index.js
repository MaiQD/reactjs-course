import React, { useContext, useMemo, useState } from "react";
import { globalContext } from "../../contexts/global";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import * as Styled from "./style";

import "./login.css";
import { useTheme } from "@mui/material";

const schemaLoginForm = Yup.object({
  username: Yup.string().required("Làm ơn nhập username đi"),
  password: Yup.string().required("Làm ơn nhập password đi"),
});

const schemaSignUpForm = Yup.object({
  username: Yup.string().required("Làm ơn nhập username đi"),
  password: Yup.string().required("Làm ơn nhập password đi"),
  rePassword: Yup.string()
    .required("Làm ơn nhập mật khẩu lại đi")
    .oneOf([Yup.ref("password")], "Mật khẩu nhập lại không giông"),
});

const initValuesSignIn = { username: "", password: "" };
const initValuesSignUp = { username: "", password: "", rePassword: "" };

const Login = () => {
  const { signIn, signUp } = useContext(globalContext);
  const [mode, setMode] = useState("signIn");
  const [loading, setLoading] = useState(false);
  const isSignInMode = useMemo(() => mode === "signIn", [mode]);
  const theme = useTheme();
  const navigate = useNavigate();

  const handleSignIn = (values) => {
    return signIn(values)
      .then((res) => {
        if (res) {
          navigate("../home", { replace: true });
        } else {
          alert("Invalid username or password");
        }
      })
      .catch((err) => {});
  };

  const handleSignUp = (values) => {
    return signUp(values).then((res) => {
      setMode("signIn");
    });
  };
  const handleSubmitForm = (values, { setSubmitting }) => {
    setLoading(true);
    let promise = Promise.resolve();
    if (isSignInMode) {
      promise = handleSignIn(values);
    } else {
      promise = handleSignUp(values);
    }
    promise.then(() => {
      setLoading(false);
    });
  };

  const toggleAuthMode = () => {
    if (isSignInMode) {
      setMode("signUp");
    } else {
      setMode("signIn");
    }
  };

  return (
    <div className="login-container">
      <div className="banner" />
      <div className="form-container">
        <Formik
          key={isSignInMode}
          initialValues={isSignInMode ? initValuesSignIn : initValuesSignUp}
          validationSchema={isSignInMode ? schemaLoginForm : schemaSignUpForm}
          onSubmit={handleSubmitForm}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <Styled.HeadTitle variant="h4" mb={4} active>
                  {isSignInMode ? "Đăng Nhập" : "Đăng ký"}
                </Styled.HeadTitle>
                <div className="input-wrapper">
                  <TextField
                    label="Tên đăng nhập"
                    error={errors.username && touched.username}
                    size="small"
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    helperText={errors.username}
                  />
                </div>
                <div className="input-wrapper">
                  <TextField
                    label="Mật khẩu"
                    error={errors.password && touched.password}
                    size="small"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    helperText={errors.password}
                  />
                </div>
                {!isSignInMode && (
                  <div className="input-wrapper">
                    <TextField
                      label="Nhập lại mật khẩu"
                      error={errors.rePassword && touched.rePassword}
                      size="small"
                      type="password"
                      name="rePassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.rePassword}
                      helperText={errors.rePassword}
                    />
                  </div>
                )}
                <Button
                  type="submit"
                  variant="outlined"
                  color="secondary"
                  startIcon={
                    loading && <CircularProgress size={16} color="secondary" />
                  }
                >
                  {isSignInMode ? "Sign In" : "Sign Up"}
                </Button>
              </div>
            </form>
          )}
        </Formik>
        <div className="input-group">
          {!loading && (
            <Button variant="outlined" onClick={toggleAuthMode}>
              {isSignInMode ? "Chưa có account? đăng ký" : "Đăng nhập luôn"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
