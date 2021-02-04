import { useState, useRef } from 'react';
import { Input, Button } from 'semantic-ui-react';
import { useStore } from '../store/StoreContext';

const NewNote = () => {
  const [noteName, setNoteName] = useState('');
  const inputRef = useRef();
  const store = useStore();

  const handleChange = (e) => {
    setNoteName(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    inputRef.current.focus();

    if (noteName.length) {
      store.addNote(noteName);
      setNoteName('');
    }
  };

  return (
    <>
      <form onSubmit={handleAdd} style={{ margin: '10px' }}>
        <Input
          type='text'
          placeholder='Create a new note...'
          value={noteName}
          onChange={handleChange}
          ref={inputRef}
          style={{ padding: '5px' }}
        />
        <Button type='submit' color='violet'>
          Add
        </Button>
      </form>
    </>
  );
};

export default NewNote;
