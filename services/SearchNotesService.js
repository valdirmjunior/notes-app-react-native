export default class SearchNotesService {

    search(notes, expression) {
        if (!expression) return notes;
        const byTitle = this._byTitle(expression);
        return notes.filter(byTitle);
    }

    _byTitle(expression) {
        return (current) => current.title.toLowerCase().indexOf(expression.toLowerCase()) !== -1;
    }
}