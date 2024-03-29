import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

const UserForm = props => {
    return (
        <div className="registration">
        <form method="post">
            <div className="form-group">
                <h4>{props.title}</h4>
            <label htmlFor="register-email">Email address</label>
                <br></br>
                <input 
                    className="col-12 form-control"
                    value={props.email}
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={props.handleChange}
                />
            </div>
            <div className="form-group">
            <label htmlFor="register-pw">Password</label>
                <br></br>
                <input 
                    className="col-12 form-control"
                    value={props.password}
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={props.handleChange}
                />
            </div>
            <div className="button">
                <button 
                    type="submit" 
                    className="submitBtn btn"
                    onClick={props.handleFormSubmit}>
                    Submit
                </button>
                <Link to={props.form} className="FormField__Link" style={{color: "white"}}>{props.text}</Link>
            </div>
        </form>
        </div>
    )
}



export default UserForm;