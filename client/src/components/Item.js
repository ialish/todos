import { useState, useEffect } from 'react';
import { Button, Checkbox } from 'semantic-ui-react';

const Item = ({ note, item }) => {
  const [checked, setChecked] = useState(item.checked);

  useEffect(() => {
    item.setChecked(checked);
    note.setLastUpdate();
  }, [checked]);

  const handleRemoveItem = () => {
    note.removeItem(item.id);
  };

  const handleCheckChange = () => {
    setChecked((checked) => !checked);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '10px',
      }}
    >
      <Button basic compact size='mini' onClick={handleRemoveItem}>
        x
      </Button>
      <Checkbox
        label={item.name}
        onChange={handleCheckChange}
        checked={checked}
        style={{
          marginRight: '10px',
        }}
      />
    </div>
  );
};

export default Item;
