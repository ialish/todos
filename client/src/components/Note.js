import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Card, Button } from 'semantic-ui-react';
import { useStore } from '../store/StoreContext';
import NewItem from './NewItem';
import Items from './items';

const cardStyle = { margin: 10 };
const cardHeaderStyle = { marginTop: 1 };

const Note = observer(({ note }) => {
  const store = useStore();
  const [isShown, setIsShown] = useState(false);

  const handleRemoveNote = () => {
    store.removeNote(note.id);
  };

  return (
    <>
      <Card style={cardStyle}>
        <Card.Content
          onMouseOver={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {isShown && (
            <Button
              basic
              compact
              size='mini'
              color='red'
              floated='right'
              onClick={handleRemoveNote}
            >
              X
            </Button>
          )}
          <Card.Header style={cardHeaderStyle}>{note.name}</Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Meta>
            <NewItem note={note} />
          </Card.Meta>
          <Card.Description>
            <Items note={note} />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Card.Meta>Created on: {note.created}</Card.Meta>
          <Card.Meta>Last update: {note.lastUpdate}</Card.Meta>
        </Card.Content>
      </Card>
    </>
  );
});

export default Note;
