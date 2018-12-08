export const SHUFFLE = 'SHUFFLE';
export const DEAL_ONE_CARD = 'DEAL_ONE_CARD';

export function shuffle() {
  return {
    type: SHUFFLE
  };
}

export function dealOneCard() {
  return {
    type: DEAL_ONE_CARD
  };
}
