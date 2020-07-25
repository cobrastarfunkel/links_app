import React, { Component } from "react";
import TextInput from "../components/utilities/TextInput"
import "../containers/App.css"
import Modal from "../components/utilities/Modal";
import Registration from "../components/Registration"

class loginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            modalShowing: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
        const { target: { name, value } } = event;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.username);
        alert(`Name and password Entered: ${this.state.username} ${this.state.password}`);
    }

    showModal = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            modalShowing: !prevState.modalShowing
        }));
    }

    render() {
        return (
            <div>
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
                    <div>
                        <button onClick={this.handleSubmit}>Submit</button>
                        <button onClick={this.showModal}>Register</button>
                    </div>
                </form>
                <div>
                    <Modal show={this.state.modalShowing}>
                        <Registration
                            onClick={this.handleSubmit}
                            close={this.showModal}
                            onChange={this.handleChange}
                        />
                    </Modal>
                </div>
            </div>
        );
    };
}

export default loginForm;