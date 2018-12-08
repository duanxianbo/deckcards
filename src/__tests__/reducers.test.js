import cardsDeckReducer from '../reducers';
import {getInitialCards} from '../service';
import {shuffle, dealOneCard} from '../actions';
import {types, elements} from '../config';

const initalState = {
  cardsDeck: getInitialCards(types, elements),
  cardsDealed: []
};

describe('should reduce state', () => {

  test('should get correct inital state', () => {
    const state = cardsDeckReducer(undefined, {});

    expect(state).toEqual(initalState);
  });


  test('should reduce state when receive shuffle action', () => {
    const state = cardsDeckReducer(undefined, shuffle());

    expect(state.cardsDealed).toEqual([]);

    state.cardsDeck.forEach((index, element) => {
      expect(element).not.toEqual(initalState.cardsDeck[index]);
    });
  });

  test('should reduce state when deal one card', () => {


    let index = 0;
    let state;

    while (index < 100) {
      state = cardsDeckReducer(state, dealOneCard());

      const dealedExpected = index <= 51 ? index + 1 : 52;

      expect(state.cardsDealed.length).toEqual(dealedExpected);

      const expected = index <= 51 ? 51 - index : 0;

      expect(state.cardsDeck.length).toEqual(expected);


      index = index + 1;
    }

  });

});
