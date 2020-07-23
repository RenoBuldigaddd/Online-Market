import * as React from "react";
import { Route, Router } from "react-router";
import Layout from "./components/Layout";
//import Home from "./components/Home";
import Counter from "./components/Counter";
import FetchData from "./components/FetchData";
import Login from "./components/AuthorizationPage/combine";
import Home from "./components/HomePage/home";

import "./custom.scss";

export default () => (
  <Layout>
    <Route exact path="/home" component={Home} />
    <Route exact path="/combine" component={Login} />
    <Route path="/counter" component={Counter} />
    <Route path="/fetch-data/:startDateIndex?" component={FetchData} />
  </Layout>
);
