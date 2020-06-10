export default function Character(name, type) {
  const typesList = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];

  if (!typesList.includes(type)) {
    throw new Error('Неверный тип!');
  }

  if (name.length < 2 || name.length > 10) {
    throw new Error('Длина поля name должна быть min - 2 символа, max - 10!');
  }

  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;

  if (type === 'Bowman') {
    this.attack = '25/25';
  } else if (type === 'Swordsman') {
    this.attack = '40/10';
  } else if (type === 'Magician') {
    this.attack = '10/40';
  } else if (type === 'Undead') {
    this.attack = '25/25';
  } else if (type === 'Zombie') {
    this.attack = '40/10';
  } else if (type === 'Daemon') {
    this.attack = '10/40';
  }
}
