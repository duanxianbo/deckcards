import * as actions from '../actions';

describe('should create actions', () => {

  test('should create shuffle action', () => {
    const action = {
      type: actions.SHUFFLE
    };

    expect(action).toEqual(actions.shuffle());
  });

  test('should create deal one card action', () => {
    const action = {
      type: actions.DEAL_ONE_CARD
    };

    expect(action).toEqual(actions.dealOneCard());
  });

});
