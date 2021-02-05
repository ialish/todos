import { useState } from 'react';
import { Button, Checkbox } from 'semantic-ui-react';

const checkboxStyle = {
  paddingTop: '5px',
  paddingBottom: '5px',
  marginRight: '10px',
};

const Item = ({ note, item }) => {
  const [checked, setChecked] = useState(item.checked);
  const [isShown, setIsShown] = useState(false);

  const handleRemoveItem = () => {
    note.removeItem(item.id);
  };

  const handleCheckChange = () => {
    setChecked((checked) => !checked);
    item.setChecked(checked);
    note.setLastUpdate();
  };

  return (
    <div
      onMouseOver={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <Checkbox
        style={checkboxStyle}
        label={item.name}
        checked={checked}
        onChange={handleCheckChange}
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
