import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import "./Login.css";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import Card from "@mui/material/Card";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string().min(6).required("Required"),
});
const Login = (props) => {
  let navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log("data", values);
        navigate("/Sidebar");
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} className="login_page">
          <Card className="card">
            <h3>Sign In to your account</h3>
            <div className="content">
              <div className="user">
                <Field
                  name="username"
                  placeholder="UserName"
                  className="user_icon"
                />

                <MailIcon className="mail" />

                <div className="error">
                  <ErrorMessage name="username" />
                </div>
              </div>
              <div className="pass">
                <div className="password">
                  <Field
                    name="password"
                    placeholder="Password"
                    className="user_icon"
                  />

                  <LockIcon className="lock" />

                  <div className="error">
                    <ErrorMessage name="password" />
                  </div>
                </div>
              </div>

              <div>
                <button
                  className="button1"
                  type="submit"
                  onClick={props.onSidebar}
                >
                  LOGIN
                </button>
              </div>
            </div>
          </Card>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
