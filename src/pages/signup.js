import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase'
import { FooterContainer } from '../containers/footer';
import HeaderContainer  from '../containers/header';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState();
  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const isInvalid = password === '' || emailAddress === '' || firstName === '';

  console.log(isInvalid);

  const handleSignup = e => {
    e.preventDefault();
    setIsLoading(true);

    // firebase 
    firebase 
    .auth()
    .createUserWithEmailAndPassword(emailAddress, password)
    .then(result =>
      result.user.updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1
        })
        .then(() => {
          history.push(ROUTES.BROWSE)
        })
    )
    .catch(error => {
      setFirstName('');
      setEmailAddress('');
      setPassword('');
      setError(error.message);
      setIsLoading(false);
    })

  }

  return (
    <>
    <HeaderContainer>
      <Form>
        <Form.Title></Form.Title>
        {error && <Form.Error>{error}</Form.Error>}

        <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input 
              placeholder="First Name"
              type = "text"
              value={firstName}
              onChange={({target}) => setFirstName(target.value)}
            />
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
            <Form.Submit data-testid="sign-up" disabled={!isInvalid} type="submit" isLoading={isLoading}>{isLoading ? <Form.Loading /> : 'Sign Up'}</Form.Submit>
          </Form.Base>

        <Form.Text>
          New To Netflix? <Form.Link to='/signin'>Sign in now.</Form.Link>
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
