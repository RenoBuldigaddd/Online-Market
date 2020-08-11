import * as React from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import BaseAvatar from "../../images/Card/laptop.jpg";
import Card2 from "./Cart";

class CardPage extends React.PureComponent {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Container>
          <div className="container-fluid padding">
              <Card2></Card2>              
          </div>          
        </Container>
      </React.Fragment>
    );
  }
}

export default connect()(CardPage);
