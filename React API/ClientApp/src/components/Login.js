import React, { Component } from "react";
import { Row, Form, Col, Container, Button } from 'reactstrap';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';


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
        const { email, password } = this.state;

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
                console.log(response);
                if (response.status === 'Invalid') {
                    alert('Invalid Login Attempt');
                }
                else {
                    var session = new Session();
                    session.set("User", response.data)
                    this.props.history.push("/");
                }
                })
            .catch(error => {
                this.setState({ loginErrors: error.response.data });
                console.log(this.state.loginErrors);
            });
        event.preventDefault();
    }

    CheckForErrors() {
        if (this.state.loginErrors != null) {
            return (
                <div>
                    <h2>{this.state.loginErrors}</h2>
                </div>
            )
        }
    }



    onSubmit() {

    }

    handleClick = () => {
        this.forceUpdate();
    };

    render() {
        return (
            <Container>
                <Row xs="1">
                            <Col>
                                <h1 style={{ color: 'red', textAlign:"center", width: "100%"}}>
                                    {this.CheckForErrors()}
                                </h1>
                            </Col>
                </Row>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col xs={4} />
                        <Col xs={4} style={{ textAlign: "center" }}>
                            <label style={{ width: "100%" }}>Email</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}/>
                        <Col xs={4} style={{ textAlign: "center" }} >
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                required
                                style={{ width: "100%" }}
                                    />
                                </Col>
                    </Row>
                    <Row>
                        <Col xs={4} />
                        <Col xs={4} style={{ textAlign: "center" }}>
                            <label style={{ width: "100%" }}>Password</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} />
                        <Col xs={4} style={{ textAlign: "center"}} >
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required
                                style={{ width: "100%"}}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs={4} />
                        <Col xs={4} style={{ textAlign: "center" }}>
                            <Button color="primary" size="lg" block type="submit" onClick={this.handleClick}>Login</Button>
                        </Col>
                    </Row>

                    </Form>
            </Container>
        );
    }
}

class Session extends Map {
    set(id, value) {
        if (typeof value === 'object') value = JSON.stringify(value);
        sessionStorage.setItem(id, value);
    }

    get(id) {
        const value = sessionStorage.getItem(id);
        try {
            return JSON.parse(value);
        } catch (e) {
            return value;
        }
    }
}