import React, { Component } from 'react';
import {Table} from 'reactstrap';
import axios from "axios";
import {AccesDenied} from './AccessDenied';
import 'bootstrap/dist/css/bootstrap.css';

export class UserManager extends Component {
    static displayName = UserManager.name;
    constructor(props) {
        super(props);

        var session = new Session();
        this.state = {
            User : session.get("User"),
            AllUsers : null
        }
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers(){
        if (this.CheckIfUsersIsAdmin()) {  
            axios.get(
                "https://localhost:44382/api/users"
            ).then(response =>{
                this.setState({AllUsers : response.data});
            })
            .catch(error => {
            })
        }
        // else{
        //     this.props.history.push("/Denied");
        // }
    }

    CheckIfUsersIsAdmin() {
        if (this.state.User != null && this.state.User.roleID > 0) {
                return true;
        }
    }

    renderUserTable(){
        if (this.state.AllUsers) {
            return this.state.AllUsers.map((item, index) => {
                const { id, username, email, roleID } = item
                return (
                    <tr key={id}>
                        <td>{username}</td>
                        <td>{email}</td>
                        <td>{roletostring(roleID)}</td>
                        <td> <button class="btn btn-danger btn-sm rounded-0" title="Delete"></button></td>
                    </tr>
                )
            })
        }
    }

    // DeleteUser(userID) {
    //     axios.delete("https://localhost:44382/api/Users",
    //     {
    //         data : userID
    //     })
    //     .then(response =>{
    //         if (response.status === "Ok") {
    //             console.log("User deleted");
    //             this.getUsers();
    //         }
    //     })
    //     .catch(error =>{
    //         console.log(error.response);
    //     })
    // }

    render() {
        if (!this.state.AllUsers && this.CheckIfUsersIsAdmin()) {
            return <div>Loading..</div>
        }

        if(!this.CheckIfUsersIsAdmin()){
            return <AccesDenied/>
        }
            return (
                <div>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <td>Username</td>
                                <td>Email</td>
                                <td>role</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderUserTable()}
                        </tbody>
                    </Table>
                </div>
            )
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


function roletostring(roleid){
    if (roleid === 0) {
        return "user";
    }
    else if (roleid === 1) {
        return "admin";
    }
}
