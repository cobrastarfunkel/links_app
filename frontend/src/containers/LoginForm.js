import React, { Component } from "react";
import TextInput from "../components/utilities/TextInput"
import "../containers/App.css"

class loginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
        const { target: { name, value } } = event;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        console.log(this.state.username);
        alert(`Name and password Entered: ${this.state.username} ${this.state.password}`);
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <div className="loginForm">
                    <TextInput
                        label="Username"
                        name="username"
                        value={this.state.username}
                        type="text"
                        onChange={this.handleChange}
                    />
                    <TextInput
                        label="Password"
                        name="password"
                        value={this.state.password}
                        type="password"
                        onChange={this.handleChange}
                    />
                </div>
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        );
    };
}

export default loginForm;