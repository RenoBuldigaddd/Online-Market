import * as React from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import AdminLayout from "./components/admin/AdminLayout";
import Home from "./components/HomePage/Home";
import Signin from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Profile from "./components/UserProfilePage/Cabinet";
//import Card from "./components/CatalogPage/Catal  og";

//import Admin from "./components/admin/Admin ";

import "./custom.scss";

export default () => (
  <Layout>
    <Route exact path="/" component={Home} />
    {/* <Route exact path="/catalog" component={Catalog} /> */}
    <Route exact path="/signin" component={Signin} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/profile" component={Profile} />
    {/* <Route exact path='/admin' component={Admin}/> */}
    {/* <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} /> */}
  </Layout>
);
