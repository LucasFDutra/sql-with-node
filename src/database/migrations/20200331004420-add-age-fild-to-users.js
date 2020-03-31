
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'users',
    'age',
    {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  ),

  down: (queryInterface, Sequelize) => queryInterface.removeColumn(
    'users',
    'age',
  ),
};
