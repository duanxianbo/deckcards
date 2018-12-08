
import {shuffle, dealOneCard, getShuffledArray, getInitialCards, getRestCards} from '../service';


const types = ['A', 'B'];
const elements = [1, 2];
const results = [
  {id: 1, type: 'A', element: 1},
  {id: 2, type: 'A', element: 2},
  {id: 3, type: 'B', element: 1},
  {id: 4, type: 'B', element: 2}
];
const dealedCard = results[0];


describe('test cards services', () => {


  test('should initial cards', () => {
    const cards = getInitialCards(types, elements);

    expect(cards.length).toEqual(4);
    expect(cards).toEqual(results);
  });


  test('should shuffle cards', () => {
    const colonedResults = results.slice(0);

    shuffle(colonedResults);

    expect(colonedResults.length).toEqual(4);

    results.forEach((index, element) => {
      expect(element).not.toEqual(colonedResults[index]);
    });
  });

  test('should get shuffled cards', () => {
    const shuffledArrays = getShuffledArray(results);

    results.forEach((index, element) => {
      expect(element).not.toEqual(shuffledArrays[index]);
    });
  });

  test('should deal One Card', () => {
    const card = dealOneCard(results);

    const found = results.find((element) => element.id === card.id);

    expect(!!found).toEqual(true);
  });

  test('should return rested cards when dealed card', () => {
    const restCards = getRestCards(dealedCard, results);

    expect(restCards).toEqual(results.slice(1));
  });

});
