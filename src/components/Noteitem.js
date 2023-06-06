import React from 'react'
import { useContext } from 'react';
import NoteContext from '../context/notes/notecontext'
const Noteitem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNotes } = context;
    const { notes, updateNote } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{notes.title}</h5>
                    <p className="card-text">{notes.discription}</p>
                    <i className="fa-solid fa-trash mx-2" onClick={() => { deleteNotes(notes._id)}} ></i>
                    <i className="fa-solid fa-pen mx-2" onClick={() => { updateNote(notes)}}></i>

                </div>
            </div>
        </div>
    )
}

export default Noteitem