import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from '../containers/footer';
import HeaderContainer  from '../containers/header';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isInvalid = password === '' || emailAddress === '';
  console.log(isInvalid);

  const handleSignin = e => {
    e.preventDefault();
    setIsLoading(true);
    // firebase auth
    firebase 
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then (() => {
        // push to browse page
        history.push(ROUTES.BROWSE);
      })
      .catch(error => {
        setIsLoading(false);
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>
            Signin
          </Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input placeholder="Email Address"
              type = "email"
              value = {emailAddress}
              onChange ={({ target }) => setEmailAddress(target.value)} 
            />
            <Form.Input placeholder="Password"
              type = "password"
              value = {password}
              autoComplete = "off"
              onChange ={({ target }) => setPassword(target.value)} 
            />
            <Form.Submit data-testid="sign-in" disabled={isInvalid} isLoading={isLoading} type="submit">{isLoading ? <Form.Loading /> : 'Sign In' }</Form.Submit>
          </Form.Base>

          <Form.Text>
            New To Netflix? <Form.Link to='/signup'>Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            {`This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.`}
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}