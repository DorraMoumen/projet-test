import React from "react";
import { useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row ,Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
const Login =()=> {
   
    const [Email,setEmail]=useState('') 
    const [Motdepasse,setMotdepasse]=useState('') 
   
    const HandleSubmit = async() => { 
   try {
   const res= await axios.post("http://localhost:5000/api/user/login",{email:Email,motdepasse:Motdepasse})
   await console.log( res.data.token);
   await localStorage.setItem('token', res.data.token);
    
   } catch (error) {
     alert(error.response.data.msg)
   }}
        return (
            <div id="all">
            <Container  id="main-container" className="d-grid h-100 ">
            <Form id="forms" className="text-center w-100">
                <h3 style={{color: "Black"}} className=" mb-3 fs-3 fw-normal" id="label">Se Connecter </h3>
                <Row >
                     <Col >
                     <div className="form-group">
                           <Form.Group className="mb-3" controlId="sign-up-email-adress">
                              <Form.Label>Email:</Form.Label>
                              <Form.Control type="email" size="lg" placeholder=" votre adresse email" className="position-relative" onChange={(e)=>{setEmail(e.target.value)}}/>
                           </Form.Group>
                           </div>
                     </Col>
                     <Col >
                     <div className="form-group">
                           <Form.Group className="mb-3" controlId="sign-up-email-password">
                              <Form.Label>Mot de passe :</Form.Label>
                              <Form.Control type="password" size="lg" placeholder=" Votre Mot De Passe  " className="position-relative" onChange={(e)=>{setMotdepasse(e.target.value)}}/>
                           </Form.Group>
                           </div>
                     </Col>
                </Row>
                <div className="vr" />
                <Row> 
                <Col >
                <div className="d-grid">
                <Button variant="primary" size="lg" onClick={HandleSubmit}> Se Connecter </Button>
                </div>
               </Col>
                </Row>
                <p className="mt-5 text-muted">&copy; 2021-2022</p>
            </Form>
            </Container>
       </div> )
    };

export default Login 



// <div className="form-group">
// <label>Email :</label>
// <input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value);console.log(Email);}}/>
// </div>

// <div className="form-group">
// <label>Mot de passe :</label>
// <input type="password" className="form-control" placeholder="Enter password"  onChange={(e)=>{setMotdepasse(e.target.value)}}/>
// </div>

            //style={{ "scroll-behavior": "smooth"}}
        