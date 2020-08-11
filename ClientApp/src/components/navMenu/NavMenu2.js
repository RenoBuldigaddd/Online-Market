import * as React from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "../NavMenu.scss";
import { link } from "fs";
import img from "./images/logo.png";

export default class NavMenu extends React.PureComponent {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img scr={img} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/card" className="nav-link">
                  Catalog
                </a>
              </li>
              <li className="nav-item">
                <a href="/profile" className="nav-link">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a href="/signin" className="nav-link">
                  SignIn
                </a>
              </li>
              <li className="nav-item text-dark">
                <a href="/products" className="nav-link">
                  Products
                </a>
              </li>
              <li className="nav-item cart">
                <a href="/catalog" className="nav-link btn btn-outline-dark ">
                  <ion-icon name="basket-outline"></ion-icon>Cart<span>0</span>
                </a>
              </li>                          
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
