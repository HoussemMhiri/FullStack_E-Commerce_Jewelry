import React, { useEffect } from "react";
import "./askExStyle.css";

const AskAnExpertComp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="AskCont">
      <h1 className="askFormH1">Consult a RoyalGems Diamond Expert</h1>
      <div className="askAllCont">
        <div className="askFormCont">
          <div className="askForm">
            <div className="oneForm">
              <label htmlFor="" className="labels">
                Full Name
              </label>
              <input
                className="inpts"
                type="text"
                name=""
                id=""
                placeholder="Full Name"
              />
            </div>
            <div className="oneForm">
              <label htmlFor="" className="labels">
                Email
              </label>
              <input
                className="inpts"
                type="text"
                name=""
                id=""
                placeholder="user@gmail.com"
              />
            </div>
            <div className="oneForm">
              <label htmlFor="" className="labels">
                Phone
              </label>
              <input
                className="inpts"
                type="text"
                name=""
                id=""
                placeholder="123466...."
              />
            </div>
            <div className="oneFormMsg">
              <label class="contact__label" for="message">
                Message for your RoyalGems Diamond Expert(optional)
              </label>
              <br />
              <textarea
                class="contact__textarea"
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
          <button className="subBtn" type="submit">
            Submit
          </button>
        </div>
        <div className="askFormImg">
          <img
            src="https://www.tiffany.co.uk/shared/images/location/visit-placeholder.jpg"
            alt=""
            className="askFormImg"
          />
        </div>
      </div>
    </div>
  );
};

export default AskAnExpertComp;
