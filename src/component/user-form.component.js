import React, { Component } from "react";

var confirmation;
var passwordTemp;
var passwordOld;

const regExp1 = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)

const regExp2 = RegExp(
    /^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/
)

const passwordMatch = (confirmation, password) => password === confirmation;

const formValid = ({ isError, ...rest }) => {
    let isValid = true;
    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid = false;
        }
    });

    Object.values(rest).forEach(val => {
        console.log(val)
        if (val === '') {
            isValid = false
        } 
    });
    return isValid;
};

export default class UserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: '',
            email: '',
            password: '',
            password_confirmation: '',
            isError: {
                name: '',
                phone: '',
                email: '',
                password: '',
                password_confirmation: '',
            }
        }
    }

    onSubmit = e => {
        e.preventDefault();
        if (!formValid(this.state)) {
            console.log(this.state)
            alert("register Failure")
        } else {
            console.log("Form is invalid!");
            alert("register Successful")

        }
    };

    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };
        switch (name) {
            case "name":
                isError.name =
                    value.length < 4 ? "Atleast 4 characaters required" : "";
                break;
            
            case "phone":
                isError.phone = regExp2.test(value)
                    ? ""
                    : "Phone number is invalid (Enter only 10 digit number)";
                break;
            case "email":
                isError.email = regExp1.test(value)
                    ? ""
                    : "Email address is invalid";
                break;
            case "password":
                isError.password =
                    value.length < 6 ? "Atleast 6 characaters required" : "";
                passwordTemp = value;
                break;
            case "password_confirmation":
                confirmation = value
                isError.password_confirmation =
                    passwordMatch(confirmation,passwordTemp) ? "" : "Password and password confirmation do not match." ;

                break;
            default:
                break;
        }
        this.setState({
            isError,
            [name]: value
        })
    };
    render() {
        const { isError } = this.state;
        return (
            <form onSubmit={this.onSubmit} noValidate>
                <div className="form-group mb-3">
                    <label>Full Name</label>
                    <input
                        type="text"
                        className={isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="name"
                        onChange={this.formValChange}
                        placeholder="Full Name"
                    />
                    {isError.name.length > 0 && (
                        <span className="invalid-feedback">{isError.name}</span>
                    )}
                </div>
                
                <div className="form-group mb-3">
                    <label>Phone</label>
                    <input
                        type="phone"
                        className={isError.phone.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="phone"
                        onChange={this.formValChange}
                        placeholder="Phone Number"
                    />
                    {isError.phone.length > 0 && (
                        <span className="invalid-feedback">{isError.phone}</span>
                    )}
                </div>

                    
                <div className="form-group mb-3">
                    <label>Email Address</label>
                    <input
                        type="email"
                        className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="email"
                        onChange={this.formValChange}
                        placeholder="Email Address"
                    />
                    {isError.email.length > 0 && (
                        <span className="invalid-feedback">{isError.email}</span>
                    )}
                </div>

                <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="password"
                        onChange={this.formValChange}
                        placeholder="Password"
                    />
                    {isError.password.length > 0 && (
                        <span className="invalid-feedback">{isError.password}</span>
                    )}
                </div>
                
                <div className="form-group mb-3">
                    <label>Confirm password</label>
                    <input
                        type="password"
                        className={isError.password_confirmation.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="password_confirmation"
                        onChange={this.formValChange}
                        placeholder="Confirm password"
                    />
                    {isError.password_confirmation.length > 0 && (
                        <span className="invalid-feedback">{isError.password_confirmation}</span>
                    )}
                </div>
            
                <button type="submit" className="btn btn-block btn-danger">Create User</button>
            </form>
        );
    }
}