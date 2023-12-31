import React from "react";
import { FaHome } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { buyCoffe, patreon, privat24 } from "../../assets";
import AnimationImg from "../AnimationImg/AnimationImg";
import { useTranslation } from "react-i18next";

import "./Main.scss";

const Main = () => {
  const { t } = useTranslation();

  return (
    <div className="support__main">
      <div className="container">
        <div className="header__navbar--layout">
          <div className="navbar__icon">
            <FaHome />
          </div>
          <ul className="navbar__menu">
            <li className="menu__item">
              <Link to="/" className="item__link">
                {t("header_nav_home")}
              </Link>
            </li>
            <li className="menu__item menu__item--active">
              <span className="item_arrow">
                <HiArrowRight />
              </span>
              <Link to="/donation" className="item__link">
                {t("header_nav_donation")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="main__content">
          <div className="header__banner">
            <h1 className="banner__text">support</h1>
          </div>
          <div className="main__banner">
            <h1 className="banner__text">donation</h1>
          </div>
          <div className="content__left">
            <h1 className="left__title">{t("donation_title")}</h1>
            <p className="left__description">{t("donation_description")}</p>

            <div className="left__buttons">
              <a
                href="https://www.buymeacoffee.com/stasoz"
                target="_blank"
                rel="noreferrer"
                className="button__link buy__coffee"
              >
                <img src={buyCoffe} alt="buy-me-coffe-button" />
              </a>
              <a
                href="https://www.patreon.com/stasoz"
                target="_blank"
                rel="noreferrer"
                className="button__link patreon"
              >
                <img src={patreon} alt="patreon-button" />
              </a>
              <a
                href="https://next.privat24.ua/money-transfer/form/%7B%22form%22:%7B%22receiver%22:%7B%22source%22:%22manual%22,%22number%22:%225457082227969750%22%7D%7D%7D"
                target="_blank"
                rel="noreferrer"
                className="button__link privat24"
              >
                <img src={privat24} alt="privat24-button" />
              </a>
            </div>
          </div>
          <div className="content__right">
            <div className="right__img">
              <AnimationImg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
