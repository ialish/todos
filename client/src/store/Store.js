import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import axios from 'axios';

const Store = () => ({
  user: {},
  addUser(user) {
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
      items: [],
      addItem(item) {
        this.items.push({
          id: uuidv4(),
          name: item,
          checked: false,
          setChecked(checked) {
            this.checked = checked;
          },
        });
      },
      removeItem(id) {
        this.items = this.items.filter((item) => item.id !== id);
      },
      created: dayjs().format('DD/MM/YYYY'),
      lastUpdate: '',
      setLastUpdate() {
        this.lastUpdate = dayjs().format('DD/MM/YYYY');
      },
    });
  },
  removeNote(id) {
    this.notes = this.notes.filter((note) => note.id !== id);
  },
});

export default Store;
