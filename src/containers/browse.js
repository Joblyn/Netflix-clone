import React, { useContext, useState, useEffect } from 'react';
import { SelectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';
import { Loading } from '../components';

export function BrowseContainer(
  // {  // slides }
  ) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  

  useEffect(() => {
    console.log('profile Name', profile.displayName);
    // if(profile.displayName) {
      setTimeout(() => {
        setLoading(false);
      }, 5000);      
    // }
  }, [profile.displayName]);

  return profile.displayName ? (
      loading ? <Loading src={user.photoURL} />  : null     
    ) : (
      <SelectProfileContainer user={user} setProfile={setProfile} />
    )
}