import React from 'react';

export default function Note(props) {
    function onDelete(event) {
        event.preventDefault();
        props.onDelete(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <button onClick={onDelete}>X</button>
        </div>
    );
}