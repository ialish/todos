import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default App;
