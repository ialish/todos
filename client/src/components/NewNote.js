import { useState, useRef } from 'react';
import { Input, Button } from 'semantic-ui-react';
import { useStore } from '../store/StoreContext';

const formStyle = { margin: '10px' };
const inputStyle = { padding: '5px' };

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
      <form style={formStyle} onSubmit={handleAdd}>
        <Input
          style={inputStyle}
          type='text'
          placeholder='Create a note...'
          value={noteName}
          onChange={handleChange}
          ref={inputRef}
        />
        <Button type='submit' color='violet'>
          Add
        </Button>
      </form>
    </>
  );
};

export default NewNote;
