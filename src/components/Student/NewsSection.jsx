import React from "react";

export default function NewsSection() {
  return (
    <>
      <div class="sidebar-sticky" style={{ width: "100%" }}>
        <div
          className="d-flex align-items-center container"
          style={{
            height: "70px",
            backgroundColor: "#3B7EB9",
            color: "#fff",
            justifyContent: "space-between",
          }}
        >
          <div>Whats New?</div>
          <div>
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
        <div className="container">
          <div className="mt-3">
            <small className="text-info">News</small>
          </div>
          <div className="row">
            <div className="col-12">
              <h5 className="text-info m-0">New Courses Are Up!</h5>
              <p className="text-info fw-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                Voluptatibus.
              </p>
              <small>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                omnis repudiandae nemo cumque quia numquam veritatis quod quam
                atque tempore modi, suscipit voluptas. Mollitia, quis
                consequatur culpa fugit quaerat reiciendis!...{" "}
                <a href="#" className="text-info text-decoration-none">
                  Read More
                </a>
              </small>
              <div className="d-flex justify mt-2">
                <img
                  className="img-thumbnail"
                  style={{
                    width: "256px",
                    height: "256px",
                    objectFit: "cover",
                  }}
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80"
                  alt=""
                />
              </div>
            </div>
            <hr />
            <div className="col-12">
              <h5 className="text-info m-0">New Courses Are Up!</h5>
              <p className="text-info fw-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                Voluptatibus.
              </p>
              <small>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                omnis repudiandae nemo cumque quia numquam veritatis quod quam
                atque tempore modi, suscipit voluptas. Mollitia, quis
                consequatur culpa fugit quaerat reiciendis!...{" "}
                <a href="#" className="text-info text-decoration-none">
                  Read More
                </a>
              </small>
              <div className="d-flex justify mt-2">
                <img
                  className="img-thumbnail"
                  style={{
                    width: "256px",
                    height: "256px",
                    objectFit: "cover",
                  }}
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
