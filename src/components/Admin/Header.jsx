import React from "react";

export default function Header() {
  return (
    <div
      id="header"
      className="mdk-header js-mdk-header mb-0"
      data-fixed
      data-effects=""
    >
      <div className="mdk-header__content">
        <div
          className="navbar navbar-expand pr-0 navbar-dark-pickled-bluewood navbar-shadow"
          id="default-navbar"
          data-primary
        >
          <button
            className="navbar-toggler w-auto mr-16pt d-block rounded-0"
            type="button"
            data-toggle="sidebar"
          >
            <span className="material-icons">short_text</span>
          </button>

          <a href="/admin" className="navbar-brand mr-16pt">
            <img
              src="images/logo-white.png"
              alt="logo"
              className="img-fluid"
              style={{ width: 200 }}
            />
          </a>

          <span className="d-none d-md-flex align-items-center mr-16pt">
            <span className="avatar avatar-sm mr-12pt">
              <span className="avatar-title rounded navbar-avatar">
                <i className="material-icons">trending_up</i>
              </span>
            </span>

            <small className="flex d-flex flex-column">
              <strong className="navbar-text-100">Earnings</strong>
              <span className="navbar-text-50">₹12.3k</span>
            </small>
          </span>
          <span className="d-none d-md-flex align-items-center mr-16pt">
            <span className="avatar avatar-sm mr-12pt">
              <span className="avatar-title rounded navbar-avatar">
                <i className="material-icons">receipt</i>
              </span>
            </span>

            <small className="flex d-flex flex-column">
              <strong className="navbar-text-100">Sales</strong>
              <span className="navbar-text-50">264</span>
            </small>
          </span>

          <form
            className="search-form navbar-search d-none d-md-flex mr-16pt"
            action="https://luma.humatheme.com/Demos/Fixed_Layout/index.html"
          >
            <button className="btn" type="submit">
              <i className="material-icons">search</i>
            </button>
            <input
              type="text"
              className="form-control"
              placeholder="Search ..."
            />
          </form>

          <div className="flex"></div>

          <div className="nav navbar-nav flex-nowrap d-flex mr-16pt">
            <div className="nav-item dropdown">
              <a
                href="/#"
                className="nav-link d-flex align-items-center dropdown-toggle"
                data-toggle="dropdown"
                data-caret="false"
              >
                <span className="avatar avatar-sm mr-8pt2">
                  <span className="avatar-title rounded-circle bg-primary">
                    <i className="material-icons">account_box</i>
                  </span>
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-header">
                  <strong>Account</strong>
                </div>
                <a className="dropdown-item" href="edit-account.html">
                  Edit Account
                </a>
                <a className="dropdown-item" href="billing.html">
                  Billing
                </a>
                <a className="dropdown-item" href="billing-history.html">
                  Payments
                </a>
                <a className="dropdown-item" href="login.html">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
