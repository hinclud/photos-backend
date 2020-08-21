import { DataTypes } from "sequelize";
import sequelize from ".";
import User from "./User";

const UserImage = sequelize.define("userImages", {
	src: DataTypes.STRING,
	thumbnailWidth: DataTypes.INTEGER,
	thumbnailHeight: DataTypes.INTEGER,
	thumbnail: DataTypes.STRING,
	isSelected: DataTypes.BOOLEAN,
});

UserImage.belongsTo(User, { foreignKey: "username" });

export default UserImage;
