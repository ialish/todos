import { Link } from 'react-router-dom';

const errorPageStyle = { textAlign: 'center', margin: 20 };

const ErrorPage = () => {
  return (
    <div style={errorPageStyle}>
      <h1>Wrong Page</h1>
      <Link to='/'>Return Home</Link>
    </div>
  );
};

export default ErrorPage;
