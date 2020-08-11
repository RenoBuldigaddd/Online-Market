import * as React from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import AdminLayout from "./components/admin/AdminLayout";
import Home from "./components/HomePage/Home";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Profile from "./components/UserProfilePage/Cabinet";
import registerTest from "./components/auth/RegisterPage"
import CardPage from "./components/CartPage/CardPage"

// import ProductsPage from "./components/CatalogPage"
//import Card from "./components/CatalogPage/Catal  og";

//import Admin from "./components/admin/Admin ";

import "./custom.scss";

export default () => (
  <Layout>
    <Route exact path="/" component={Home} />
    {/* <Route exact path="/catalog" component={Catalog} /> */}
    <Route exact path="/signin" component={Signin} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/signup2" component={registerTest}/>
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/card" component={CardPage} />

    {/* <Route path='/products/:page?' component={ProductsPage} /> */}

    {/* <Route exact path='/admin' component={Admin}/> */}
    {/* <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} /> */}
  </Layout>
);
