'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
     return queryInterface.bulkInsert('Cards', [{
       title: "Work on React KanBan Project",
       priority: "High",
       status: "inProgress",
       createdBy: "Jay",
       assignedTo: "Jason",
       createdAt : new Date(),
       updatedAt : new Date()
    }, {
       title: "Take out the Trash",
       priority: "Low",
       status: "queue",
       createdBy: "Jay",
       assignedTo: "Jack",
       createdAt : new Date(),
       updatedAt : new Date()
    }, {
       title: "Sleep",
       priority: "Low",
       status: "done",
       createdBy: "Jay",
       assignedTo: "Jay",
       createdAt : new Date(),
       updatedAt : new Date()
    }, {
       title: "Buy Groceries",
       priority: "High",
       status: "queue",
       createdBy: "Jay",
       assignedTo: "Jay",
       createdAt : new Date(),
       updatedAt : new Date()
    }], {});
  },
  down: function (queryInterface, Sequelize) {
    author: 'Lorem Ipsum'
  }
};

