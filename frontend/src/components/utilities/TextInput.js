import React from 'react';
import '../../containers/App.css'

const textInput = (props) => (
    <div className="textInput">
        <label>
            {props.label}
        </label>
        <input type={props.type} onChange={props.onChange} key={props.name} />
    </div>
);

export default textInput;