'use strict';

const { User } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await User.bulkCreate([
    {
      firstName: 'Deemo',
      lastName: 'Demo',
      email: 'demo@user.io',
      username: 'Demo-lition',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      firstName: "Yuji",
      lastName: "Itadori",
      email: 'jlaw1fan@jjk.io',
      username: 'divergent-fist',
      hashedPassword: bcrypt.hashSync('demolizer')
    },
    {
      firstName: "Megumi",
      lastName: "Fushiguro",
      email: 'demondogs@jjk.io',
      username: 'divinetreasure',
      hashedPassword: bcrypt.hashSync('paparaga')
    },
    {
      firstName: "Nobara",
      lastName: "Kugisaki",
      email: 'tokyolover@jjk.io',
      username: 'strawdoll',
      hashedPassword: bcrypt.hashSync('hairpin')
    },
    {
      firstName: "Saturo",
      lastName: "Gojo",
      email: 'Getobff@jjk.io',
      username: 'chosen-one',
      hashedPassword: bcrypt.hashSync('infinity')
    },
    {
      firstName: "Maki",
      lastName: "Zenin",
      email: 'Maki@jjk.io',
      username: 'restricted-one',
      hashedPassword: bcrypt.hashSync('heavenly')
    },
    {
      firstName: "Kento",
      lastName: "Nanami",
      email: 'beachlover@jjk.io',
      username: 'best-mentor',
      hashedPassword: bcrypt.hashSync('overtime')
    }
   ], { validate: true})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition', 'divergent-fist', 'divinetreasure', 'strawdoll', 'chosen-one', 'restricted-one', 'best-mentor'] }
    }, {});
  }
};
