import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Col, Row, Container } from "../components/Grid";
import UserForm from "../components/UserForm";
import Header from "../components/Header";

class Login extends Component {
  state = {
      email: "",
      password: "",
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // Add more here (what happens when a user clicks submit)
  }

  render() {
      return (
          <Container fluid>
              <Header />
              <Row>
                  <Col size="12">
                    <div className="register-form">
                        <UserForm 
                        title="Login"
                        handleFormSubmit={this.handleFormSubmit}
                        handleChange={this.handleChange}
                        />
                    </div>
                </Col>
            </Row>
          </Container>
      );
  }
}
export default Login;
