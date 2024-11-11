'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Surprises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false, // --- не может быть пустым
      },
      price: {
        type: Sequelize.INTEGER,
        defaultValue: 1000, // --- значение по умолчанию
      },
      description: {
        type: Sequelize.TEXT,
      },
      image: {
        type: Sequelize.STRING,
        defaultValue: 'box-1.jpg', // --- значение по умолчанию
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true, // ---  может быть пустым ???
        defaultValue: null, // --- значение по умолчанию
        references: {
          model: 'Users', // --- к какой таблице привязка
          key: 'id', // --- к какому ключу
        },
        // onDelete: 'SETNULL', // --- 'SETNULL'/'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Surprises');
  },
};
