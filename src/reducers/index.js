import {DEAL_ONE_CARD, SHUFFLE} from '../actions';
import {dealOneCard, getShuffledArray, getInitialCards, getRestCards} from '../service';
import {types, elements} from '../config';

const initialCards = getInitialCards(types, elements);

export default function cardsDeckReducer(state = {
  cardsDeck: initialCards,
  cardsDealed: []
}, {type}) {
  switch (type) {
    case DEAL_ONE_CARD:
      const card = dealOneCard(state.cardsDeck);
      const cardsDeckLeft = getRestCards(card, state.cardsDeck);
      const cardsDealed = card ? [...state.cardsDealed, card] : state.cardsDealed;

      return {cardsDealed, cardsDeck: cardsDeckLeft};
    case SHUFFLE:
      const shuffledArrays = getShuffledArray(initialCards);

      return {cardsDeck: shuffledArrays, cardsDealed: []};
    default:
      return state;
  }
}
