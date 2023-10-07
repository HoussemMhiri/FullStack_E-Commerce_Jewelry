import React, { useEffect, useState } from "react";
import "./newProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../../firebase";
import { useDispatch } from "react-redux";
import { addProducts } from "../../../redux/action";
const NewProduct = () => {
  const [inputs, setInputs] = useState("");
  const [catArray, setCatArray] = useState([]);
  const [checkSizeArray, setCheckSizeArray] = useState([]);
  const [checkGenderArray, setCheckGenderArray] = useState([]);
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCatArray(e.target.value.split(","));
  };
  const handleSizeCheck = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setCheckSizeArray([...checkSizeArray, value]);
    } else {
      setCheckSizeArray(checkSizeArray.filter((option) => option !== value));
    }
  };
  const handleGenderCheck = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setCheckGenderArray([...checkGenderArray, value]);
    } else {
      setCheckGenderArray(
        checkGenderArray.filter((option) => option !== value)
      );
    }
  };

  /********************************* */

  const dispatch = useDispatch();
  const [totalUploads, setTotalUploads] = useState(0);
  const [downloadURLs, setDownloadURLs] = useState([]);
  const [uploadComplete, setUploadComplete] = useState(false);
  const handleFileInputChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setDownloadURLs([]);

    if (files.length === 0) {
      console.error("No files selected");
      return;
    }

    const storage = getStorage(app);

    const uploadTasks = files.map((file) => {
      const fileName = new Date().getTime() + "_" + file.name;
      const storageRef = ref(storage, fileName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      return new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
          },
          (error) => {
            console.error("Upload error:", error);
            reject(error); // Reject the promise on error
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref)
              .then((downloadURL) => {
                console.log("File available at", downloadURL);
                setDownloadURLs((prevDownloadURLs) => [
                  ...prevDownloadURLs,
                  downloadURL,
                ]);
                resolve(); // Resolve the promise when URL is obtained
              })
              .catch((error) => {
                console.error("Error getting download URL:", error);
                reject(error); // Reject the promise on error
              });
          }
        );
      });
    });

    setTotalUploads(uploadTasks.length);

    Promise.all(uploadTasks)
      .then(() => {
        console.log("All files uploaded successfully.");
        setUploadComplete(true);
      })
      .catch((error) => {
        console.error("Error uploading files:", error);
      });
  };
  useEffect(() => {
    if (uploadComplete) {
      // All files have been uploaded and download URLs are available
      const newProd = {
        ...inputs,
        imgs: [...downloadURLs],
        categories: catArray,
        gender: [...checkGenderArray],
        size: [...checkSizeArray],
      };

      dispatch(addProducts(newProd));
      window.location.reload();
    }
  }, [
    uploadComplete,
    downloadURLs,
    dispatch,
    inputs,
    catArray,
    checkGenderArray,
    checkSizeArray,
  ]);

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="prdouctCreatePt1">
          <div className="addProductItem">
            <label>Image</label>
            <input
              type="file"
              id="file"
              multiple
              onChange={handleFileInputChange}
            />
          </div>
          <div className="addProductItem">
            <label>Title</label>
            <input
              name="title"
              type="text"
              placeholder="Bracelet"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Product Description</label>
            <input
              name="descProd"
              onChange={handleChange}
              type="text"
              placeholder="description..."
            />
          </div>
          <div className="addProductItem">
            <label>Product Details</label>
            <input
              name="details"
              onChange={handleChange}
              type="text"
              placeholder="description..."
            />
          </div>
          <div className="addProductItem">
            <label>Size</label>
            {/* <select name="size">
              <option value="medium"> Medium</option>
              <option value="Small">Small</option>
              <option value="Large">Large</option>
            </select> */}
            <div className="flexSize">
              <div className="flexSize1">
                <label className="labelSize" htmlFor="small">
                  Small
                </label>
                <input
                  onChange={handleSizeCheck}
                  type="checkbox"
                  name="small"
                  value={"small"}
                  id="small"
                />
              </div>
              <div className="flexSize1">
                <label className="labelSize" htmlFor="medium">
                  Medium
                </label>
                <input
                  onChange={handleSizeCheck}
                  type="checkbox"
                  name="medium"
                  value={"medium"}
                  id="medium"
                />
              </div>
              <div className="flexSize1">
                <label className="labelSize" htmlFor="large">
                  Large
                </label>
                <input
                  onChange={handleSizeCheck}
                  name="large"
                  value={"large"}
                  type="checkbox"
                  id="large"
                />
              </div>
            </div>
          </div>
          <div className="addProductItem">
            <label>Material</label>
            <input
              name="material"
              onChange={handleChange}
              type="text"
              placeholder="Gold...."
            />
          </div>
          <div className="addProductItem">
            <label>Price</label>
            <input
              name="price"
              onChange={handleChange}
              type="number"
              placeholder="£3000"
            />
          </div>
        </div>
        <div className="prdouctCreatePt2">
          <div className="addProductItem">
            <label>Categories</label>
            <input
              name="categories"
              onChange={handleCat}
              type="text"
              placeholder="Jewellery,Bracelet..."
            />
          </div>
          <div className="addProductItem">
            <label>Categories Description</label>
            <input
              name="descCateg"
              onChange={handleChange}
              type="text"
              placeholder="description..."
            />
          </div>
          <div className="addProductItem">
            <label>Title Categories Description</label>
            <input
              name="descCategTitle"
              onChange={handleChange}
              type="text"
              placeholder="titel categorie description..."
            />
          </div>
          <div className="addProductItem">
            <label>Gender</label>
            {/*  <select name="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select> */}
            <div className="flexSize">
              <div className="flexSize1">
                <label className="labelSize" htmlFor="men">
                  Men
                </label>
                <input
                  type="checkbox"
                  onChange={handleGenderCheck}
                  name="men"
                  value={"men"}
                  id="men"
                />
              </div>
              <div className="flexSize1">
                <label className="labelSize" htmlFor="women">
                  Women
                </label>
                <input
                  type="checkbox"
                  onChange={handleGenderCheck}
                  name="women"
                  value={"women"}
                  id="women"
                />
              </div>
            </div>
          </div>
          <div className="addProductItem">
            <label>Stock</label>
            <select name="inStock" onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            className="addProductButton"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
