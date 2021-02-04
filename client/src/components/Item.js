import { useState } from 'react';
import { Button, Checkbox } from 'semantic-ui-react';

const Item = ({ note, item }) => {
  // const [checked, setChecked] = useState(false);

  // useEffect(() => {
  //   setChecked(checked);
  //   return () => {
  //     cleanup;
  //   };
  // }, [input]);

  const handleRemoveItem = () => {
    note.removeItem(item.id);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        flexDirection: 'row',
        marginTop: '10px',
      }}
    >
      <Checkbox
        label={item.name}
        // onChange={() => setChecked(!checked)}
        // checked={checked}
        style={{
          marginRight: '10px',
        }}
      />
      <Button basic circular compact size='mini' onClick={handleRemoveItem}>
        <div style={{ color: 'red' }}>X</div>
      </Button>
    </div>
  );
};

export default Item;
