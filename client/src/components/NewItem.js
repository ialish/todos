import { useState, useRef } from 'react';
import { Input, Button } from 'semantic-ui-react';

const NewItem = ({ note }) => {
  const [item, setItem] = useState('');
  const inputRef = useRef();

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    inputRef.current.focus();

    if (item.length) {
      note.addItem(item);
      setItem('');
    }
  };

  return (
    <>
      <form onSubmit={handleAdd}>
        <Input
          type='text'
          placeholder='Add a new item...'
          value={item}
          onChange={handleChange}
          ref={inputRef}
          size='mini'
        />
        <Button type='submit' basic color='orange' size='mini'>
          Add
        </Button>
      </form>
    </>
  );
};

export default NewItem;
