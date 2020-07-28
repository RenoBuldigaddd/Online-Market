// import React, { useState } from "react";
// import { connect } from "react-redux";
// import { RouteComponentProps } from "react-router";
// import "bootstrap/dist/css/bootstrap.min.css";

// import things from "./data";
// import { ThingCard } from "./ThingCard";
// import { Confirmation } from "./Confirmation";
// import { Container, Row, Col } from "react-bootstrap";

// function Catalog() {
//   const [ordered, setOrdered] = useState(false);

//   function displayConfirmation() {
//     setOrdered(true);
//     setTimeout(() => {
//       setOrdered(false);
//     }, 3000);
//   }
//   return (
//     <div className="">
//       <Confirmation />

//       <Container>
//         {ordered && <Confirmation toggle={setOrdered} />}
//         <Row>
//           {things.map((data) => (
//             <Col xs={3} className="mb-5" key={"${data.id"}>
//               <ThingCard data={data} setOrder={displayConfirmation}></ThingCard>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default connect()(Catalog);

// /*<React.Fragment>
//         <Container>
//           <div className="row justify-content-center">
//             <div className="col col-md-6 text-center">
//               <h1>it's Catalog</h1>.
//             </div>
//           </div>
//           <div className="row justify-content-center">
//             <div className="col col-md-6 text-center">
//               <h3>-- brands --</h3>
//             </div>
//           </div>
//           <div className="row justify-content-center">
//             <div className="col col-md-9 text-center">
//               <h4>prodOfBrands</h4>
//             </div>
//             <div className="col col-md-3">
//               <div className="col col-md-12 text-center">
//                 <h4>news</h4>
//               </div>
//               <div className="col col-md-12 text-center">
//                 <h4>random</h4>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </React.Fragment>*/
