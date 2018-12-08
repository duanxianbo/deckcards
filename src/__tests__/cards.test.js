import React from 'react';
import {render, mount} from 'enzyme';
import {Card, Cards, CardsFolder, _CardsContainer} from '../cards';

const cards = [{
  id: 1,
  element: 'A',
  type: '♥'
}, {
  id: 2,
  element: '1',
  type: '♥'
}, {
  id: 3,
  element: '4',
  type: '♣'
}];

describe('Cards basic', () => {

  it('should render correctly one card', () => {
    const component = render(<Card element={'A'} type={'♣'} />);

    expect(component).toMatchSnapshot();
  });


  it('should render cards', () => {
    const component = render(<Cards cards={cards} />);

    expect(component).toMatchSnapshot();
  });
});


describe('Cards actions', () => {
  it('should perform card actions', () => {
    const cardAction = jest.fn();
    const component = mount(<CardsFolder cards={cards} cardAction={cardAction} actionLabel={'test'}/>);

    component.find('button').simulate('click');
    expect(cardAction).toHaveBeenCalled();

    component.unmount();
  });

  it('should perform card actions', () => {
    const dealOneCardAction = jest.fn();
    const shuffle = jest.fn();

    const component = mount(
      <_CardsContainer
        cardsDeck={cards.slice(0, 1)}
        cardsDealed={cards.slice(1)}
        dealOneCardAction={dealOneCardAction}
        shuffleAction={shuffle}
      />);

    component.find('#cardsDeck button').simulate('click');
    expect(shuffle).toHaveBeenCalled();

    component.find('#cardsDealed button').simulate('click');
    expect(dealOneCardAction).toHaveBeenCalled();

    component.unmount();
  });
});
