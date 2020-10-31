import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
  return(
    <Route {...restProps} 
      render= {() => {
        if(!user) {
          return children
        }

        if(user) {
          return (<Redirect 
            to={{
              pathname: loggedInPath
            }}
          />)
        }
        return null;
      }
      } 
    />   
  );
}
IsUserRedirect.propTypes = {
  children: PropTypes.node,
  user: PropTypes.node,
  loggedInPath: PropTypes.node
}

export function ProtectedRoute({ user, children, ...restProps }) {
  return (
    <Route 
      {...restProps}
      render = {({ location}) => {
        if(user) {
          return children;
        }
        if(!user) {
          return (
            <Redirect 
              to={{
                pathname: '/signin',
                state: { from: location}
              }}
            />
          )
        }

        return null;
      }}
    />     
  )
}
ProtectedRoute.propTypes = {
  children: PropTypes.node,
  user: PropTypes.node
}