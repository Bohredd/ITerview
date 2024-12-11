// import { useState, useEffect } from "react";
// import { Plans } from "../../../types/payment/Plans";
// import { Button, Nav, Tab, Form, Col, Row, Card } from "react-bootstrap";

// export const Payment = () => {
//   const [plan, setPlan] = useState<Plans | null>(null);
//   const [formData, setFormData] = useState({
//     cardNumber: "",
//     cardName: "",
//     expiryDate: "",
//     cvc: "",
//   });
//   const [errors, setErrors] = useState({
//     cardNumber: "",
//     cardName: "",
//     expiryDate: "",
//     cvc: "",
//   });

//   useEffect(() => {
//     const selectedPlan = localStorage.getItem("selectedPlan");
//     if (selectedPlan) {
//       setPlan(JSON.parse(selectedPlan));
//     }
//   }, []);

//   const formatCardNumber = (value: string) => {
//     value = value.replace(/\D/g, "").substring(0, 16);
//     return value.replace(/(\d{4})(?=\d)/g, "$1 ");
//   };

//   const formatExpiryDate = (value: string) => {
//     value = value.replace(/\D/g, "");
//     if (value.length >= 2) {
//       value = `${value.substring(0, 2)}/${value.substring(2, 4)}`;
//     }
//     return value;
//   };

//   const formatCVC = (value: string) => {
//     return value.replace(/\D/g, "").substring(0, 3);
//   };

//   const validateForm = () => {
//     const errors = {
//       cardNumber: "",
//       cardName: "",
//       expiryDate: "",
//       cvc: "",
//     };
//     let isValid = true;

//     const cardNumberRegex = /^[0-9]{16}$/;
//     const cardNumberWithoutSpaces = formData.cardNumber.replace(/\s+/g, "");
//     if (!cardNumberRegex.test(cardNumberWithoutSpaces)) {
//       errors.cardNumber = "Card number must be 16 digits.";
//       isValid = false;
//     }

//     if (!formData.cardName.trim()) {
//       errors.cardName = "Cardholder name is required.";
//       isValid = false;
//     }

//     const expiryDateRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
//     if (!expiryDateRegex.test(formData.expiryDate)) {
//       errors.expiryDate = "Invalid expiry date. Use MM/YY format.";
//       isValid = false;
//     } else {
//       const [month, year] = formData.expiryDate.split("/");
//       const expiryDate = new Date(`20${year}-${month}-01`);
//       if (expiryDate < new Date()) {
//         errors.expiryDate = "Card has expired.";
//         isValid = false;
//       }
//     }

//     const cvcRegex = /^[0-9]{3}$/;
//     if (!cvcRegex.test(formData.cvc)) {
//       errors.cvc = "CVC must be 3 digits.";
//       isValid = false;
//     }

//     setErrors(errors);
//     return isValid;
//   };

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();

//     if (validateForm()) {
//       alert("Payment processed");
//     }
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;

//     if (name === "cardNumber") {
//       setFormData({
//         ...formData,
//         [name]: formatCardNumber(value),
//       });
//     } else if (name === "expiryDate") {
//       setFormData({
//         ...formData,
//         [name]: formatExpiryDate(value),
//       });
//     } else if (name === "cvc") {
//       setFormData({
//         ...formData,
//         [name]: formatCVC(value),
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   if (!plan) {
//     return <div>No plan selected</div>;
//   }

//   return (
//     <div className="pt-5 pb-5">
//       <Card className="shadow-lg">
//         <Card.Header className="text-center fs-4 fw-bold">
//           Payment for {plan.title}
//         </Card.Header>
//         <Card.Body>
//           <Tab.Container defaultActiveKey="credit-card">
//             <Row>
//               <Col sm={4}>
//                 <Nav variant="pills" className="flex-column">
//                   <Nav.Item>
//                     <Nav.Link eventKey="credit-card">Credit Card</Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link eventKey="pix">Pix</Nav.Link>
//                   </Nav.Item>
//                 </Nav>
//               </Col>
//               <Col sm={8}>
//                 <Tab.Content>
//                   {/* Credit Card Tab */}
//                   <Tab.Pane eventKey="credit-card">
//                     <Form onSubmit={handleSubmit}>
//                       <Form.Group controlId="formCardNumber">
//                         <Form.Label>Card Number</Form.Label>
//                         <Form.Control
//                           type="text"
//                           name="cardNumber"
//                           placeholder="1234 5678 9012 3456"
//                           value={formData.cardNumber}
//                           onChange={handleInputChange}
//                           isInvalid={!!errors.cardNumber}
//                         />
//                         <Form.Control.Feedback type="invalid">
//                           {errors.cardNumber}
//                         </Form.Control.Feedback>
//                       </Form.Group>

//                       <Form.Group controlId="formCardName">
//                         <Form.Label>Cardholder Name</Form.Label>
//                         <Form.Control
//                           type="text"
//                           name="cardName"
//                           placeholder="John Doe"
//                           value={formData.cardName}
//                           onChange={handleInputChange}
//                           isInvalid={!!errors.cardName}
//                         />
//                         <Form.Control.Feedback type="invalid">
//                           {errors.cardName}
//                         </Form.Control.Feedback>
//                       </Form.Group>

//                       <Row>
//                         <Col>
//                           <Form.Group controlId="formCardExpiry">
//                             <Form.Label>Expiry Date</Form.Label>
//                             <Form.Control
//                               type="text"
//                               name="expiryDate"
//                               placeholder="MM/YY"
//                               value={formData.expiryDate}
//                               onChange={handleInputChange}
//                               isInvalid={!!errors.expiryDate}
//                             />
//                             <Form.Control.Feedback type="invalid">
//                               {errors.expiryDate}
//                             </Form.Control.Feedback>
//                           </Form.Group>
//                         </Col>
//                         <Col>
//                           <Form.Group controlId="formCardCVC">
//                             <Form.Label>CVC</Form.Label>
//                             <Form.Control
//                               type="text"
//                               name="cvc"
//                               placeholder="123"
//                               value={formData.cvc}
//                               onChange={handleInputChange}
//                               isInvalid={!!errors.cvc}
//                             />
//                             <Form.Control.Feedback type="invalid">
//                               {errors.cvc}
//                             </Form.Control.Feedback>
//                           </Form.Group>
//                         </Col>
//                       </Row>

//                       <Button variant="primary" type="submit" className="mt-3">
//                         Pay ${plan.price}
//                       </Button>
//                     </Form>
//                   </Tab.Pane>

//                   {/* Pix Tab */}
//                   <Tab.Pane eventKey="pix">
//                     <div className="text-center">
//                       <p>
//                         Please make the payment via Pix to the following key:
//                       </p>
//                       <p className="fw-bold">pix@yourcompany.com</p>
//                       <Button
//                         variant="success"
//                         className="mt-3"
//                         href="/payment/confirmation"
//                       >
//                         Confirm Payment
//                       </Button>
//                     </div>
//                   </Tab.Pane>
//                 </Tab.Content>
//               </Col>
//             </Row>
//           </Tab.Container>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default Payment;
