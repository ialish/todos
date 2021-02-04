import NewNote from '../components/NewNote';
import Notes from '../components/Notes';

const Homepage = () => {
  return (
    <>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h1>Hi, Eyal!</h1>
        <NewNote />
      </div>
      <Notes />
    </>
  );
};

export default Homepage;
