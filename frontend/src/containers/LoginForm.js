import React, { Component } from "react";
import TextInput from "../components/utilities/TextInput";
import "../containers/App.css";
import Modal from "../components/utilities/Modal";
import Registration from "../components/Registration";
import request from "../components/utilities/request";

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
    }

    handleSubmit = () => {
        request('api/get_users', undefined, 'GET');
        alert(`Name and password Entered: ${this.state.username} ${this.state.password}`);
    }

    handleRegister = () => {
        let response = request('api/register', this.state.registerData, 'POST');
        if (response) {
            this.showModal();
        }
    }

    showModal = () => {
        this.setState(prevState => ({
            modalShowing: !prevState.modalShowing
        }));
    }

    render() {
        const textInputs = [
            { label: "First Name", type: "text" },
            { label: "Last Name", type: "text" },
            { label: "Password", type: "password" },
            { label: "Verify Password", type: "password" },
            { label: "Username", type: "text" },
            { label: "Email", type: "text" },
        ];

        const textFields = textInputs.map((key) => {
            const nospaces = key.label.replace(/\s/g, '');
            return (
                <TextInput
                    id={nospaces.toLowerCase()}
                    label={key.label}
                    type={key.type}
                    key={nospaces}
                    onChange={this.handleRegistrationChange}
                    name={nospaces.toLowerCase()}
                />
            )
        })

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
                    <div className="button-container">
                        <span className="button" onClick={this.handleSubmit}>Submit</span>
                        <span className="button" onClick={this.showModal}>Register</span>
                    </div>
                </form>
                <div>
                    <Modal show={this.state.modalShowing}>
                        <Registration
                            onClick={this.handleRegister}
                            close={this.showModal}
                            textFields={textFields}
                        />
                    </Modal>
                </div>
            </div>
        );
    };
}

export default loginForm;