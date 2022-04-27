import React, { PureComponent } from 'react'
import { Container,Row ,Col , Button } from 'react-bootstrap';
import propTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { Accordion  } from 'react-bootstrap';

const setStyleInfo ={
                     color : 'White',
                     fontFamily:'Montserra, sans-serif' ,
                     fontSize :'30px',
                     fontWeight : 'Bold',
}


export class Profil extends PureComponent {
  render() {
    return (
      <div>
<Container style={{marginTop : '15px' , marginBottom :'auto'}}>
   <Row>
   <Col style={{display:'flex' , flexDirection:'column' , alignSelf:'center'}}>
     
            
             <p style={{fontWeight:'bold' , color :'blue'}}>Vos Données</p> 
            
                 <p style={{color:'white'}}> <span style={{color : 'white' ,  fontWeight:'bold'}}> Votre nom : </span> {this.props.utilisateur}</p>
                 <p style={{color:'white'}}> <span style={{color:'white' , fontWeight:'bold'}}> Votre email : </span> {this.props.email}</p>
            

  
         
              <p style={{fontWeight:'bold' , color :'blue'}}>Votre rapport : </p>
               
      

               
   
               <p style={{fontWeight:'bold' , color :'blue'}}>Votre solde :   </p>
               
            <Form>
  
            <Form.Group controlId="formFile" className="mb-3">
               <Form.Label style={{color:"white" , fontWeight:'bold'}}>  Veuillez télécharger votre rapport par là :  </Form.Label>
               <Form.Control type="file"  />
            </Form.Group>
            <Button variant="success" type="submit">
                     Envoyer une demande 
           </Button>
    </Form>
       

   </Col>
   </Row>

</Container> 

      
      
      </div>
    )
  }}
  Profil.propTypes ={
    utilisateur : propTypes.string.isRequired ,
    utilisateur: propTypes.number .isRequired , 
    utilisateur: propTypes.string.isRequired , 

  }
  Profil.defaultProps={
    utilisateur :'qq chose est écrite là ' ,
    utilisateur :'qq chose est écrite là ' ,
    utilisateur :'qq chose est écrite là ' ,
  
  }


export default Profil ; 