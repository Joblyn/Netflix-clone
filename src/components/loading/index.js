import React from 'react';

import{ Spinner, LockBody, ReleaseBody, Picture } from './styles/loading';

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner id='spinner' {...restProps}>
      <LockBody />
      <Picture id="picture" src={`/images/users/${src}.png`} />
    </Spinner>
  )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />
}
