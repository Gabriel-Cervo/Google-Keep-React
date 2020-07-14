import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({title: "", content: ""})

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setNote((prev) => {
      return (
        {...prev, [name]: value}
      )
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({title: "", content: ""});
  }
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
