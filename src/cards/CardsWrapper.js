import React from 'react';
import PropTypes from 'prop-types';
import CardsFolder from './CardsFolder';
import injectSheet from 'react-jss';

const styles = {
  container: {
    display: 'flex'
  },
  cardsFolder: {
    display: 'flex',
    flexBasis: '50%',
    flexShrink: 0,
    flexWrap: 'wrap'
  }
};

function CardsWrapper({cardsDeck, cardsDealed, dealOneCardAction, shuffleAction, classes}) {
  return (
    <div className={classes.container}>
      <div className={classes.cardsFolder}>
        <CardsFolder
          cards={cardsDeck}
          cardAction={shuffleAction}
          actionLabel={'shuffle'}
          id="cardsDeck"/>
      </div>
      <div className={classes.cardsFolder}>
        <CardsFolder
          cards={cardsDealed}
          cardAction={dealOneCardAction}
          actionLabel={'dealOneCardAction'}
          id="cardsDealed"/>
      </div>
    </div>
  );
}


CardsWrapper.propTypes = {
  cardsDeck: PropTypes.array,
  cardsDealed: PropTypes.array,
  dealOneCardAction: PropTypes.func,
  shuffleAction: PropTypes.func,
  classes: PropTypes.object
};

export default injectSheet(styles)(CardsWrapper);
