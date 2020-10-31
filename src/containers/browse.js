import React from 'react';
import { SelectProfileContainer } from './profiles';
import PropTypes from 'prop-types';

export function BrowseContainer({ slides }) {
  return (
    <SelectProfileContainer />
  )
}
BrowseContainer.propTypes = {
  slides: PropTypes.node
}
