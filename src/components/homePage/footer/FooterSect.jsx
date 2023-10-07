import React from "react";
import footDepData from "./footData";
import "./FooterStyle.css";
import ShopBtn from "../../repetitiveComp/shopBtnComp/ShopBtn";
const FooterSect = () => {
  return (
    <div className="allFooter-Cont">
      <section className="footer-sect">
        <div className="first-footer-cont">
          {footDepData.map((el) => (
            <div key={el.id} className="footer-dep-cont">
              <h6 className="footer-dep-title">{el.title}</h6>
              <div className="footer-dep-info">
                {el.more.map((el) => (
                  <p key={el.id}>{el.p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="sec-footer-cont">
          <p className="sec-footer-cont-title">Latest from RoyalGems</p>
          <p className="sec-footer-cont-p">
            Be the first to know about exciting new designs, special events,
            store openings and much more.
          </p>
          <div>
            <ShopBtn el={"Sign Up"} />
          </div>
          <div className="all-Socials">
            <a href="#">
              <i className="fab fa-instagram linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest twitch"></i>
            </a>
          </div>
        </div>
      </section>
      <p className="footer-p-copy">© RoyalGems 2023</p>
    </div>
  );
};

export default FooterSect;
