import { useState, useRef } from 'react';
import { Input, Button } from 'semantic-ui-react';
import { useStore } from '../store/StoreContext';

const inputStyle = { width: '78%' };

const NewItem = ({ note }) => {
  const store = useStore();
  const [item, setItem] = useState('');
  const inputRef = useRef();

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    inputRef.current.focus();

    if (item.length) {
      store.addItem(note.id, item);
      store.setLastUpdate(note.id);
      setItem('');
    }
  };

  return (
    <>
      <form onSubmit={handleAdd}>
        <Input
          type='text'
          placeholder='Add an item...'
          value={item}
          onChange={handleChange}
          ref={inputRef}
          size='mini'
          style={inputStyle}
        />
        <Button type='submit' basic color='orange' size='mini'>
          Add
        </Button>
      </form>
    </>
  );
};

export default NewItem;
