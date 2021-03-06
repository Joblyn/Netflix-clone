import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';

export default function Browse() {
  //get series and films
  const { series } = useContent('series');
  const { films } = useContent('films');

  // create slides 
  const slides = selectionFilter({ series, films });

  return (
    <BrowseContainer slides={slides} />
  )
}