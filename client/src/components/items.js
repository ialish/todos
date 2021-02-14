import { observer } from 'mobx-react-lite';
import Item from './Item';

const itemsStyle = { marginBottom: -7 };

const Items = observer(({ note }) => {
  return (
    <div style={itemsStyle}>
      {note.items.map((item) => (
        <Item key={item.id} note={note} item={item} />
      ))}
    </div>
  );
});

export default Items;
