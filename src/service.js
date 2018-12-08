export function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    const ramdomIndex = Math.floor((Math.random() * index));
    const tmp = array[index];

    array[index] = array[ramdomIndex];
    array[ramdomIndex] = tmp;
  }
}

export function dealOneCard(array) {
  const ramdomIndex = Math.floor((Math.random() * (array.length - 1)));

  return array[ramdomIndex];
}


export function getShuffledArray(array) {
  const newArray = array.slice(0);

  shuffle(newArray);

  return newArray;
}

export function getRestCards(card, cards) {
  return cards.filter(item => {
    return item.id !== card.id;
  });
}

export function getInitialCards(types, elements) {
  const array = [];
  let id = 1;

  for (const type of types) {
    for (const element of elements) {
      const card = {
        id,
        type,
        element
      };

      array.push(card);

      id++;
    }
  }

  return array;

}
