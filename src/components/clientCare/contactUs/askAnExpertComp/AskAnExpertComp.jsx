import React, { useEffect, useState } from "react";
import "./askExStyle.css";
import {
  validateEmail,
  validateFullName,
  validateMessage,
  validatePhone,
} from "../../validationAskExp/Validation";
import axios from "axios";
import { toast } from "react-toastify";
import Toast from "../toast/Toast";

const AskAnExpertComp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [send, setSend] = useState();

  useEffect(() => {
    validateFullName({ fullName, setFullNameError });
    validateEmail({ email, setEmailError });
    validatePhone({ phone, setPhoneError });
    validateMessage({ message, setMessageError });

    //*********************** */
    if (send) {
      toast.success(send.msg);
      setFullName("");
      setEmail("");
      setMessage("");
      setPhone("");
      setSend();
    }
  }, [fullName, email, phone, message, send]);

  const sendMail = async (e) => {
    e.preventDefault();
    const token = JSON.parse(
      JSON.parse(localStorage.getItem("persist:persist-key")).authReducer
    ).users.token;
    const config = {
      headers: {
        Authorization: token,
      },
    };
    if (fullName && email && phone && message) {
      try {
        const { data } = await axios.post(
          "/api/email",
          {
            fullName,
            email,
            phone,
            message,
            setSend,
          },
          config
        );
        setSend(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Toast />
      <div className="AskCont">
        <h1 className="askFormH1">Consult a RoyalGems Diamond Expert</h1>
        <div className="askAllCont">
          <div className="askFormCont">
            <form className="askForm" onSubmit={sendMail}>
              <div className="oneForm">
                <label htmlFor="" className="labels">
                  Full Name
                </label>
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="inpts"
                  type="text"
                  name=""
                  id=""
                  placeholder="Full Name"
                />

                {fullNameError && (
                  <p style={{ color: "red" }}>{fullNameError}</p>
                )}
              </div>
              <div className="oneForm">
                <label htmlFor="" className="labels">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="inpts"
                  type="text"
                  name=""
                  id=""
                  placeholder="user@gmail.com"
                />
                {emailError && <p style={{ color: "red" }}>{emailError}</p>}
              </div>
              <div className="oneForm">
                <label htmlFor="" className="labels">
                  Phone
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="inpts"
                  type="text"
                  name=""
                  id=""
                  placeholder="123466...."
                />
                {phoneError && <p style={{ color: "red" }}>{phoneError}</p>}
              </div>
              <div className="oneFormMsg">
                <label className="contact__label" htmlFor="message">
                  Message for your RoyalGems Diamond Expert(optional)
                </label>
                <br />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="contact__textarea"
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
                {messageError && <p style={{ color: "red" }}>{messageError}</p>}
              </div>
              <button className="subBtn" type="submit">
                Submit
              </button>
            </form>
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
    </>
  );
};

export default AskAnExpertComp;
