import React, { useEffect, useMemo, useState } from "react";
import "./productStyle.css";
import { Link, useLocation } from "react-router-dom";
import Chart from "../../chart/Chart";

import Publish from "@mui/icons-material/Publish";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { updateProducts } from "../../../redux/action";

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const products = useSelector((state) =>
    state.productsReducer.products?.find((product) => product._id === productId)
  );

  const [prodStats, setProdStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      const token = JSON.parse(
        JSON.parse(localStorage.getItem("persist:persist-key")).adminReducer
      ).admin.token;
      const config = {
        headers: {
          Authorization: token,
        },
      };
      try {
        const { data } = await axios.get(
          `/api/orders/income?id=${productId}`,
          config
        );

        const list = data.sort((a, b) => {
          return a._id - b._id;
        });

        list.map((el) =>
          setProdStats((prev) => [
            ...prev,
            { name: MONTHS[el._id - 1], Sales: el.total },
          ])
        );
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [productId, MONTHS]);

  /**************** UPDATE PROD *************/
  const dispatch = useDispatch();

  const [title, setTitle] = useState(products.title);
  const [descProd, setDescProd] = useState(products.descProd);
  const [price, setPrice] = useState(products.price);
  const [inStock, setInStock] = useState(products.inStock);
  const [material, setMaterial] = useState(products.material);

  const [imgs, setImgs] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

  useEffect(() => {
    const fetchedImages = products.imgs;
    setImgs(fetchedImages);
  }, []);

  const handleFileChange = (event, selectedIndices) => {
    const files = event.target.files;
    if (files.length === selectedIndices.length) {
      const updatedImgs = [...imgs];

      selectedIndices.forEach((index, i) => {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = (e) => {
          const dataURL = e.target.result;
          updatedImgs[index] = dataURL;
          if (i === selectedIndices.length - 1) {
            setImgs(updatedImgs);
          }
        };

        reader.readAsDataURL(file);
      });
    }
  };

  const toggleImageSelection = (index) => {
    setSelectedImageIndex((prevSelectedIndex) =>
      prevSelectedIndex === index ? -1 : index
    );
  };
  const handleUpdate = (e) => {
    e.preventDefault();

    const updProd = {
      _id: products?._id,
      title,
      descProd,
      price,
      inStock,
      material,
      imgs,
    };
    dispatch(updateProducts(updProd));
    window.location.reload();
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          {prodStats.length > 0 ? (
            <Chart data={prodStats} dataKey="Sales" title="Sales Performance" />
          ) : (
            <p className="productTopLeft_p">Not sold yet</p>
          )}
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={products?.imgs[0]} alt="" className="productInfoImg" />
            <span className="productName">{products?.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey theId">id:</span>
              <span className="productInfoValue">{products?._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sales:</span>
              <span className="productInfoValue">{prodStats[0]?.Sales}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Material:</span>
              <span className="productInfoValue">{products?.material}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in Stock:</span>
              <span className="productInfoValue">
                {products?.inStock.toString() ? "Yes" : "No"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form action="" className="productForm" onSubmit={handleUpdate}>
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              type="text"
              name=""
              id=""
              placeholder={products?.title}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Product Description</label>
            <input
              type="text"
              name=""
              id=""
              placeholder={products?.descProd}
              value={descProd}
              onChange={(e) => setDescProd(e.target.value)}
            />
            <label>Product Price</label>
            <input
              type="text"
              name=""
              id=""
              placeholder={products?.price}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label>In Stock</label>
            <select
              name="inStock"
              id="inStock"
              onChange={(e) => setInStock(e.target.value)}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Material</label>
            <select
              name="material"
              id="material"
              onChange={(e) => setMaterial(e.target.value)}
            >
              <option value="gold">Gold</option>
              <option value="silver">Silver</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              {imgs.map((imgUrl, index) => (
                <div key={index} onClick={() => toggleImageSelection(index)}>
                  <img
                    src={imgUrl}
                    alt={""}
                    className={`productUploadImg ${
                      selectedImageIndex === index ? "selected" : ""
                    }`}
                  />
                </div>
              ))}

              <label htmlFor="file">
                <Publish />
              </label>
              <input
                type="file"
                name=""
                id="file"
                style={{ display: "none" }}
                onChange={(e) => handleFileChange(e, [selectedImageIndex])}
              />
            </div>
            <button className="productButton" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
