import Character from '../task';

test('error length 1', () => {
  function err() {
    const hero = new Character('I', 'Swordsman');
    console.log(hero);
  }

  expect(err).toThrowError(new Error('Длина поля name должна быть min - 2 символа, max - 10!'));
});

test('error length 10', () => {
  function err() {
    const hero = new Character('Iiiiiiiiiivvvannnnn', 'Magician');
    console.log(hero);
  }

  expect(err).toThrowError(new Error('Длина поля name должна быть min - 2 символа, max - 10!'));
});

test('error wrong type', () => {
  function err() {
    const hero = new Character('Igor', 'Man');
    console.log(hero);
  }

  expect(err).toThrowError(new Error('Неверный тип!'));
});
