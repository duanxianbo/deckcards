import React from 'react';
import {connect} from 'react-redux';
import {shuffle, dealOneCard} from '../actions';
import CardsWrapper from './CardsWrapper';

function CardsContainer(props) {
  return <CardsWrapper {...props}/>;
}

export default connect(
  state => state,
  (dispatch) => ({
    shuffleAction: () => dispatch(shuffle()),
    dealOneCardAction: () => dispatch(dealOneCard())
  }),
)(CardsContainer);
