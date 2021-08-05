import React from "react";

export default function Dashboard() {
  return (
    <div className="mdk-header-layout__content page-content ">
      <div className="pt-32pt">
        <div className="container page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
          <div className="flex d-flex flex-column flex-sm-row align-items-center mb-24pt mb-md-0">
            <div className="mb-24pt mb-sm-0 mr-sm-24pt">
              <h2 className="mb-0">Dashboard</h2>

              <ol className="breadcrumb p-0 m-0">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>

                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>

          <div className="row" role="tablist">
            <div className="col-auto">
              <a
                href="instructor-earnings.html"
                className="btn btn-outline-secondary"
              >
                Earnings
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section border-bottom-2">
        <div className="container page__container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card border-1 border-left-3 border-left-accent text-center mb-lg-0">
                <div className="card-body">
                  <h4 className="h2 mb-0">₹ 1,569.00</h4>
                  <div>Earnings this month</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card text-center mb-lg-0">
                <div className="card-body">
                  <h4 className="h2 mb-0">₹ 3,917.80</h4>
                  <div>Account Balance</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card text-center mb-lg-0">
                <div className="card-body">
                  <h4 className="h2 mb-0">₹ 10,211.50</h4>
                  <div>Total Sales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container page__container page-section">
        <div className="row mb-8pt">
          <div className="col-6">
            <div className="card card-body mb-32pt" style={{ padding: "0" }}>
              <div class="card-header d-flex align-items-center">
                <strong class="card-title">Earnings</strong>
              </div>
              <div className="chart" style={{ height: 320 }}>
                <canvas
                  id="earningsChart"
                  className="chart-canvas js-update-chart-bar"
                  data-chart-legend="#legend"
                  data-chart-line-background-color="gradient:primary,gray"
                  data-chart-prefix="$"
                  data-chart-suffix="k"
                ></canvas>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card card-body mb-32pt" style={{ padding: "0" }}>
              <div class="card-header d-flex align-items-center">
                <strong class="card-title">Sales Today</strong>
              </div>
              <div className="card">
                <table className="table table-flush table-nowrap">
                  <tbody className="list">
                    <tr>
                      <td>
                        <div className="d-flex flex-nowrap align-items-center">
                          <div className="flex">
                            <a
                              className="card-title js-lists-values-course"
                              href="instructor-edit-course.html"
                            >
                              Angular Routing In-Depth
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <small className="text-muted text-uppercase js-lists-values-date">
                          12 Nov 2018
                        </small>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex flex-nowrap align-items-center">
                          <div className="flex">
                            <a
                              className="card-title js-lists-values-course"
                              href="instructor-edit-course.html"
                            >
                              Angular Unit Testing
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <small className="text-muted text-uppercase js-lists-values-date">
                          13 Nov 2018
                        </small>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex flex-nowrap align-items-center">
                          <div className="flex">
                            <a
                              className="card-title js-lists-values-course"
                              href="instructor-edit-course.html"
                            >
                              Introduction to TypeScript
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <small className="text-muted text-uppercase js-lists-values-date">
                          14 Nov 2018
                        </small>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex flex-nowrap align-items-center">
                          <div className="flex">
                            <a
                              className="card-title js-lists-values-course"
                              href="instructor-edit-course.html"
                            >
                              Learn Angular Fundamentals
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <small className="text-muted text-uppercase js-lists-values-date">
                          15 Nov 2018
                        </small>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-8pt">
          <div className="col-lg-12">
            <div className="page-separator">
              <div className="page-separator__text">Transactions</div>
            </div>
            <div className="card">
              <div
                data-toggle="lists"
                data-lists-values='[
      "js-lists-values-course", 
      "js-lists-values-document",
      "js-lists-values-amount",
      "js-lists-values-date"
    ]'
                data-lists-sort-by="js-lists-values-date"
                data-lists-sort-desc="true"
                className="table-responsive"
              >
                <table className="table table-flush table-nowrap">
                  <thead>
                    <tr>
                      <th colspan="2">
                        <a
                          href="/"
                          className="sort"
                          data-sort="js-lists-values-course"
                        >
                          Course
                        </a>
                        <a
                          href="/"
                          className="sort"
                          data-sort="js-lists-values-document"
                        >
                          Document
                        </a>
                        <a
                          href="/"
                          className="sort"
                          data-sort="js-lists-values-amount"
                        >
                          Amount
                        </a>
                        <a
                          href="/"
                          className="sort"
                          data-sort="js-lists-values-date"
                        >
                          Date
                        </a>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="list">
                    <tr>
                      <td>
                        <div className="d-flex flex-nowrap align-items-center">
                          <a
                            href="instructor-edit-course.html"
                            className="avatar avatar-4by3 overlay overlay--primary mr-12pt"
                          >
                            <img
                              src="images/paths/angular_routing_200x168.png"
                              alt="course"
                              className="avatar-img rounded"
                            />
                            <span className="overlay__content"></span>
                          </a>
                          <div className="flex">
                            <a
                              className="card-title js-lists-values-course"
                              href="instructor-edit-course.html"
                            >
                              Angular Routing In-Depth
                            </a>
                            <small className="text-muted mr-1">
                              Invoice
                              <a
                                href="invoice.html"
                                style={{ color: "inherit" }}
                                className="js-lists-values-document"
                              >
                                #8734
                              </a>{" "}
                              - &dollar;
                              <span className="js-lists-values-amount">
                                89
                              </span>{" "}
                              USD
                            </small>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <small className="text-muted text-uppercase js-lists-values-date">
                          12 Nov 2018
                        </small>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex flex-nowrap align-items-center">
                          <a
                            href="instructor-edit-course.html"
                            className="avatar avatar-4by3 overlay overlay--primary mr-12pt"
                          >
                            <img
                              src="images/paths/angular_testing_200x168.png"
                              alt="course"
                              className="avatar-img rounded"
                            />
                            <span className="overlay__content"></span>
                          </a>
                          <div className="flex">
                            <a
                              className="card-title js-lists-values-course"
                              href="instructor-edit-course.html"
                            >
                              Angular Unit Testing
                            </a>
                            <small className="text-muted mr-1">
                              Invoice
                              <a
                                href="invoice.html"
                                style={{ color: "inherit" }}
                                className="js-lists-values-document"
                              >
                                #8735
                              </a>{" "}
                              - &dollar;
                              <span className="js-lists-values-amount">
                                89
                              </span>{" "}
                              USD
                            </small>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <small className="text-muted text-uppercase js-lists-values-date">
                          13 Nov 2018
                        </small>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex flex-nowrap align-items-center">
                          <a
                            href="instructor-edit-course.html"
                            className="avatar avatar-4by3 overlay overlay--primary mr-12pt"
                          >
                            <img
                              src="images/paths/typescript_200x168.png"
                              alt="course"
                              className="avatar-img rounded"
                            />
                            <span className="overlay__content"></span>
                          </a>
                          <div className="flex">
                            <a
                              className="card-title js-lists-values-course"
                              href="instructor-edit-course.html"
                            >
                              Introduction to TypeScript
                            </a>
                            <small className="text-muted mr-1">
                              Invoice
                              <a
                                href="invoice.html"
                                style={{ color: "inherit" }}
                                className="js-lists-values-document"
                              >
                                #8736
                              </a>{" "}
                              - &dollar;
                              <span className="js-lists-values-amount">
                                89
                              </span>{" "}
                              USD
                            </small>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <small className="text-muted text-uppercase js-lists-values-date">
                          14 Nov 2018
                        </small>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex flex-nowrap align-items-center">
                          <a
                            href="instructor-edit-course.html"
                            className="avatar avatar-4by3 overlay overlay--primary mr-12pt"
                          >
                            <img
                              src="images/paths/angular_200x168.png"
                              alt="course"
                              className="avatar-img rounded"
                            />
                            <span className="overlay__content"></span>
                          </a>
                          <div className="flex">
                            <a
                              className="card-title js-lists-values-course"
                              href="instructor-edit-course.html"
                            >
                              Learn Angular Fundamentals
                            </a>
                            <small className="text-muted mr-1">
                              Invoice
                              <a
                                href="invoice.html"
                                style={{ color: "inherit" }}
                                className="js-lists-values-document"
                              >
                                #8737
                              </a>{" "}
                              - &dollar;
                              <span className="js-lists-values-amount">
                                89
                              </span>{" "}
                              USD
                            </small>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <small className="text-muted text-uppercase js-lists-values-date">
                          15 Nov 2018
                        </small>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="page-separator">
          <div className="page-separator__text">Users</div>
        </div>
        <div class="card mb-32pt">
          <div
            class="table-responsive"
            data-toggle="lists"
            data-lists-sort-by="js-lists-values-date"
            data-lists-sort-desc="true"
            data-lists-values='["js-lists-values-name", "js-lists-values-department", "js-lists-values-status", "js-lists-values-type", "js-lists-values-phone", "js-lists-values-date"]'
          >
            <table class="table mb-0 thead-border-top-0 table-nowrap">
              <thead>
                <tr>
                  <th>
                    <a
                      href="javascript:void(0)"
                      class="sort"
                      data-sort="js-lists-values-name"
                    >
                      Photo
                    </a>
                  </th>

                  <th style={{ width: "150px" }}>
                    <a
                      href="javascript:void(0)"
                      class="sort"
                      data-sort="js-lists-values-department"
                    >
                      Name
                    </a>
                  </th>

                  <th style={{ width: "48px" }}>
                    <a
                      href="javascript:void(0)"
                      class="sort"
                      data-sort="js-lists-values-status"
                    >
                      Email
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody class="list" id="employees">
                <tr>
                  <td style={{ width: "0" }}>
                    <div class="avatar avatar-sm mr-8pt">
                      <span class="avatar-title rounded-circle">BN</span>
                    </div>
                  </td>

                  <td>
                    <div class="media-body">
                      <div class="d-flex align-items-center">
                        <div class="flex d-flex flex-column">
                          <p class="mb-0">
                            <strong class="js-lists-values-name">
                              Billy Nunez
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="media-body">
                      <div class="d-flex align-items-center">
                        <div class="flex d-flex flex-column">
                          <p class="mb-0">
                            <strong class="js-lists-values-name">
                              annabell.kris@yahoo.com
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "0" }}>
                    <div class="avatar avatar-sm mr-8pt">
                      <span class="avatar-title rounded-circle">BN</span>
                    </div>
                  </td>

                  <td>
                    <div class="media-body">
                      <div class="d-flex align-items-center">
                        <div class="flex d-flex flex-column">
                          <p class="mb-0">
                            <strong class="js-lists-values-name">
                              Billy Nunez
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="media-body">
                      <div class="d-flex align-items-center">
                        <div class="flex d-flex flex-column">
                          <p class="mb-0">
                            <strong class="js-lists-values-name">
                              annabell.kris@yahoo.com
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "0" }}>
                    <div class="avatar avatar-sm mr-8pt">
                      <span class="avatar-title rounded-circle">BN</span>
                    </div>
                  </td>

                  <td>
                    <div class="media-body">
                      <div class="d-flex align-items-center">
                        <div class="flex d-flex flex-column">
                          <p class="mb-0">
                            <strong class="js-lists-values-name">
                              Billy Nunez
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="media-body">
                      <div class="d-flex align-items-center">
                        <div class="flex d-flex flex-column">
                          <p class="mb-0">
                            <strong class="js-lists-values-name">
                              annabell.kris@yahoo.com
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "0" }}>
                    <div class="avatar avatar-sm mr-8pt">
                      <span class="avatar-title rounded-circle">BN</span>
                    </div>
                  </td>

                  <td>
                    <div class="media-body">
                      <div class="d-flex align-items-center">
                        <div class="flex d-flex flex-column">
                          <p class="mb-0">
                            <strong class="js-lists-values-name">
                              Billy Nunez
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="media-body">
                      <div class="d-flex align-items-center">
                        <div class="flex d-flex flex-column">
                          <p class="mb-0">
                            <strong class="js-lists-values-name">
                              annabell.kris@yahoo.com
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "0" }}>
                    <div class="avatar avatar-sm mr-8pt">
                      <span class="avatar-title rounded-circle">BN</span>
                    </div>
                  </td>

                  <td>
                    <div class="media-body">
                      <div class="d-flex align-items-center">
                        <div class="flex d-flex flex-column">
                          <p class="mb-0">
                            <strong class="js-lists-values-name">
                              Billy Nunez
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="media-body">
                      <div class="d-flex align-items-center">
                        <div class="flex d-flex flex-column">
                          <p class="mb-0">
                            <strong class="js-lists-values-name">
                              annabell.kris@yahoo.com
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="card-footer p-8pt">
            <ul class="pagination justify-content-start pagination-xsm m-0">
              <li class="page-item disabled">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true" class="material-icons">
                    chevron_left
                  </span>
                  <span>Prev</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Page 1">
                  <span>1</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Page 2">
                  <span>2</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span>Next</span>
                  <span aria-hidden="true" class="material-icons">
                    chevron_right
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
