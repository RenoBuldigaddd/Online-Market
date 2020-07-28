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

export default class NavMenu extends React.PureComponent {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3">
          <Container>
            <NavbarBrand tag={Link} to="/">
              Online-Market
            </NavbarBrand>
            <Collapse
              className="d-sm-inline-flex"
              isOpen={this.state.isOpen}
              navbar
            >
              {/*Searching*/}
              <div className="input-group p-1">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  aria-label="search"
                  aria-describedby="button-search"
                ></input>
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    type="button"
                    id="button-search"
                  >
                    <span className="fa fa-search" aria-hidden="true"></span>
                  </button>
                </div>
              </div>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="p-2 text-dark" to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="p-2 text-dark" to="/catalog">
                    Catalog
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink tag={Link} className="p-2 text-dark" to="/catalog">
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={link} className="p-2 text-dark" to="/events">
                    Events
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={Link}
                    className="btn btn-outline-primary p-2"
                    to="/login"
                  >
                    SingIn
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="btn p-2" to="/cart">
                    <span
                      className="fa fa-shopping-basket"
                      aria-hidden="true"
                    ></span>
                  </NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
