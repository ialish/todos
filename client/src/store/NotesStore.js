import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

const NotesStore = () => ({
  notes: [],
  addNote(noteName) {
    this.notes.push({
      id: uuidv4(),
      name: noteName,
      itemsList: [],
      addItem(item) {
        this.itemsList.push({
          id: uuidv4(),
          name: item,
          checked: false,
        });
      },
      removeItem(id) {
        this.itemsList = this.itemsList.filter((item) => item.id !== id);
      },
      created: dayjs().format('DD/MM/YYYY'),
      // lastUpdate: note.updateDate,
    });
  },
  removeNote(id) {
    this.notes = this.notes.filter((note) => note.id !== id);
  },
});

export default NotesStore;
