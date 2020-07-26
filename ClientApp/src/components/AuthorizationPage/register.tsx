import * as React from "react";
import { connect } from "react-redux";
import loginImg from "../../images/BaseAvatar.svg";
import "./style.scss";

const Home = () => (
  <div className="base-container" /*ref={this.props.containerRef}*/>
    <div className="header">Welcome!</div>
    <div className="content">
      <div className="image">
        <img src={loginImg} />
      </div>
      <div className="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="text" name="password" placeholder="password" />
        </div>
      </div>
    </div>
    <div className="footerreg">
      <button type="button" className="btn">
        Register
      </button>
    </div>
  </div>
);

export default connect()(Home);
