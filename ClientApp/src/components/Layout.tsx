import * as React from "react";
import { Container } from "reactstrap";
import NavMenu from "./navMenu/NavMenu";
import NavMenu2 from "./navMenu/NavMenu2";

export default (props: { children?: React.ReactNode }) => (
  <React.Fragment>
    <NavMenu2 />
    <Container>{props.children}</Container>
  </React.Fragment>
);
