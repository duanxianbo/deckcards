import React from 'react';
import PropTypes from 'prop-types';
import Cards from './Cards';
import injectSheet from 'react-jss';

const styles = {
  cardsFolderContaienr: {
    display: 'flex'
  },
  cardsList: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};

function CardsFolder({cards, cardAction, actionLabel, classes}) {
  return (
    <div className={classes.cardsFolderContaienr}>
      <button onClick={cardAction}>{actionLabel}</button>
      <div className={classes.cardsList}>
        <Cards cards={cards}/>
      </div>
    </div>
  );
}

CardsFolder.propTypes = {
  cards: PropTypes.array,
  cardAction: PropTypes.func,
  actionLabel: PropTypes.string,
  classes: PropTypes.object
};


export default injectSheet(styles)(CardsFolder);
