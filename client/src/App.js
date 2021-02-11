import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/login' component={LoginPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default App;
