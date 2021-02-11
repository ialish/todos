import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';
import axios from 'axios';
import { useStore } from '../store/StoreContext';

const gridStyle = { height: '100vh' };
const gridColumnStyle = { maxWidth: 450 };
const signUpStyle = {
  padding: 7,
  marginLeft: 5,
  marginTop: -5,
  marginBottom: -5,
};

const LoginPage = observer(() => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [action, setAction] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const store = useStore();

  const handleChange = (event) => {
    const { name, value } = event.target;
    name === 'username' ? setUsername(value) : setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await axios.post(`http://localhost:8000/${action}`, {
      username,
      password,
    });
    const { error, accessToken } = result.data;

    if (error) {
      setErrorMsg(error);
    } else {
      setErrorMsg('');
      store.addUser({ accessToken });
    }
  };

  return (
    <>
      {store.user.accessToken && <Redirect to='/' />}
      <Grid textAlign='center' verticalAlign='middle' style={gridStyle}>
        <Grid.Column style={gridColumnStyle}>
          <Header as='h2' color='violet' textAlign='center'>
            Log-in to your account
          </Header>
          <Form size='large' onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Username'
                name='username'
                value={username}
                onChange={handleChange}
                required
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                required
              />
              <Button
                type='submit'
                color='violet'
                onClick={() => setAction('login')}
                fluid
                size='large'
              >
                Log In
              </Button>
              <Message>
                New user?{' '}
                <Button
                  type='submit'
                  onClick={() => setAction('signup')}
                  basic
                  color='violet'
                  style={signUpStyle}
                >
                  Sign Up
                </Button>
              </Message>
            </Segment>
          </Form>
          {errorMsg && <Message error>{errorMsg}</Message>}
        </Grid.Column>
      </Grid>
    </>
  );
});

export default LoginPage;
