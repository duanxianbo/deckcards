import React from 'react';
import PropTypes from 'prop-types';
import Cards from './Cards';
import injectSheet from 'react-jss';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = {
  cardsList: {
    justifyContent: ({cards}) => cards.length === 0 && 'center',
    alignItems: ({cards}) => cards.length === 0 && 'center'
  },
  actionButton: {
    height: 36,
    width: 250
  }
};

function CardsFolder({cards, cardAction, actionLabel, classes}) {
  return (
    <Grid
      item
      container
      spacing={32}
      direction={'column'}>
      <Grid item container justify={'center'}>
        <Button className={classes.actionButton} onClick={cardAction}>{actionLabel}</Button>
      </Grid>
      <Grid item container className={classes.cardsList}>
        <Cards cards={cards}/>
      </Grid>
    </Grid>
  );
}

CardsFolder.propTypes = {
  cards: PropTypes.array,
  cardAction: PropTypes.func,
  actionLabel: PropTypes.string,
  classes: PropTypes.object
};


export default injectSheet(styles)(CardsFolder);
