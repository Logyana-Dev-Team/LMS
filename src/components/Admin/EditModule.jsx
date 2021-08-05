import React from "react";
import Drawer from "./Drawer";
import Header from "./Header";

export default function EditModule() {
  return (
    <>
      <Header />
      <div className="mdk-header-layout__content page-content ">
        <div className="container page__container page-section">
          <div className="page-separator">
            <div className="page-separator__text">Edit Module</div>
          </div>
          <div class="card mb-32pt">
            <div class="card-header d-flex align-items-center">
              <strong class="card-title">Edit Module</strong>
            </div>
            <div className="card-body mb-32pt">
              <div class="form-group">
                <label class="form-label">Topics</label>
                <select name="category" class="form-control custom-select">
                  <option value="vuejs">VueJs</option>
                  <option value="vuejs">Angular</option>
                  <option value="vuejs">React</option>
                </select>
                <small class="form-text text-muted">Select a Topic.</small>
              </div>
              <div class="form-group">
                <label class="form-label">Modules</label>
                <input type="text" class="form-control"></input>
                <small class="form-text text-muted">
                  Enter Your Sub-Category.
                </small>
              </div>
              <div className="row">
                <div className="col-8">
                  <div class="form-group">
                    <label class="form-label">Topics</label>
                    <div class="custom-file">
                      <input
                        type="file"
                        class="custom-file-input"
                        id="inputGroupFile01"
                      />
                      <label class="custom-file-label" for="inputGroupFile01">
                        Choose file
                      </label>
                    </div>
                    <small class="form-text text-muted">Select a Topic.</small>
                  </div>
                </div>
                <div className="col-4">
                  <div class="form-group">
                    <label class="form-label mb-0" for="active">
                      Active
                    </label>
                    <div class="custom-control custom-checkbox-toggle ml-8pt mt-3">
                      <input
                        checked
                        type="checkbox"
                        id="active"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="active">
                        Active
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Drawer />
    </>
  );
}
