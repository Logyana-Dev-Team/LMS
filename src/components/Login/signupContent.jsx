import React from "react";
import axios from "axios";
import { useState } from "react";

export default function SignupContent() {
  const [signUpData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setSignupData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/register", {
        name: signUpData.name,
        email: signUpData.email,
        password: signUpData.password,
      })
      .then((response) => {
        window.setTimeout(function () {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div class="mdk-header-layout__content page-content">
      <div class="page-section container page__container">
        <div class="col-lg-10 p-0 mx-auto">
          <div class="row justify-content-center">
            <div class="col-md-6 mb-24pt mb-md-0">
              <form onSubmit={login} noValidate>
                <div class="form-group">
                  <label class="form-label" for="name">
                    Your first and last name:
                  </label>
                  <input
                    id="name"
                    name="name"
                    onChange={inputEvent}
                    type="text"
                    class="form-control"
                    placeholder="Your first and last name ..."
                  />
                </div>
                <div class="form-group">
                  <label class="form-label" for="email">
                    Your email:
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={inputEvent}
                    class="form-control"
                    placeholder="Your email address ..."
                  />
                </div>
                <div class="form-group mb-24pt">
                  <label class="form-label" for="password">
                    Password:
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    onChange={inputEvent}
                    class="form-control"
                    placeholder="Your password ..."
                  />
                </div>
                <div className="text-center">
                  <button class="btn btn-primary">Create account</button>
                  <br />
                  Already have an account? <a href="/login">Login Here</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
