import { Card, Button } from 'semantic-ui-react';
import { useStore } from '../store/StoreContext';
import NewItem from '../components/NewItem';
import ItemsList from '../components/ItemsList';

const Note = ({ note }) => {
  const store = useStore();

  const handleRemoveNote = () => {
    store.removeNote(note.id);
  };

  return (
    <>
      <Card style={{ margin: '10px' }}>
        <Card.Content>
          <Button
            basic
            compact
            size='mini'
            floated='right'
            onClick={handleRemoveNote}
          >
            X
          </Button>
          <Card.Header style={{ marginTop: '1px' }}>{note.name}</Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Meta>
            <NewItem note={note} />
          </Card.Meta>
          <Card.Description>
            <ItemsList note={note} />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Card.Meta>Created on: {note.created}</Card.Meta>
          <Card.Meta>Last update: {note.lastUpdate}</Card.Meta>
        </Card.Content>
      </Card>
    </>
  );
};

export default Note;
