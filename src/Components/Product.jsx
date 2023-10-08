import React from "react";
import myImg from "../assets/sec-10-1.png";
import myImg2 from "../assets/sec-10-2.png";
import myImg3 from "../assets/sec-10-3.png";
function Product() {
  return (
    <div>
      <div className="container mt-5 bg-light">
        <h2 className="text-center">Welcome to the Elite Food Restaurant</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card bg-dark">
              <img src={myImg} className="img-fluid" alt="..."/>
              <div className="card-body">
                <h5 className="card-title text-white">10 February 2022</h5>
                <p className="card-text text-white">
                  Pellentesque Non Efficitur Mi Aliquam Convallis
                </p>
                <div>
                  {" "}
                  <span className="text-secondary fw-bold">Learn More</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card bg-dark">
              <img src={myImg2} className="img-fluid" alt="myimage 2" />
              <div className="card-body">
                <h5 className="card-title text-white">10 February 2022</h5>
                <p className="card-text text-white">
                  Morbi Sodales Tellus Elit, In Blandit Risus
                </p>
                <div>
                  {" "}
                  <span className="text-secondary fw-bold">Learn More</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card bg-dark">
              <img src={myImg3} className="img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-white">10 February 2022</h5>
                <p className="card-text text-white">
                  Curabitur rutrum velit ac congue malesuada
                </p>
                <div>
                  {" "}
                  <span className="text-secondary fw-bold">Learn More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
