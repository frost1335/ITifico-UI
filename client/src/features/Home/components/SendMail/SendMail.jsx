import React from "react";
import { FaUser } from "react-icons/fa";
import { BsFillEnvelopeFill, BsFillBellFill } from "react-icons/bs";

import "./SendMail.scss";
import { sendmail1, sendmail2 } from "../../assets";

const SendMail = () => {
  return (
    <div className="sendmail">
      <div className="sendmail_imgbg">
        <img src={sendmail1} alt="sendmail-img" className="imgbg_1" />
      </div>
      <div className="container">
        <div className="sendmail__content">
          <div className="content__imgbg">
            <img src={sendmail2} alt="sendmail-img" className="imgbg_2" />
          </div>
          <h2 className="content__title">Кодування ніколи не було простіше!</h2>
          <p className="content__text">
            Не хочете пропускати жодних новин, тоді підпишіться на нашу
            розсилку.
          </p>
          <form className="content__form">
            <div className="input__group">
              <input type="text" placeholder="Повне ім’я" />
              <span className="input__icon">
                <FaUser />
              </span>
            </div>
            <div className="input__group">
              <input type="email" placeholder="Ваша Email адреса" />
              <span className="input__icon">
                <BsFillEnvelopeFill />
              </span>
            </div>
            <button>
              Підписатися <BsFillBellFill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendMail;