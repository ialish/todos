import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import axios from 'axios';
import { useStore } from '../store/StoreContext';
import NewNote from '../components/NewNote';
import Notes from '../components/Notes';

const Homepage = observer(() => {
  const store = useStore();

  useEffect(() => {
    if (store.user.accessToken) {
      (async () => {
        const result = await axios.get(`http://localhost:8000/authenticate`, {
          headers: { authorization: `Bearer ${store.user.accessToken}` },
        });

        store.addUser({ username: result.data.username });
      })();
    }
  }, []);

  if (!store.user.accessToken) {
    return <Redirect to='/login' />;
  }

  return (
    <>
      <div style={{ textAlign: 'center', margin: 20 }}>
        <h1>Hi, {store.user.username}!</h1>
        <NewNote />
      </div>
      <Notes />
    </>
  );
});

export default Homepage;
