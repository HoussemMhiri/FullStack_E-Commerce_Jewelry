import React from "react";
import "./ShopContStyle.css";
const ShopContProd = () => {
  return (
    <div className="shopProd-cont-product">
      <img
        src="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/return-to-tiffanyheart-tag-bead-bracelet-23984024_1015225_ED_M.jpg?defaultImage=NoImageAvailable&op_usm=1,1,6"
        alt=""
        width={200}
        height={200}
      />
      <div className="shopProd-cont-desc">
        <div className="prod-p">
          <p>Heart Tag Bead Bracelet</p>
        </div>
        <div className="shopProd-cont-desc-SizendQtity">
          <div className="shopProd-cont-desc-Size">
            <p className="shopProd-cont-desc-Size-title">Size</p>
            <p className="shopProd-cont-desc-Size-p">Medium</p>
          </div>
          <div className="shopProd-cont-desc-Qtity">
            <p className="qtity-word-shopCart">Qty</p>
            <div className="shopProd-cont-desc-Qtity-btn">
              <button className="shopProd-cont-desc-Qtity-btnSign">-</button>
              <p className="shopProd-cont-desc-Qtity-btn-num">1</p>
              <button className="shopProd-cont-desc-Qtity-btnSign">+</button>
            </div>
          </div>
          <div>
            <p className="shopCart-Price">Price</p>
            <p className="shopCart-Price-Number">£240.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopContProd;
