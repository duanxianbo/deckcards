import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function Cards({cards}) {
  return (
    cards && cards.length ? cards.map(({id, ...others}) => (
      <Card key={id} {...others}/>
    )) : 'No more cards here'
  );
}

Cards.propTypes = {
  cards: PropTypes.array
};


export default (Cards);
