import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../images/logo.png";
import { signout, isAuthenticated } from "../auth";
const isActive = (history, path) => {
  if (history.location.pathname === path) return { color: "#ff9900" };
  else return { color: "#ffffff" };
};

//withrouter is a higher order component which means it takes other component as an argument so that component
//can use props as an argument we can use Menu=(props)=>{} like that, but for easyness
//we can directly destructure history from props so we can use history directly
const Menu = ({ history }) => (
  <div>
    <ul className="nav  bg-primary">
      <li className="nav-item">
        <Link className="nav-link " style={isActive(history, "/")} to="/">
          <img className="logo" src={logo} alt="logo default" />
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link nav-link-padding"
          style={isActive(history, "/users")}
          to="/users"
        >
          Users
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={`/post/create`}
          style={isActive(history, `/post/create`)}
          className="nav-link nav-link-padding"
        >
          Create Post
        </Link>
      </li>
      {!isAuthenticated() && (
        <Fragment>
          <li className="nav-item">
            <Link
              className="nav-link nav-link-padding"
              style={isActive(history, "/signin")}
              to="/signin"
            >
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link nav-link-padding"
              style={isActive(history, "/signup")}
              to="/signup"
            >
              Sign Up
            </Link>
          </li>
        </Fragment>
      )}
      {isAuthenticated() && (
        <React.Fragment>
          <li className="nav-item">
            <span
              className="nav-link nav-link-padding"
              style={{ cursor: "pointer", color: "#fff" }}
              onClick={() => signout(() => history.push("/"))}
            >
              Sign Out
            </span>
          </li>
          <li className="nav-item">
            <Link
              to={`/findpeople`}
              style={isActive(history, `/findpeople`)}
              className="nav-link nav-link-padding"
            >
              Find People
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={`/user/${isAuthenticated().user._id}`}
              style={isActive(history, `/user/${isAuthenticated().user._id}`)}
              className="nav-link nav-link-padding"
            >
              {`${isAuthenticated().user.name}'s profile`}
            </Link>
          </li>
        </React.Fragment>
      )}
    </ul>
  </div>
);

export default withRouter(Menu);
