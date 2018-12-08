import React from 'react';
import PropTypes from 'prop-types';
import {CardsContainer} from './cards';
import injectSheet from 'react-jss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  }
};


function App({classes}) {
  return (
    <div className={classes.container}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Deck of cards
          </Typography>
        </Toolbar>
      </AppBar>
      <CardsContainer/>
    </div>
  );
}


App.propTypes = {
  classes: PropTypes.object
};

export default injectSheet(styles)(App);
