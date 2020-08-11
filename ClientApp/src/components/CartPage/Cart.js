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
            <div className="card">
                <div class="card__header">
                    <img src={laptop2}></img>
                </div>
                <div className="card__content">
                    <h3 className="card__title">
                        Card title
                    </h3>
                    <div class="card__text">
                        <p>kmdfamdlck;ms;lkcmka;lmckmlkm</p>
                    </div>
                </div>                
            </div>
          </>
        );
      }

}

export default Cart;