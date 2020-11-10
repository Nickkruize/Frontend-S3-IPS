import React, { Component } from "react";
import { Row, Form } from 'reactstrap';
import axios from "axios";

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            loginErrors: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const { email, password, loginErrors } = this.state;

        axios
            .post(
                "https://localhost:44382/api/users/Login",
                {
                        email: email,
                        password: password
                },
                { withCredentials: false }
            )
            .then(response => {
                try {
                    this.state.loginErrors = null;
                    console.log("Logged in succesfully!", response.data)
                    this.props.handleSuccessfulAuth(response.data);
                }
                catch (e) {}
                })
            .catch(error => {
                this.state.loginErrors = error.response.data;
                console.log(this.state.loginErrors);
            });
        event.preventDefault();
    }

    CheckForErrors() {
            return (
                <div>
                    <h2>{this.state.loginErrors}</h2>
                </div>
            )
        }

    handleClick = () => {
        this.forceUpdate();
    };

    render() {
        return (
            <div>
                <Row>
                    {this.CheckForErrors()}
                </Row>
                <Form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />

                    <button type="submit" onClick={this.handleClick}>Login</button>
                </Form>
            </div>
        );
    }
}
