import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Col, Row, Container } from "../components/Grid";
import UserForm from "../components/UserForm";
import Header from "../components/Header";
import API from '../utils/API';

class Login extends Component {
  state = {
      email: "",
      password: "",
      isLoggedIn: false
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  setLogin(){
    this.setState({
      isLoggedIn: true
    });
  }

  renderRedirect(){
    const isLoggedIn = this.state.isLoggedIn;
    return isLoggedIn ? <Redirect to = "/garden" /> : ""
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.email && this.state.password){
      API.login({
        email: this.state.email,
        password: this.state.password
      })
      .then(res =>  this.setLogin())
      .catch(err => console.log(err));
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
                        title="Login"
                        handleFormSubmit={this.handleFormSubmit}
                        handleChange={this.handleChange}
                        isLoggedIn={this.state.isLoggedIn}
                        />
                        <Link to="/register" className="FormField__Link">I need to sign up!</Link>
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
export default Login;
