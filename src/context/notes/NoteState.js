import NoteContext from "./notecontext";
import { useState } from "react";
import axios from 'axios';
const NoteState = (props) => {
    const host ="http://localhost:7000"

    const notesinitial = [

        {
            "_id": "647066b89c6e37f988d88338",
            "user": "646f43f6eb5fd7d96a04d0c9",
            "title": "malikahtesham",
            "discription": "good notes",
            "tag": "good",
            "date": "2023-05-26T07:58:48.451Z",
            "__v": 0
        },
        {
            "_id": "647066e84c9b071e93e6427e",
            "user": "646f43f6eb5fd7d96a04d0c9",
            "title": "malikahtesham",
            "discription": "good notes",
            "tag": "good",
            "date": "2023-05-26T07:59:36.763Z",
            "__v": 0
        },
        {
            "_id": "647066ea4c9b071e93e64280",
            "user": "646f43f6eb5fd7d96a04d0c9",
            "title": "malikahtesham",
            "discription": "good notes",
            "tag": "good",
            "date": "2023-05-26T07:59:38.536Z",
            "__v": 0
        },
        {
            "_id": "6470684accd1b62523410034",
            "user": "646f43f6eb5fd7d96a04d0c9",
            "title": "malikahtesham",
            "discription": "good notes",
            "tag": "good",
            "date": "2023-05-26T08:05:30.316Z",
            "__v": 0
        },
        {
            "_id": "64706941279d322b291ff46c",
            "user": "646f43f6eb5fd7d96a04d0c9",
            "title": "malikahtesham",
            "discription": "good notes",
            "tag": "good",
            "date": "2023-05-26T08:09:37.306Z",
            "__v": 0
        },
        {
            "_id": "6470c676279d322b291ff46f",
            "user": "646f43f6eb5fd7d96a04d0c9",
            "title": "book",
            "discription": "book ha bhai",
            "tag": "booke",
            "date": "2023-05-26T14:47:18.768Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesinitial)
    //fetch all the notes
    
    const fetchNotes = async () => {
        try {
            const response = await axios.get(`${host}/api/notesrouter/fetchallnotes`, {
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2ZjQzZjZlYjVmZDdkOTZhMDRkMGM5In0sImlhdCI6MTY4NTAxNDU5Nn0.t-6pdCeu47htQbtWOpnJvKEHWuGxRROuxlSqF1ylHQI"
                }
            });
    
            const json = response.data;
            console.log(json);
            setNotes(json);
        } catch (error) {
            console.error(error);
        }
    };
    //add note acalling api
    const addNotes =async (notess) => {
        // const response = await fetch(`${host}/api/notesrouter/addnotes`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2ZjQzZjZlYjVmZDdkOTZhMDRkMGM5In0sImlhdCI6MTY4NTAxNDU5Nn0.t-6pdCeu47htQbtWOpnJvKEHWuGxRROuxlSqF1ylHQI"
        //     },

        //     body: JSON.stringify({title,discription,tag}),
        // });
        // const json =await response.json()


        // const note = {
        //     "_id": "6470c676279d322b291ff46f",
        //     "user": "646f43f6eb5fd7d96a04d0c9",
        //     "title": "book added",
        //     "discription": "book ha bhai add",
        //     "tag": "booke",
        //     "date": "2023-05-26T14:47:18.768Z",
        //     "__v": 0
        // }
        // setNotes(notes.push(notess))
        let prevNotes = [...notes];
        prevNotes.push(notess)
        setNotes(prevNotes);

        // console.log(notess);
    }

    

    const deleteNotes = async (id) => {
        try {
            const response = await axios.delete(`${host}/api/notesrouter/deletenotes/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                }
            });
    
            const json = response.data;
            console.log(json);
    
            console.log("Deleting node id " + id);
            const newNotes = notes.filter((note) => note._id !== id);
            setNotes(newNotes);
        } catch (error) {
            console.error(error);
        }
    };
    
    const editNotes = async (id, title, description, tag) => {
        try {
          const response = await axios.put(`${host}/api/notesrouter/updatenotes/${id}`, {
            title,
            description,
            tag
          }, {
            headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
            }
          });
      
          const json = response.data;
          console.log(json);
      
          let newNotes = JSON.parse(JSON.stringify(notes));
      
          for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
              newNotes[index].title = title;
              newNotes[index].description = description;
              newNotes[index].tag = tag;
              break;
            }
          }
      
          setNotes(newNotes);
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <NoteContext.Provider value={{ notes, addNotes, deleteNotes, editNotes,fetchNotes }}>

            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;