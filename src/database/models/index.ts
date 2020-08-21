const { Sequelize, DataTypes } = require("sequelize");

// "mysql://admin:admin@192.168.43.78:33060/chitchat"
const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PASSWORD;

const sequelize = new Sequelize(`mysql://${password}:${user}@${host}`);

export default sequelize;
