import { DataTypes } from "sequelize";
import sequelize from ".";

const User = sequelize.define("users", {
	username: {
		type: DataTypes.STRING,
		primaryKey: true,
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	isAdmin: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
		allowNull: false,
	},
});

export default User;
