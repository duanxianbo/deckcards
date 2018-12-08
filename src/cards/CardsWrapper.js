import React from 'react';
import PropTypes from 'prop-types';
import CardsFolder from './CardsFolder';
import Grid from '@material-ui/core/Grid';

function CardsWrapper({cardsDeck, cardsDealed, dealOneCardAction, shuffleAction}) {
  return (
    <Grid item container spacing={32}>
      <Grid
        item container
        xs={12}
        lg={6}>
        <CardsFolder
          cards={cardsDeck}
          cardAction={shuffleAction}
          actionLabel={'shuffle'}
          id="cardsDeck"/>
      </Grid>
      <Grid
        item
        container
        xs={12}
        lg={6}>
        <CardsFolder
          cards={cardsDealed}
          cardAction={dealOneCardAction}
          actionLabel={'deal one card'}
          id="cardsDealed"/>
      </Grid>
    </Grid>
  );
}


CardsWrapper.propTypes = {
  cardsDeck: PropTypes.array,
  cardsDealed: PropTypes.array,
  dealOneCardAction: PropTypes.func,
  shuffleAction: PropTypes.func,
  classes: PropTypes.object
};

export default (CardsWrapper);
