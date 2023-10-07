import React from "react";
import "./clCare.css";
import WordBtn from "../../repetitiveComp/paragBtn/WordBtn";
import { Link } from "react-router-dom";
import BfFooter from "../../homePage/bfFooter/BfFooter";
import ShopBtn from "../../repetitiveComp/shopBtnComp/ShopBtn";

const ClCareComp = () => {
  function openPDF() {
    const pdfUrl =
      "https://media.tiffany.com/is/content/Tiffany/Service-Request-Form_UK";
    window.open(pdfUrl, "_blank");
  }
  return (
    <div>
      <div className="banner">
        <img
          height={532}
          src="/img/clientCareImg.png"
          alt=""
          className="bannerImg"
        />
        <div className="bannerDesc">
          <h3 className="title-PP-h3 ">RoyalGems At Your Service</h3>
          <p>
            There’s no question too small or request too big for our RoyalGems
            client advisors. From choosing an engagement ring or gift to
            providing in-store or virtual appointments, we’re always at your
            service.{" "}
          </p>
        </div>
      </div>
      <div className="openHours">
        <h3 className="title-PP-h3 ">Hours of Operation:</h3>
        <p>Monday–Friday: 9am – 6pm</p>
      </div>
      <div className="assistant">
        <h3 className="title-PP-h3 ">How Can We Assist You?</h3>
        <div className="allCardAssistant">
          <div className="cardHelp" onClick={openPDF}>
            <img
              className="cardImg"
              src="https://media.tiffany.com/is/image/tiffanydm/2022_AS-CUSTOMERSERVICE-LP-QL-2?$tile$&&fmt=webp"
              alt=""
            />
            <p className="btnImgAbs">
              <WordBtn el={"Request a Repair"} className="btnImgAbs" />
            </p>
          </div>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to={"/askExpert"}
          >
            <div className="cardHelp">
              <img
                className="cardImg"
                src="https://media.tiffany.com/is/image/tiffanydm/2022_AS-CUSTOMERSERVICE-LP-QL-5?$tile$&&fmt=webp"
                alt=""
              />
              <p className="btnImgAbs">
                <WordBtn el={"Ask a Diamond Expert"} />
              </p>
            </div>
          </Link>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to={"/products/personalise"}
          >
            <div className="cardHelp">
              <img
                className="cardImg"
                src="https://media.tiffany.com/is/image/tiffanydm/2022_AS-CUSTOMERSERVICE-LP-QL-6?$tile$&&fmt=webp"
                alt=""
              />

              <p className="btnImgAbs">
                <WordBtn el={"Personalise It"} />
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="imgsProductsContainers">
        <div className="imgProductContainer">
          <img
            height={640}
            width={512}
            style={{ borderRadius: "10px" }}
            src="https://media.tiffany.com/is/image/tiffanydm/2022_AS-CUSTOMERSERVICE-LP-50-50-1-Desktop?$tile$&wid=1088&hei=1360&fmt=webp"
            alt=""
          />
          <div className="imgProductDesc">
            <h4 className="imgPdtH4">Product Services</h4>
            <p className="imgPdtP">
              We offer cleaning, repair and fit alterations for the lifetime of
              your RoyalGems piece.{" "}
            </p>
          </div>
        </div>
        <div className="imgProductContainer">
          <img
            height={640}
            width={512}
            style={{ borderRadius: "10px" }}
            src="https://media.tiffany.com/is/image/tiffanydm/2022_AS-CUSTOMERSERVICE-LP-50-50-2-Desktop?$tile$&wid=1088&hei=1360&fmt=webp"
            alt=""
          />
          <div className="imgProductDesc">
            <h4 className="imgPdtH4">Product Care</h4>
            <p className="imgPdtP">
              Explore how to care for your RoyalGems design’s unique materials,
              from metal to leather.
            </p>
          </div>
        </div>
      </div>
      <div className="back-pdtPage-btn">
        <Link to="/">
          <ShopBtn el={"Back To Home"} />
        </Link>
      </div>
      <div>
        <BfFooter el={"Client Care"} />
      </div>
    </div>
  );
};

export default ClCareComp;
