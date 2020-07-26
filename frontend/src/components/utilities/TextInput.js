import React from 'react';
import '../../containers/App.css'

const textInput = (props) => (
    <div className="text-input">
        <label>
            {props.label}
        </label>
        <input type={props.type} onChange={props.onChange} name={props.name} />
    </div>
);

export default textInput;