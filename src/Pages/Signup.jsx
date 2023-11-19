import React, {useState} from 'react'
import { useFormik }  from "formik";
import { signUpSchema } from "../Schemas/index.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    setFieldError,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values, action) => {
      try {
        const response = await axios.post(
          "https://blogappproject2.pythonanywhere.com/userauth/signup/",
          values // Sending the form values directly
        );
        action.resetForm();

        console.log("Data posted successfully:", response.data);
        navigate("/");
      } catch (error) {
        console.log("Error posting data:", error);
        if (error.response.status === 400) {
          setErrorMessage(error?.response?.data?.error?.email?.[0]);
        }
      }
    },
  });
  return (
    <>
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: 25 }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            id="form3Example1c"
                            name="fname"
                            className="form-control"
                            value={values.fname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.fname && touched.fname ? (
                            <p
                              className="form-error"
                              style={{ color: "red" }}
                            >
                              {errors.fname}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="lname"
                            value={values.lname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.lname && touched.lname ? (
                            <p
                              className="form-error"
                              style={{ color: "red" }}
                            >
                              {errors.lname}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          >
                            Your Email
                          </label>
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.email && touched.email ? (
                            <p
                              className="form-error"
                              style={{ color: "red" }}
                            >
                              {errors.email}
                            </p>
                          ) : null}
                          {errorMessage && (
                            <p style={{ color: "red" }}>{errorMessage}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            htmlFor="form3Example4cd"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            id="form3Example4cd"
                            className="form-control"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.password && touched.password ? (
                            <p
                              className="form-error"
                              style={{ color: "red" }}
                            >
                              {errors.password}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <Link to={"/"}>
                        <p>Already Have Registered Please Login Here</p>
                      </Link>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sampleimage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Signup