import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormInput,
  FormSelect,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "shards-react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { sendOtp, verifyOtp } from "../../api";
import constants from "../../constants";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/actions/user";
import { useHistory } from "react-router";

const Login = ({ history }) => {
  const [error, setError] = useState("");
  const [message, SetMessage] = useState("");
  const [spinnerLoading, setSpinnerLoading] = useState(false);
  const [submitted, setsubmitted] = useState("");
  const initialValues = {
    mobile: "",
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = () =>
    Yup.object({
      mobile: Yup.string().required("Mobile Number is Required"),
      mobile: Yup.string().matches(phoneRegExp, "Mobile number is not valid"),
    });

  const onSubmit = () => {
    setSpinnerLoading(true);
    sendOtp(formik.values)
      .then((res) => {
        if (res.success) {
          console.log(res);
          setError("");
          setsubmitted(true);
          SetMessage(res.message + " " + res.otp);
          setSpinnerLoading(false);
        } else {
          SetMessage("");
          setError(res.message);
          setSpinnerLoading(false);
        }
      })
      .catch((err) => {
        setSpinnerLoading(false);
        if (err) {
          SetMessage("");
          setError(err.response.data.error);
        } else setError("Something went wrong!");
      });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <div className="my-5 d-flex justify-content-center">
        <div className="loader">
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            visible={spinnerLoading}
          />
        </div>
        <div className="col-lg-4 mt-5 mx-auto shadow shadow-lg p-3" id="form">
          <h3 className="text-center tb" id="h">
            Thinkerr Login
          </h3>

          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label>Mobile Number </label>
              <input
                placeholder="Enter your Mobile Number"
                className="form-control"
                name="mobile"
                disabled={submitted}
                id="mobile"
                onChange={formik.handleChange("mobile")}
                value={formik.values.mobile}
              />
              <p style={{ color: "red", fontSize: "14px" }}>
                {formik.errors.mobile ? formik.errors.mobile : ""}
              </p>
            </div>
            <div
              className="text-center"
              style={{ color: "red", fontSize: "14px" }}
            >
              {error}
            </div>
            <div
              className="text-center small"
              style={{ color: "green", fontSize: "14px" }}
            >
              {message}
            </div>
            <Button type="submit" theme="accent">
              Get Otp
            </Button>
          </form>
        </div>
      </div>
      {submitted && <Otphandler mobile={formik.values.mobile} />}
    </>
  );
};

const Otphandler = ({ mobile }) => {
  const [Otp, setOtp] = useState("");
  const [Message, setMessage] = useState("");
  const [error, seterror] = useState("");
  const [spinnerLoading, setspinnerLoading] = useState(false);
  const dispatch = useDispatch();
  
  const history = useHistory()
  return (
    <>
      <div className="loader">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          visible={spinnerLoading}
        />
      </div>
      <div className="col-lg-4 mt-5 mx-auto shadow shadow-lg p-3">
        <div className="form-group">
          <label>Otp</label>
          <input
            placeholder="4 digit otp"
            className="form-control"
            name="otp"
            onChange={(e) => setOtp(e.target.value)}
            value={Otp}
          />
        </div>
        <div className="text-center" style={{ color: "red", fontSize: "14px" }}>
          {error}
        </div>
        <div
          className="text-center small"
          style={{ color: "green", fontSize: "14px" }}
        >
          {Message}
        </div>
        <Button
          type="button"
          disabled={!(Otp && mobile)}
          onClick={(e) => {
            setspinnerLoading(true)
            verifyOtp({ otp: Otp, mobile: mobile })
              .then((res) => {
                if (res.success) {
                  setMessage(res.message);
                  dispatch(addUser({token:res.token}))
                  history.push("/home")
                  setspinnerLoading(false)
                } else {
                  setMessage("");
                  seterror(res.message);
                  setspinnerLoading(false)
                }
              })
              .catch((err) => {
                if (err) {
                  setMessage("");
                  seterror(err.response.data.error);
                  setspinnerLoading(false)
                  
                } else seterror("Something went wrong!");
              });
          }}
          theme="accent"
        >
          Verify
        </Button>
      </div>
    </>
  );
};

export default Login;
