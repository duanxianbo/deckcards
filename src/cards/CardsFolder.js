import React from 'react';
import PropTypes from 'prop-types';
import Cards from './Cards';
import injectSheet from 'react-jss';
import Button from '@material-ui/core/Button';

const styles = {
  cardsFolderContaienr: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  cardsList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: ({cards}) => cards.length === 0 && 'center',
    alignItems: ({cards}) => cards.length === 0 && 'center'
  },
  actionButton: {
    height: 36,
    width: 250
  },
  actionButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

function CardsFolder({cards, cardAction, actionLabel, classes}) {
  return (
    <div className={classes.cardsFolderContaienr}>
      <div className={classes.actionButtonContainer}>
        <Button className={classes.actionButton} onClick={cardAction}>{actionLabel}</Button>
      </div>
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
