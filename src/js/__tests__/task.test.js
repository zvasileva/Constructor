import Character from '../task';

test.each([
  ['Ivan', 'Bowman', {
    name: 'Ivan', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  }],
  ['Igor', 'Swordsman', {
    name: 'Igor', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  }],
  ['Petr', 'Magician', {
    name: 'Petr', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  }],
  ['Zara', 'Undead', {
    name: 'Zara', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  }],
  ['Lukas', 'Zombie', {
    name: 'Lukas', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  }],
  ['Denys', 'Daemon', {
    name: 'Denys', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  }],
])('get result', (name, type, expected) => {
  const result = new Character(name, type);

  expect(result).toEqual(expected);
});
