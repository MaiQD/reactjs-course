import React, { useContext } from "react";
import { globalContext } from "../../contexts/global";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import Card from "../../Components/Common/Card/Card";
import "./login.css";

const schemaLoginForm = Yup.object({
  username: Yup.string().required("Làm ơn nhập username đi").email("Định dạng email không đúng"),
  password: Yup.string().required("Làm ơn nhập password đi").length(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

const Login = () => {
  const { signIn } = useContext(globalContext);
  const navigate = useNavigate();

  const handleSubmitLogForm = (values, { setSubmitting }) => {
    signIn(values).then((res) => {
      if (res) {
        navigate("../home", { replace: true });
      } else {
        alert("Invalid username or password");
      }
    });
  };

  return (
    
    <div className="login-container">
      <div className="banner" />
      <div className="form-container">
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={schemaLoginForm}
          onSubmit={handleSubmitLogForm}
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
                <div className="input-wrapper">
                  <label htmlFor="username">Email</label>
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    placeholder="youremail@gmail.com"
                  />
                  <span className="form__error">
                    {errors.username && touched.username && errors.username}
                  </span>
                </div>
                <div className="input-wrapper">
                  <label htmlFor="username">Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="********"
                  />
                  <span className="form__error">
                    {errors.password && touched.password && errors.password}
                  </span>
                </div>
                <button type="submit">SignIn</button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
