import React, { Fragment } from 'react';

const textInput = (props) => (
    <Fragment>
        <label>
            {props.label}
        </label>
        <input type={props.type} onChange={props.onChange} name={props.name} />
    </Fragment>
);

export default textInput;