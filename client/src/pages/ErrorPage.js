import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div style={{ textAlign: 'center', margin: 20 }}>
      <h1>Wrong Page</h1>
      <Link to='/'>Return Home</Link>
    </div>
  );
};

export default ErrorPage;
