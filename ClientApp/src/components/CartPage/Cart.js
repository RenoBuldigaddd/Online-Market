import React, { Component } from 'react';
import classnames from "classnames";
import PropTypes from "prop-types";
import EclipseWidget from '../loader';
import laptop2 from "../../images/Card/laptop.jpg"
import "./Cart.scss";

class Cart extends Component {

    render() {
        
        return (
          <>     
          <div className="container-fluid padding">
            <div className="row text-center">
              <div className="col-12">
                <h1 className="display-4">Our Goods!</h1>
              </div>
              <hr />
            </div>
          </div>       
          <div className="container-fluid padding">
            <div className="row padding">
            <div className="col-md-4">
                <div className="card">
                  <img src={laptop2} className="card__header" alt="" />
                  <img />
                  <div className="card-body">
                    <h4 className="card-title">Melania Trump</h4>
                    <p className="card-text">First lady dick</p>
                    <a href="#" className="btn btn-outline-secondary">
                      See Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <img src={laptop2} className="card__header" alt="" />
                  <img />
                  <div className="card-body">
                    <h4 className="card-title">Melania Trump</h4>
                    <p className="card-text">First lady dick</p>
                    <a href="#" className="btn btn-outline-secondary">
                      See Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <img src={laptop2} className="card__header" alt="" />
                  <img />
                  <div className="card-body">
                    <h4 className="card-title">Melania Trump</h4>
                    <p className="card-text">First lady dick</p>
                    <a href="#" className="btn btn-outline-secondary">
                      See Profile
                    </a>
                  </div>
                </div>
              </div>
              </div>
              </div>
              
          </>
        );
      }

}

export default Cart;