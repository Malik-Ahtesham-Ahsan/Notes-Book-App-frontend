import React from 'react'
import { useContext,useEffect,useRef ,useState} from 'react'
import NoteContext from '../context/notes/notecontext'
import Noteitem from './Noteitem';
import Addnotes from './Addnotes';
import { useNavigate } from 'react-router-dom';
const Notes = (props) => {
  const navigate =useNavigate();
    const context=useContext(NoteContext);
  const {notes,fetchNotes ,editNotes}=context;
  const [note, setNotes] = useState({ id:"" ,etitle: "", ediscription: "", etag: "" })



  useEffect(() => {
    if(localStorage.getItem('token')){
      fetchNotes()

    }
    else
    {
      navigate("/login")
    }
  
  }, [])
  const updateNote =(currentNote)=>
  {
    ref.current.click();
    setNotes({id:currentNote._id,etitle:currentNote.title,ediscription:currentNote.discription,etag:currentNote.tag})
  }


  const ref = useRef(null)
  const refClose = useRef(null)


  const handleClick = (e) => {
    console.log("updating the notes",note)
    editNotes(note.id,note.etitle,note.ediscription,note.etag)
    refClose.current.click();

    
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
    <>
    <Addnotes/>
    


    <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={onChange}  minlength={5} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="discription" className="form-label">Discription</label>
                <input type="text" className="form-control" id="ediscription" name="ediscription" value={note.ediscription} minlength={5} required onChange={onChange}  />
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} minlength={5} required />
            </div>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button  onClick={handleClick} type="button" className="btn btn-primary">Updatde changes</button>
      </div>
    </div>
  </div>
</div>

    <div className='row my-3'>
        <h2>Your Notes</h2>
         {notes.map((notes)=>{
      return <Noteitem notes={notes} key={notes._id} updateNote ={updateNote}/>;
    })}
    </div>
    </>
  )
}

export default Notes