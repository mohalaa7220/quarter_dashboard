import "./product_details.css";
import { MdDateRange } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
import Moment from "react-moment";
import { BsThreeDots } from "react-icons/bs";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductDetailsUi = ({ product }) => {
  return (
    <section className="content_details content pt-7">
      <div className="left_side">
        <ul className="top-content">
          <li className="date">
            <MdDateRange />
            <span>
              <Moment format="YYYY/MM/DD">{product.created}</Moment>
            </span>
          </li>

          <li className="comments">
            <FaRegCommentDots />
            <span>35 Comments</span>
          </li>
          <li className="edit_delete">
            <div className="dropdown">
              <button
                className="btn-edit dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <BsThreeDots />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to={`/products/${product.id}/edit`}
                  >
                    <AiFillEdit />
                    Edit
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <AiFillDelete />
                    Delete
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        {/* <!-- content --> */}
        <div className="content_product">
          <h1>{product.name}</h1>
          <div className="desc">
            <h4 className="content-head">Description</h4>
            <p>{product.description}</p>
          </div>
          <div className="property_detail_parent mb-4">
            <h4 className="content-head">Property Detail</h4>
            <div className="property_detail_list">
              <ul>
                <li>
                  <label>Property ID:</label> <span>HZ29</span>
                </li>
                <li>
                  <label>Home Area: </label> <span>120 sqft</span>
                </li>
                <li>
                  <label>Rooms:</label> <span>7</span>
                </li>
                <li>
                  <label>Baths:</label> <span>2</span>
                </li>
                <li>
                  <label>Year built:</label> <span>1992</span>
                </li>
              </ul>
              <ul>
                <li>
                  <label>Lot Area:</label> <span>HZ29 </span>
                </li>
                <li>
                  <label>Lot dimensions:</label> <span>120 sqft</span>
                </li>
                <li>
                  <label>Beds:</label> <span>7</span>
                </li>
                <li>
                  <label>Price:</label> <span>2</span>
                </li>
                <li>
                  <label>Property Status:</label> <span>For Sale</span>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Amenities --> */}
          <div className="amenities">
            <h4 className="content-head">Amenities</h4>
            <ul className="amenities_list">
              {product?.amenities &&
                product.amenities.map((item) => (
                  <li key={item.id}>
                    <BsCheck />
                    <span>{item.name}</span>
                  </li>
                ))}
            </ul>
          </div>

          {/* <Comments id={product.id} /> */}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsUi;
