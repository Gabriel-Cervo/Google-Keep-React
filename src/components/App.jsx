import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(item) {
        setNotes((prev) => {
            return [...prev, item];
        });
    }

    function deleteNote(id) {
        setNotes((prev) => prev.filter((item, index) => id !== index));
    }

    return (
        <div>
            <Header />
            <CreateArea 
                onAdd={addNote}
            />
            {notes.map((note, index) => ( 
            <Note 
                key={index}
                id={index}
                title={note.title}
                text={note.content}
                onDelete={deleteNote}
            />
            ))}
            <Footer />
        </div>
    );
}

export default App;