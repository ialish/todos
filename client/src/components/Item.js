import { useState } from 'react';
import { Button, Checkbox } from 'semantic-ui-react';
import { useStore } from '../store/StoreContext';

const checkboxStyle = {
  paddingTop: 5,
  paddingBottom: 5,
  marginRight: 10,
};

const Item = ({ note, item }) => {
  const store = useStore();
  const [checked, setChecked] = useState(item.checked);
  const [isShown, setIsShown] = useState(false);

  const handleRemoveItem = () => {
    store.removeItem(note.id, item.id);
  };

  const handleCheckChange = () => {
    setChecked((checked) => !checked);
    store.setChecked(note.id, item.id, !checked);
    store.setLastUpdate(note.id);
  };

  return (
    <div
      onMouseOver={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <Checkbox
        label={item.name}
        checked={checked}
        onChange={handleCheckChange}
        style={checkboxStyle}
      />
      {isShown && (
        <Button
          basic
          compact
          size='mini'
          color='red'
          onClick={handleRemoveItem}
        >
          x
        </Button>
      )}
    </div>
  );
};

export default Item;
