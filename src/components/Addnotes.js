import React from 'react'
import { useContext, useState } from 'react'
import NoteContext from '../context/notes/notecontext'

const Addnotes = () => {

    const context = useContext(NoteContext);
    const {addNotes} = context;
    const [note, setNotes] = useState({ title: "", discription: "", tag: "" })


    const handleClick = (e) => {
        e.preventDefault();
        addNotes(note);
        setNotes({title: "", discription: "", tag: "" })
    }

    const onChange = (e) => {
    // setNotes({ ...notes, [e.taraget.name]: e.taraget.value })
    setNotes((prevValues) => ({
        ...prevValues,
        [e.target.name]: e.target.value,}));
//   console.log(note.discription);
//   console.log(note.title);

    }


    return (
        <div> <h1>Add Notes</h1>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" value={note.title}  onChange={onChange} minlength={5} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="discription" className="form-label">Discription</label>
                <input type="text" className="form-control" id="discription" name="discription" value={note.discription} onChange={onChange}  minlength={5} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} value={note.tag} minlength={5} required />
            </div>
            <button  type="submit" className='btn-btn-primary' onClick={handleClick}>Submit</button>

        </div>
    )
}

export default Addnotes