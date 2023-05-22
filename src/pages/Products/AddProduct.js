import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../RTK/slices/productSlice";
import "./style.css";
import { toast } from "react-toastify";
const AddProduct = () => {
  const { loadingAdd, message } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: "",
    location: "",
    description: "",
    beds: "",
    bathrooms: "",
    square: "",
    state: "",
    price: "",
    amenities: [],
    thumbnail_images: [],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "thumbnail_images") {
      const files = Array.from(event.target.files);
      Promise.all(
        files.map((file) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
              resolve({ url: reader.result, alt: file.name });
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        })
      ).then((images) => {
        setProduct((prevProduct) => ({
          ...prevProduct,
          thumbnail_images: [...prevProduct.thumbnail_images, ...images],
        }));
      });
    } else if (name === "amenities") {
      if (event.target.checked) {
        setProduct((prevProduct) => ({
          ...prevProduct,
          amenities: [...prevProduct.amenities, value],
        }));
      } else {
        setProduct((prevProduct) => ({
          ...prevProduct,
          amenities: prevProduct.amenities.filter(
            (amenity) => amenity !== value
          ),
        }));
      }
    } else {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
  };

  useEffect(() => {
    if (message) {
      toast.success(`${message}`);
    }
  }, [message]);
  console.log(loadingAdd);
  return (
    <section className="content">
      <h1>Add Product</h1>
      <form onSubmit={handleAddProduct} className="form-product">
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name="location"
              value={product.location}
              onChange={handleInputChange}
              placeholder="Location"
            />
          </div>
          <div className="col-md-6">
            <input
              type="number"
              name="beds"
              value={product.beds}
              onChange={handleInputChange}
              placeholder="Bed Number"
            />
          </div>
          <div className="col-md-6">
            <input
              type="number"
              name="bathrooms"
              value={product.bathrooms}
              onChange={handleInputChange}
              placeholder="Bathrooms Number"
            />
          </div>
          <div className="col-md-6">
            <input
              type="number"
              name="square"
              value={product.square}
              onChange={handleInputChange}
              placeholder="Square Number"
            />
          </div>
          <div className="col-md-6">
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              placeholder="Price"
            />
          </div>

          <div className="col-md-6">
            <input
              type="file"
              name="thumbnail_images"
              onChange={handleInputChange}
              multiple
              className="form-control mb-4"
            />
          </div>
          <div className="col-md-6">
            <div className="custom-select">
              <select
                name="state"
                value={product.state}
                onChange={handleInputChange}
              >
                <option value="rent">Rent</option>
                <option value="sale">Sale</option>
              </select>
              <span className="arrow-icon"></span>
            </div>
          </div>

          <div className="col-md-6">
            <label>Amenities</label>
            <input
              type="checkbox"
              name="amenities"
              value="1"
              onChange={handleInputChange}
            />
            1
            <input
              type="checkbox"
              name="amenities"
              value="2"
              onChange={handleInputChange}
            />
            2
            <input
              type="checkbox"
              name="amenities"
              value="3"
              onChange={handleInputChange}
            />
            3
          </div>

          <div className="col-md-6">
            <textarea
              name="description"
              value={product.description}
              onChange={handleInputChange}
              placeholder="Description"
            ></textarea>
          </div>
          <button
            className={loadingAdd ? "btn2 btn_loading " : "btn2  btn-block"}
            type="submit"
          >
            Add Product
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
