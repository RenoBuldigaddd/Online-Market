import * as React from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import "./Home.scss";

class Home extends React.PureComponent {
  state = { isOpen: false };
  render() {
    return (
      <React.Fragment>
        <Container>
          <div className="body container-fluid banner">
            <div className="row">
              <div className="col-md-8 offset-md-2 info">
                <h1 className="text-center">SPITAL</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                </p>
                <a href="#" className="btn btn-md text-center">
                  GET STARTED
                </a>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-sm-4">
                  <h3>Column 1</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                  </p>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris...
                  </p>
                </div>
                <div class="col-sm-4">
                  <h3>Column 2</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                  </p>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris...
                  </p>
                </div>
                <div class="col-sm-4">
                  <h3>Column 3</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                  </p>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris...
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row justify-content-center">
                        <div className="col col-md-6 text-center">
                            <h1>it's Home</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-md-6 text-center">
                            <h3>-- slider --</h3>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-md-6 text-center">
                            <h4>news</h4>
                        </div>
                        <div className="col col-md-6 text-center">
                            <h4>recent</h4>
                        </div>
                    </div> */}
        </Container>
      </React.Fragment>
    );
  }
}

export default connect()(Home);
