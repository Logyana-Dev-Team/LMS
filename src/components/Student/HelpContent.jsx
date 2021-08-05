import React from "react";

export default function HelpContent() {
  return (
    <>
      <div className="container">
        <div className="container-fluid mt-5 mb-5 pb-5">
          <h4 className="text-info m-0">Send Us A Message!</h4>
          <p className="text-muted fs-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            facilis quo quos tempora nobis.
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
              <div className="col-4">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Mobile Number
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
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
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
            <button className="btn btn-info">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
