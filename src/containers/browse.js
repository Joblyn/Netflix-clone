import React, { useContext, useState, useEffect } from 'react';
import { SelectProfileContainer } from './profiles';
import PropTypes from 'prop-types';
import { FirebaseContext } from '../context/firebase';
import { Loading } from '../components';

export function BrowseContainer() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(()=> {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [profile.displayName]);

  return (
    profile.displayName ? (
      loading ? <Loading src={user.photoURL} /> : null
    ) : 
    <SelectProfileContainer user={user} setProfile={setProfile} />
  )
}
BrowseContainer.propTypes = {
  slides: PropTypes.node
}
