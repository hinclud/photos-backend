const { Sequelize, DataTypes } = require("sequelize");

// "mysql://admin:admin@192.168.43.78:33060/chitchat"
let host = "192.168.43.78/anand";
let user = "root";
let password = "root";

host = "localhost/glntyckp_anand";
user = "glntyckp_root";
password = "merapassword";

console.log(`mysql://${user}:${password}@${host}`);
const sequelize = new Sequelize(`mysql://${user}:${password}@${host}`);

export default sequelize;
