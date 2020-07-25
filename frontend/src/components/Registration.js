import React from 'react';
import './utilities/modal.css';
import TextInput from './utilities/TextInput';
import './registration.css'

const registration = (props) => {
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
                onChange={props.onChange}
                name={nospaces.toLowerCase()}
            />
        )
    })

    return (
        <div>
            <div className="modal-header">
                <div id="register">
                    <h4>Register</h4>
                </div>
                <div>
                    <span
                        className="close"
                        onClick={props.close}>&times;</span>
                </div>
            </div>
            <form className="reg-content">
                {textFields}
            </form>
            <div>
                <button onClick={props.onClick}>Submit</button>
            </div>
        </div>
    );
}

export default registration;