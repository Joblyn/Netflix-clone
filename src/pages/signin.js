import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase'
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

  const isInvalid = password === '' || emailAddress === '';
  const handleSignin = e => {
    e.preventDefault();

    // firebase auth
    firebase 
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then (() => {
        // push to browse page
        history.push(ROUTES.BROWSE);
      })
      .catch(error => {
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
          {error && <Form.Error>{error}</Form.Error>}

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
            <Form.Submit disabled={isInvalid} type="submit">Sign In</Form.Submit>
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