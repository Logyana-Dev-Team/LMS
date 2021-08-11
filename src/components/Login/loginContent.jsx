import axios from "axios";
import React from "react";
import { useState } from "react";

export default function LoginContent() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setLoginData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/login", {
        email: loginData.email,
        password: loginData.password,
      })
      .then((response) => {
        localStorage.setItem("userId", response.data.user.id);
        localStorage.setItem("token", response.data.tokens.access.token);
        window.location = "/student";
      })
      .catch((err) => {
        // setError(true);
        // setMessage(err.response.data.message);
      });
  };

  return (
    <div class="mdk-header-layout__content page-content">
      <div class="pt-32pt pt-sm-64pt pb-32pt">
        <div class="container page__container">
          <form onSubmit={login} class="col-md-5 p-0 mx-auto">
            <div class="form-group">
              <label class="form-label" for="email">
                Email:
              </label>
              <input
                id="email"
                name="email"
                onChange={inputEvent}
                type="text"
                class="form-control"
                placeholder="Your email address ..."
              />
            </div>
            <div class="form-group">
              <label class="form-label" for="password">
                Password:
              </label>
              <input
                id="password"
                name="password"
                onChange={inputEvent}
                type="password"
                class="form-control"
                placeholder="Your first and last name ..."
              />
              {/* <p class="text-right">
                <a href="reset-password.html" class="small">
                  Forgot your password?
                </a>
              </p> */}
            </div>
            <div class="text-center">
              <button class="btn btn-primary">Login</button>
              <br />
              Don't have an account? <a href="/signup">Signup Here</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
