import { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Button } from 'semantic-ui-react';
import axios from 'axios';
import { useStore } from '../store/StoreContext';
import NewNote from '../components/NewNote';
import Notes from '../components/Notes';

const logoutButtonStyle = { marginRight: 20 };
const divStyle = { textAlign: 'center', margin: 20 };
const saveNotesButtonStyle = { marginTop: 20 };

const Homepage = observer(() => {
  const store = useStore();
  const history = useHistory();

  useEffect(() => {
    if (store.user.accessToken) {
      (async () => {
        const result = await axios.get(`http://localhost:8000/authenticate`, {
          headers: { authorization: `Bearer ${store.user.accessToken}` },
        });

        store.setUser({ username: result.data.username });
        store.loadNotes();
      })();
    }
  }, []);

  if (!store.user.accessToken) {
    return <Redirect to='/login' />;
  }

  const handleLogout = () => {
    store.setUser({ username: '', accessToken: '' });
    history.push('/login');
  };

  return (
    <>
      <Button
        floated='right'
        basic
        color='black'
        compact
        size='mini'
        onClick={handleLogout}
        style={logoutButtonStyle}
      >
        Log out
      </Button>
      <div style={divStyle}>
        <h1>Hi, {store.user.username}!</h1>
        <NewNote />
        <Button style={saveNotesButtonStyle} onClick={() => store.saveNotes()}>
          Save Notes
        </Button>
      </div>
      <Notes />
    </>
  );
});

export default Homepage;
