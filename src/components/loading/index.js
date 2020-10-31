import React from 'react';
import PropTypes from 'prop-types';
import{ Spinner, LockBody, ReleaseBody, Picture } from './styles/loading';

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`}/>
    </Spinner>
  )
}
Loading.propTypes = {
  src: PropTypes.node
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />
}
