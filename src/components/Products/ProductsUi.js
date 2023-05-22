import React from "react";
import IMG from "../../assets/test.jpg";
import "./style.css";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { TbCalendarTime } from "react-icons/tb";

const ProductsUi = ({ data }) => {
  return (
    <div className="row">
      {data?.map((item) => (
        <div className="col-6" key={item.id}>
          <Link to={`/products/${item.id}`} className="card card_product mb-3">
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
                  <span className="created">
                    <TbCalendarTime />
                    <Moment format="D MMM YYYY">{item.created}</Moment>
                  </span>
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
            <div
              className={item.state === "rent" ? `status rent` : `status sale`}
            >
              <span>{item.state === "rent" ? `For Rent` : `For Sale`}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsUi;
