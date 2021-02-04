import { observer } from 'mobx-react-lite';
import { useStore } from '../store/StoreContext';
import Note from './Note';

const Notes = observer(() => {
  const store = useStore();

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'baseline',
      }}
    >
      {store.notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
});

export default Notes;
