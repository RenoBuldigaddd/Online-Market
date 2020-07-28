import * as React from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import AdminLayout from "./components/admin/AdminLayout";
import Home from "./components/HomePage/Home";
//import Catalog from "./components/CatalogPage/Catalog";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Cabinet from "./components/UserProfilePage/Cabinet";
import Card from "./components/CardPage/Card";
//import Events from "./components/EventPage/Eventes";

//import Admin from "./components/admin/Admin ";

import "./custom.scss";

export default () => (
  <Layout>
    <Route exact path="/" component={Home} />
    {/* <Route exact path="/catalog" component={Catalog} /> */}
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/cabinet" component={Cabinet} />
    <Route exact path="/cart" component={Card} />
    {/* <Route exact path='/admin' component={Admin}/> */}
    {/* <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} /> */}
  </Layout>
);
