import React from "react";
import IMG from "../../assets/test.jpg";
import "./style.css";
const ProductsUi = ({ data }) => {
  return (
    <div className="row">
      {data?.map((item) => (
        <div className="col-6">
          <div className="card card_product mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <div className="img">
                  <img
                    src={IMG}
                    className="img-fluid rounded-start"
                    alt={item.name}
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsUi;
