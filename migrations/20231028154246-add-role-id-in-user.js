'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('users', 'role_id', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'roles',
            },
            key: 'id'
          },
          allowNull: true
          
        }, { transaction: t }),
      ]);
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeConstraint('users', 'users_role_id_fkey', { transaction: t }),
        queryInterface.removeColumn('users', 'role_id', { transaction: t })
      ]);
    });
  }
};
