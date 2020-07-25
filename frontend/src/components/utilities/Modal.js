import React from 'react';
import './modal.css';

const modal = (props) => {
    if (!props.show) {
        return null;
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default modal;