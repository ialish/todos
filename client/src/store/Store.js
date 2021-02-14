import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import axios from 'axios';

const Store = () => ({
  user: {},
  setUser(user) {
    this.user = { ...this.user, ...user };
  },
  notes: [],
  async saveNotes() {
    await axios.post(`http://localhost:8000/user`, {
      username: this.user.username,
      notes: this.notes,
    });
  },
  async loadNotes() {
    const notes = await axios.get(
      `http://localhost:8000/user/${this.user.username}`
    );
    this.notes = notes.data;
  },
  addNote(noteName) {
    this.notes.push({
      id: uuidv4(),
      name: noteName,
      created: dayjs().format('DD/MM/YYYY'),
      lastUpdate: '',
      items: [],
    });
  },
  addItem(noteId, item) {
    const noteIndex = this.notes.findIndex((note) => note.id === noteId);
    this.notes[noteIndex].items.push({
      id: uuidv4(),
      name: item,
      checked: false,
    });
  },
  setChecked(noteId, itemId, checked) {
    const noteIndex = this.notes.findIndex((note) => note.id === noteId);
    const itemIndex = this.notes[noteIndex].items.findIndex(
      (item) => item.id === itemId
    );
    this.notes[noteIndex].items[itemIndex].checked = checked;
  },
  removeItem(noteId, itemId) {
    const noteIndex = this.notes.findIndex((note) => note.id === noteId);
    this.notes[noteIndex].items = this.notes[noteIndex].items.filter(
      (item) => item.id !== itemId
    );
  },
  setLastUpdate(noteId) {
    const noteIndex = this.notes.findIndex((note) => note.id === noteId);
    this.notes[noteIndex].lastUpdate = dayjs().format('DD/MM/YYYY');
  },
  removeNote(noteId) {
    this.notes = this.notes.filter((note) => note.id !== noteId);
  },
});

export default Store;
