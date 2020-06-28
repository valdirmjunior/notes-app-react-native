export default class SearchNotesService {

    search(notes, expression) {
        if (!expression) return notes;
        const byTitleOrNote = this._byTitleOrNote(expression);
        return notes.filter(byTitleOrNote);
    }

    _byTitleOrNote(expression) {
        return (current) => 
                current.title.indexOf(expression) !== -1 ||
                current.note.indexOf(expression) !== -1;
    }
}