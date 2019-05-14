import React from "react";
import Img from "./Foto/glass.png";
import Img2 from "./Foto/microphone.png";
import Img3 from "./Foto/money.png";
import Img4 from "./Foto/wallet.png";
import Img5 from "./Foto/speedometer.png";
import Img6 from "./Foto/shield.png";
import Img7 from "./Foto/proseries.png";
import Img8 from "./Foto/payment-method.png";
import Img9 from "./Foto/sale.png";
import Img10 from "./Foto/pay2.svg";
import Img11 from "./Foto/mail.png";
import Img12 from "./Foto/support.png";
import { NavLink } from "react-router-dom";

import "./footer.css";
import "./content.css";
import ChatComponent from "./chat";
import Chatbot from "./Chatbot";

const ContentComponent = () => {
  const Help = props => {
    const { helpLogo, helpName } = props;

    return (
      <div className="help-content">
        <div className="help-logo">
          <img src={helpLogo} alt="Loading" />
        </div>

        <div className="help-name">
          <p>
            <span>{helpName}</span>
          </p>
        </div>
      </div>
    );
  };

  const Category = props => {
    const { categoryLogo, categoryDesc } = props;
    return (
      <div className="category-item">
        <div className="category-logo">
          <img src={categoryLogo} alt="Loading" />
          <span className="category-name"> {categoryDesc} </span>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="content-container">
        <p>
          <span>Hai 'Username' !</span>
        </p>
        <p>
          <span>Ada yang bisa kami bantu?</span>
        </p>

        <div className="search-container">
          <div className="search-content">
            <div className="image1">
              <img alt="Loading" src={Img} />
            </div>
            <div className="form-text">
              <input type="text" placeholder="Search" />
            </div>
            <div className="image2">
              <img alt="Loading" src={Img2} />
            </div>
          </div>
        </div>

        <p>
          <span>Pilih kategori masalah anda</span>
        </p>

        <div className="category-container">
          <NavLink
            to="/Umum/"
            activeClassName="active"
            style={{ textDecoration: "none" }}
          >
            <Category categoryLogo={Img3} categoryDesc="Umum" />
          </NavLink>

          <NavLink to="/DONA/" style={{ textDecoration: "none" }}>
            <Category categoryLogo={Img4} categoryDesc="DONA" />
          </NavLink>

          <NavLink to="/FlexiFast/" style={{ textDecoration: "none" }}>
            <Category categoryLogo={Img5} categoryDesc="FlexiFast" />
          </NavLink>

          <NavLink to="/AMAN/" style={{ textDecoration: "none" }}>
            <Category categoryLogo={Img6} categoryDesc="AMAN" />
          </NavLink>

          <NavLink to="/proSERIES/" style={{ textDecoration: "none" }}>
            <Category categoryLogo={Img7} categoryDesc="proSERIES" />
          </NavLink>

          <NavLink to="/Pelunasan-Awal/" style={{ textDecoration: "none" }}>
            <Category categoryLogo={Img8} categoryDesc="Pelunasan Awal" />
          </NavLink>

          <NavLink to="/Promosi/" style={{ textDecoration: "none" }}>
            <Category categoryLogo={Img9} categoryDesc="Promosi" />
          </NavLink>

          <NavLink to="/Pembayaran" style={{ textDecoration: "none" }}>
            <Category categoryLogo={Img10} categoryDesc="Pembayaran" />
          </NavLink>
        </div>

        <div className="help">
          <p>Hubungi Kami</p>
        </div>

        <div className="help-container">
          <Help helpLogo={Img11} helpName="care@homecredit.co.id" />
          <Help helpLogo={Img12} helpName="(021)2953 9600" />
        </div>

        <NavLink to="/Chat">
          <ChatComponent />
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default ContentComponent;
