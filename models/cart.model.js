/*
the schema for cart
*/

const { Sequelize} = require("sequelize");

module.exports = (sequelize , Sequelize) => {
    const Cart = sequelize.define("cart" , {
       id : {
          type : Sequelize.INTEGER,
          primaryKey : true,
          autoIncrement : true
       },
       cost : {
           type : Sequelize.INTEGER
       }
    });
    return Cart;
}