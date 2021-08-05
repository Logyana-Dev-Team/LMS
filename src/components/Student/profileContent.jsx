import React from "react";

export default function ProfileContent() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-auto">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="..."
              width="150"
              class="img-thumbnail rounded-circle"
            ></img>
          </div>
          <div className="col">
            <h2 className="text-info m-0">Abhinav Talukdar</h2>
            <small>
              Location <span className="text-info fw-bold">Pune, India</span>
            </small>
            <br />
            <small>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              modi nemo quam rem nihil sequi magnam ratione vero! Asperiores
              tempora assumenda sint veniam alias modi culpa veritatis
              repudiandae esse est?
            </small>
          </div>
        </div>
        <div className="container-fluid mt-5 mb-5 pb-5">
          <h4 className="text-info m-0">Account details & Introduction</h4>
          <p className="text-muted fs-6">
            Let Truelesson community of other learners and instructors recognize
            you
          </p>
          <form>
            <div className="row">
              <div className="col-4">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col-4">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col-4">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Email Id
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="row">
              <div className="col-4">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col-4">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    State
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col-4">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Country
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                About you (100-150 Words)
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                accusamus voluptatibus porro. Aut, facere suscipit? Maxime
                ratione sed, minima earum atque expedita veritatis obcaecati
                cumque! Culpa atque quia magnam facilis?
              </textarea>
            </div>
            <label for="webUrl" class="form-label">
              Website Url
            </label>
            <div class="input-group mb-3">
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                id="webUrl"
              >
                LinkedIn
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
              <input
                type="text"
                class="form-control"
                aria-label="Text input with dropdown button"
              />
            </div>
            <label class="form-label">
              <a href="#" className="me-1">
                <i class="fas fa-plus fs-6 text-info"></i>
              </a>
              Add Url
            </label>
          </form>
          <h4 className="text-info m-0 mt-4">Work Experiance & Education</h4>
          <p className="text-muted fs-6">
            Tell us about your work experiance and education to get a
            personalized learning experiance with course recommendations.
          </p>
          <form>
            <div class="mb-3">
              <label class="form-label">Employment Status</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Employed Part Time (24 hours a week)</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Industry</label>
              <select class="form-select" aria-label="Default select example">
                <option selected></option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Employer</label>
              <select class="form-select" aria-label="Default select example">
                <option selected></option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Occupation</label>
              <select class="form-select" aria-label="Default select example">
                <option selected></option>
              </select>
            </div>
            <div class="mb-4">
              <label class="form-label">Experiance Level</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Fresher/Entry Level</option>
              </select>
            </div>
            <div class="mb-4">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label class="form-label" for="flexCheckChecked">
                  Current Employer
                </label>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Highest Degree</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Select Your highest Level of Education</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">University</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Kingston</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Field Or Major</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Ex:Business</option>
              </select>
            </div>
          </form>
          <h4 className="text-info m-0 mt-4">Career Goals</h4>
          <p className="text-muted fs-6">
            Tell us what you are looking for next in your career to find new
            opportunities.
          </p>
          <form>
            <div class="mb-4">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label class="form-label" for="flexCheckChecked">
                  Open To Job Opportunities
                </label>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Prefered Location</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Mumbai</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Skills Wanted</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Eg: Doctor</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Prefered Occupation</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Eg: Surgeon</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Industry</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Eg: Medical</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="form-label">Prefered Level</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Entry Level/0-1 year of Experiance</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Career Goals Privacy</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Only me</option>
              </select>
            </div>
          </form>
        </div>
        <nav
          class="navbar fixed-bottom navbar-light bg-light"
          style={{ boxShadow: "0 0px 10px #888" }}
        >
          <div class="container-fluid">
            <div className="d-flex flex-row align-items-center"></div>
            <div className="d-flex flex-row-reverse align-items-center">
              <button className="btn btn-info ms-4">Submit</button>
              <a href="#" className="text-muted m-0" style={{ fontSize: 15 }}>
                Cancel
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
