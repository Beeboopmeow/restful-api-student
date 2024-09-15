'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('students', [
      {
        name: 'John Doe',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      { 
        name: 'Mary',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null, {});
    
  }
};
