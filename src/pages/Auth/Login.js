import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { LoginAuth } from "../../RTK/slices/authSlice";
import { toast } from "react-toastify";
import "./style.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { loading, message, isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const LoginSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginAuth({ email: "m@gmail.com", password: "123456" }));
  };
  useEffect(() => {
    if (message) {
      toast.success(`${message}`);
    }
    if (isAuth) {
      window.location = "/";
    }
  }, [message, isAuth, navigate]);

  return (
    <section className="content pt-7">
      <div className="container">
        <h1 className="text-center">
          Sign In
          <br />
          To Your Account
        </h1>
        <form onSubmit={LoginSubmit} className="contact-form-box">
          <input
            type="email"
            className="form-control mb-3"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={loading ? "btn2 btn_loading " : "btn2  btn-block"}
            type="submit"
          >
            SIGN IN
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
