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
      <div class="py-32pt navbar-submenu">
        <div class="container page__container">
          <div class="progression-bar progression-bar--active-accent">
            <a
              href="pricing.html"
              class="progression-bar__item progression-bar__item--complete"
            >
              <span class="progression-bar__item-content">
                <i class="material-icons progression-bar__item-icon">done</i>
                <span class="progression-bar__item-text h5 mb-0 text-uppercase">
                  Pricing
                </span>
              </span>
            </a>
            <a
              href="signup.html"
              class="progression-bar__item progression-bar__item--complete progression-bar__item--active"
            >
              <span class="progression-bar__item-content">
                <i class="material-icons progression-bar__item-icon"></i>
                <span class="progression-bar__item-text h5 mb-0 text-uppercase">
                  Account details
                </span>
              </span>
            </a>
            <a href="signup-payment.html" class="progression-bar__item">
              <span class="progression-bar__item-content">
                <i class="material-icons progression-bar__item-icon"></i>
                <span class="progression-bar__item-text h5 mb-0 text-uppercase">
                  Payment details
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div class="page-section container page__container">
        <div class="col-lg-10 p-0 mx-auto">
          <div class="row">
            <div class="col-md-6 mb-24pt mb-md-0">
              <form onSubmit={login}>
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
                <button class="btn btn-primary">Create account</button>
              </form>
            </div>
            <div class="col-md-6">
              <div class="card mb-0">
                <div class="card-body">
                  <h5>Purchase summary</h5>
                  <div class="d-flex mb-8pt">
                    <div class="flex">
                      <strong class="text-70">Subscription</strong>
                    </div>
                    <strong>Student</strong>
                  </div>

                  <div class="alert alert-soft-warning">
                    <div class="d-flex flex-wrap align-items-start">
                      <div class="mr-8pt">
                        <i class="material-icons">check</i>
                      </div>
                      <div class="flex" style={{ minWidth: "180px" }}>
                        <small class="text-100">
                          Access to over 1.000 high quality courses.{" "}
                          <strong>For individuals.</strong>
                        </small>
                      </div>
                    </div>
                  </div>

                  <div class="d-flex mb-16pt pb-16pt border-bottom">
                    <div class="flex">
                      <strong class="text-70">Price</strong>
                    </div>
                    <strong>US $9 per month</strong>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      checked=""
                      id="topic-all"
                    />
                    <label class="custom-control-label">
                      Terms and conditions
                    </label>
                    <small class="form-text text-muted">
                      By checking here and continuing, I agree to the Luma Terms
                      of Use
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
