import React, { Component } from "react";
import TextInput from "../components/utilities/TextInput"
import "../containers/App.css"
import Modal from "../components/utilities/Modal";
import Registration from "../components/Registration"
import registration from "../components/Registration";

class loginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShowing: false,

            username: "",
            password: "",

            registerData: {
                username: "",
                password: "",
                email: "",
                firstname: "",
                lastname: ""
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showModal = this.showModal.bind(this);
        this.handleRegistrationChange = this.handleRegistrationChange.bind(this);
    }
    handleChange = (event) => {
        const { target: { name, value } } = event;
        this.setState({ [name]: value });
    }

    handleRegistrationChange = (event) => {
        const { target: { name, value } } = event;
        let tempData = { ...this.state.registerData };
        tempData[name] = value;
        this.setState({ registerData: tempData });

        console.log(`${JSON.stringify(this.state.registerData)}`)
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
                    <div>
                        <TextInput
                            label="Username"
                            key="username"
                            value={this.state.username}
                            type="text"
                            onChange={this.handleChange}
                            name="username"
                        />
                        <TextInput
                            label="Password"
                            key="password"
                            value={this.state.password}
                            type="password"
                            onChange={this.handleChange}
                            name="password"
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
                            onChange={this.handleRegistrationChange}
                        />
                    </Modal>
                </div>
            </div>
        );
    };
}

export default loginForm;