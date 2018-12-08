import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Typography from '@material-ui/core/Typography';

function Cards({cards}) {
  return (
    cards && cards.length ? cards.map(({id, ...others}) => (
      <Card key={id} {...others}/>
    )) :
      (<Typography variant="subtitle2" color="inherit" noWrap>
        No more cards here
      </Typography>)
  );
}

Cards.propTypes = {
  cards: PropTypes.array
};


export default (Cards);
