import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'

export const AddNote = (props) => {

    const context = useContext(NoteContext)
    const { addNote } = context
    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag)
        setNote({ title: "", description: "", tag: "" })
        props.showAlert("Added Successfully", "success")
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div className='container my-3 bg-dark text-white rounded p-5'>
            <h2 className='pb-2 mb-4 border-bottom'>Add a Note</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label fs-5">Title</label>
                    <input type="text" className="form-control" id="title" name='title' value={note.title} aria-describedby="titleHelp" onChange={onChange} minLength={5} required />
                    <div id="titleHelp" className="fw-lighter">Title should be atleast 6 characters</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label fs-5">Description</label>
                    <textarea type="text" className="form-control" id="description" name='description' value={note.description} aria-describedby="descriptionHelp" onChange={onChange} minLength={5} required ></textarea>
                    <div id="descriptionHelp" className="fw-lighter">Description should be atleast 6 characters</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label fs-5">Tag(optional)</label>
                    <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange} />
                </div>
                <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}
