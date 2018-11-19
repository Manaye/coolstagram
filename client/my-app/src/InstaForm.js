import React, { Component } from 'react';
import './InstaForm.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class InstaForm extends Component {
  render() {
    return (
      <div className="main">
      <div className = "container">
      <h1 className="text-center">coolstagram</h1>
     <Form>
        <FormGroup>
          <Label for="exampleEmail">Username</Label>
          <Input type="email" name="email" id="username" placeholder="with a placeholderPhone number,username,or email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="password" placeholder="password placeholder" />
        </FormGroup>
        
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <div className="login-btn-container">
        <Button className="btn">Log in</Button>
        </div>
        <div className="hr-container">
          <hr/>
          <span>OR</span>
          <hr/>
        </div>
        <div className="forgot-password">
        <a href="#"> Forgot password?</a>
        </div>
      </Form>
      <div className="sign-up">
      <p>Dont have an account?</p>
      <a href="#">Sign up</a>
      </div>
      </div>
      </div>
    );
  }
}

export default InstaForm;
