import { NewTxtNote } from "./NewTxtNote.jsx"
import { NewImgNote } from "./NewImgNote.jsx"
import { NewTodosNote } from "./NewTodosNote.jsx"

import { notesService } from "../services/note.service.js"

export class NewNoteModal extends React.Component {

    state = {
        newNoteType: 'note-txt'

    }

    onSetNoteType = ({ target }) => {
        const value = target.value
        this.setState({ newNoteType: value })
    }

    onSaveNote = (ev, note) => {
        ev.preventDefault()
        notesService.saveNote(note).then(
            this.props.loadNotes(),
            this.props.toggleNewNoteModal()
        )

    }


    render() {
        const { newNoteType } = this.state
        return (
            <section className="new-note-modal">
                <h2>Add Your Note</h2>
                <section className="type-choosing">
                    <select name="type" value={newNoteType} onChange={this.onSetNoteType}>
                        <option value="note-txt">Text Note</option>
                        <option value="note-img">Image Note</option>
                        <option value="note-todos">Todos Note</option>
                    </select>
                </section>
                <section className="modal-by-type">
                    {newNoteType === 'note-txt' && <NewTxtNote type={newNoteType} onSaveNote={this.onSaveNote} />}
                    {newNoteType === 'note-img' && <NewImgNote type={newNoteType} onSaveNote={this.onSaveNote} />}
                    {newNoteType === 'note-todos' && <NewTodosNote type={newNoteType} onSaveNote={this.onSaveNote} />}
                </section>
                <button onClick={this.props.toggleNewNoteModal}>x</button>
            </section>
        )
    }
}