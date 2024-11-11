const { User } = require('../models');
const { Surprise } = require('../models');
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        name: 'Alex',
        email: '111@111',
        password: bcrypt.hashSync('111', 10),
        balance: 10000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bob',
        email: '222@222',
        password: bcrypt.hashSync('222', 10),
        balance: 10000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Carl',
        email: '333@333',
        password: bcrypt.hashSync('333', 10),
        balance: 10000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await Surprise.bulkCreate([
      {
        name: 'Новогодний Сундук',
        price: 1500,
        description:
          'Откройте Новогодний Сундук и получите редкие предметы, скинированное оружие и праздничные костюмы.',
        image: 'box-1.jpg',
        userId: null,
      },

      {
        name: 'Эпический Сундук',
        price: 2000,
        description:
          'Этот сундук содержит эпические предметы, включая легендарное оружие и уникальные аксессуары.',
        image: 'box-1.jpg',
        userId: null,
      },

      {
        name: 'Сундук Героя',
        price: 2500,
        description:
          'Откройте Сундук Героя и получите мощные усиления, редкие ресурсы и эксклюзивные наборы.',
        image: 'box-1.jpg',
        userId: null,
      },

      {
        name: 'Сундук Легенд',
        price: 3000,
        description:
          'Сундук Легенд содержит легендарные предметы, которые помогут вам стать непобедимым в бою.',
        image: 'box-1.jpg',
        userId: null,
      },

      {
        name: 'Сундук Охотника',
        price: 1800,
        description:
          'Откройте Сундук Охотника и получите снаряжение для охоты, редкие трофеи и ценные ресурсы.',
        image: 'box-1.jpg',
        userId: null,
      },

      {
        name: 'Сундук Алхимика',
        price: 2200,
        description:
          'Сундук Алхимика содержит редкие ингредиенты, зелья и рецепты для создания мощных эликсиров.',
        image: 'box-1.jpg',
        userId: null,
      },

      {
        name: 'Сундук Воина',
        price: 2400,
        description:
          'Откройте Сундук Воина и получите мощное оружие, броню и усиления для боя.',
        image: 'box-1.jpg',
        userId: null,
      },

      {
        name: 'Сундук Мага',
        price: 2600,
        description:
          'Сундук Мага содержит зачарованные предметы, свитки заклинаний и магические артефакты.',
        image: 'box-1.jpg',
        userId: null,
      },

      {
        name: 'Сундук Авантюриста',
        price: 1900,
        description:
          'Откройте Сундук Авантюриста и получите карты сокровищ, ключи от тайников и редкие предметы.',
        image: 'box-1.jpg',
        userId: null,
      },

      {
        name: 'Сундук Дракона',
        price: 3500,
        description:
          'Сундук Дракона содержит драгоценности, драконью чешую и легендарные предметы, связанные с драконами.',
        image: 'box-1.jpg',
        userId: null,
      },
    ]);
  },
};
