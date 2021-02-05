import { observer } from 'mobx-react-lite';
import Item from './Item';

const itemsListStyle = { marginBottom: '-7px' };

const ItemsList = observer(({ note }) => {
  return (
    <div style={itemsListStyle}>
      {note.itemsList.map((item) => (
        <Item key={item.id} note={note} item={item} />
      ))}
    </div>
  );
});

export default ItemsList;
