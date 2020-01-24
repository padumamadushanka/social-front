import React, { Fragment } from "react";
import DefaultProfile from "../images/avatar.jpg";

const Footer = () => (
  <Fragment>
    <div class="card text-center">
      <div class="card-header ">Developed by</div>
      <div class="card-body">
        <h5 class="card-title">Paduma Madushanka</h5>
        <p class="card-text">
          powered using{" "}
          <img
            src="https://img.icons8.com/color/48/000000/nodejs.png"
            alt="node default"
          ></img>
          <img
            src="https://img.icons8.com/color/48/000000/mongodb.png"
            alt="mongo default"
          ></img>
        </p>
        <img
          style={{ height: "120px", width: "auto" }}
          className=" user-img"
          src={`${process.env.REACT_APP_API_URL}/user/photo/5e15e30c34a1eb007424b71d`}
          onError={i => (i.target.src = `${DefaultProfile}`)}
          alt="owner default"
        />
      </div>
      <div class="card-footer ">
        &copy; 2020 Paduma MAdushanka All Rights Reserved
      </div>
    </div>
  </Fragment>
);
export default Footer;
