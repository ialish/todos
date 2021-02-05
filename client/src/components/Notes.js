import { observer } from 'mobx-react-lite';
import { useStore } from '../store/StoreContext';
import Note from './Note';

const notesStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'baseline',
};

const Notes = observer(() => {
  const store = useStore();

  return (
    <div style={notesStyle}>
      {store.notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
});

export default Notes;
