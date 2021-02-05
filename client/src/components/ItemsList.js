import { observer } from 'mobx-react-lite';
import Item from './Item';

const ItemsList = observer(({ note }) => {
  return (
    <div
      style={{
        marginBottom: '-7px',
      }}
    >
      {note?.itemsList.map((item) => (
        <Item key={item.id} note={note} item={item} />
      ))}
    </div>
  );
});

export default ItemsList;
