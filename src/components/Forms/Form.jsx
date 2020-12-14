import React, { useState } from 'react';
import '../Css/Form.css';
import FormSignup from '../components/FormSignup';
import FormSuccess from '../components/FormSuccess';
import {Row, Col} from 'react-bootstrap';
import Login from './Login';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container ml-3 py-5'>
      <Row className="landing pt-5">
      <Col sm={6} md={6} xs={12}>
          <img className='form-img img-fluid' src="./imgs/inscrit.png" alt='spaceship' />
      </Col>
      <Col sm={6} md={6} xs={12}>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
       </Col>
</Row>
       <Row className="landing  pt-5">
      <Col sm={6} md={6} xs={12}>
          <img className='form-img img-fluid' src='./imgs/signIn.png' alt='spaceship' />
      </Col>
      <Col sm={6} md={6} xs={12}>
          <Login/>
       </Col>
      </Row>
      </div>
    
    </>
  );
};

export default Form;