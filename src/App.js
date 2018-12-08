import React from 'react';
import PropTypes from 'prop-types';
import {CardsContainer} from './cards';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <Grid direction={'column'} spacing={16} container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Deck of cards
          </Typography>
        </Toolbar>
      </AppBar>
      <CardsContainer/>
    </Grid>
  );
}


App.propTypes = {
  classes: PropTypes.object
};

export default (App);
