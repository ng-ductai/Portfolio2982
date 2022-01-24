import React from "react";
import "./index.scss";
import cv from "../../assets/cv.pdf";
import {
  Facebook,
  Instagram,
  GitHub,
  LocationOnOutlined,
  EmailOutlined,
  PhoneAndroidOutlined,
} from "@material-ui/icons";

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:ductai2982@gmail.com");
  };

  return (
    <div className="sidebar">
      <img
        src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/270108946_637680664042262_7525768078757024026_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=3ky-blcuS34AX_MpR8s&tn=Waf2oAsh_RmxvIPu&_nc_ht=scontent.fdad1-1.fna&oh=00_AT9V2qpQTqWAIUF_6D_9sp_ze412l_9wAWazvk2J_rJm9Q&oe=61F2E0DB"
        alt="avatar"
        className="sidebar__avatar"
      />

      <div className="sidebar__name">Duc Tai</div>
      <div className="sidebar__item sidebar__title">Frontend Developer</div>
      
      <a href={cv} download="cv.pdf">
        <div className="sidebar__item sidebar__cv">
          <i className="fas fa-download sidebar__icon" alt="cv" />
          CV
        </div>
      </a>

      <figure className="sidebar__social my-2">
        <a href="https://www.facebook.com/nguyenductai.taismile2k/">
          <Facebook className="sidebar__icon mr-3" />
        </a>
        <a href="https://www.instagram.com/ductai2982/">
          <Instagram className="sidebar__icon mr-3" />
        </a>
        <a href="https://github.com/ng-ductai">
          <GitHub className="sidebar__icon" />
        </a>
      </figure>

      <div className="sidebar__contact">
        <div className="sidebar__contact-location">
          <LocationOnOutlined alt="location" className="sidebar__icon mr-1" />
          70 To Ky, TPHCM
        </div>
        <div className="sidebar__contact-location">
          <EmailOutlined className="sidebar__icon mr-1" />
          ductai2982@gmail.com
        </div>
        <div className="sidebar__contact-location">
          <PhoneAndroidOutlined className="sidebar__icon" />
          0358231903
        </div>
      </div>

      <div className="sidebar__email" onClick={handleEmailMe}>
        <span> Email me </span> 
      </div>
    </div>

  );
};

export default Sidebar;
