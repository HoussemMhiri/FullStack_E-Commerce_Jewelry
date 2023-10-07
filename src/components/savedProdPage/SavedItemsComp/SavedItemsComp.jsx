import React from "react";
import "./SavedItemsStyle.css";
/* import { Card } from "react-bootstrap"; */
import AddToCartBtn from "../../repetitiveComp/addToCart/AddToCartBtn";
import ClearIcon from "@mui/icons-material/Clear";

import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteSavedProduct } from "../../../redux/actions";
import { Link } from "react-router-dom";
import More from "../../repetitiveComp/moreBtn/More";
const SavedItemsComp = () => {
  const { products, savedQtity } = useSelector((state) => state.savedReducer);
  const dispatch = useDispatch();
  return (
    <section className="Saveditems-comp-sect">
      <h2 className="Saveditems-comp-title">Saved Items</h2>
      {!savedQtity ? (
        <h3 className="emptySavedItems">There is no saved Items.</h3>
      ) : (
        <div className="Saveditems-comp-cards">
          {products.map((el) => (
            <div key={el.id} className="absolute-card">
              {/*  <Card style={{ width: "21.7rem" }}>
              <Card.Img variant="top" src={el.img} />

              <button className="delete-btn-card">
                <ClearIcon />
              </button>
              <Card.Body>
                <p className="prodItem-Btn-p-des">{el.desc}</p>
                <div className="prodItem-Btn-des">
                  <p className="prodItem-Btn-p">{el.price}</p>
                  <AddToCartBtn />
                </div>
              </Card.Body>
            </Card> */}
              <Card
                style={{ width: "21.7rem", height: "520px" }}
                cover={<img alt="example" src={el.imgs} />}
              >
                <button
                  onClick={() => dispatch(deleteSavedProduct(el.id))}
                  className="delete-btn-card"
                >
                  <ClearIcon />
                </button>
                <p className="prodItem-Btn-p-des">{el.descProd}</p>
                <div className="prodItem-Btn-des newbtnsDes">
                  <p className="prodItem-Btn-p">£{el.price}</p>
                  {/*   <AddToCartBtn /> */}
                  <Link to={`/product/${el.id}`}>
                    <More />
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default SavedItemsComp;
