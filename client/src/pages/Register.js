import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Col, Row, Container } from "../components/Grid";
import UserForm from "../components/UserForm";
import Header from "../components/Header";
import API from "../utils/API";

class Register extends Component {
  state = {
      email: "",
      password: "",
      isReg: false
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  setReg(){
    this.setState({
      isReg: true
    });
  }

  renderRedirect(){
    const isReg = this.state.isReg;
    return isReg ? <Redirect to = "/garden" /> : ""
  }

  handleFormSubmit = event => {
    event.preventDefault();
  console.log(this.state)
    // Add more here (what happens when a user clicks submit)
    if(this.state.email && this.state.password){
      console.log("before api login")
      API.register({
        email: this.state.email,
        password: this.state.password
      })
      .then(res => this.setReg())
      .catch(err => console.log(err))
    }
  }

  render() {
      return (
          <Container fluid>
              <Header />
              <Row>
                  <Col size="12">
                    <div className="register-form">
                        <UserForm 
                        title="Sign up"
                        handleFormSubmit={this.handleFormSubmit}
                        handleChange={this.handleChange}
                        />
                        <Link to="/login" className="FormField__Link">I'm already a member.</Link>
                    </div>
                    {
                      this.renderRedirect()
                    }
                </Col>
            </Row>
          </Container>
      );
  }
}
export default Register;