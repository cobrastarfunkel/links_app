import React from 'react';
import './utilities/modal.css';
import './registration.css'

const registration = (props) => {
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
                {props.textFields}
            </form>
            <div>
                <button onClick={props.onClick}>Submit</button>
            </div>
        </div>
    );
}

export default registration;