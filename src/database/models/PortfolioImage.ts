import { DataTypes } from "sequelize";
import sequelize from ".";
import BlogPost from "./BlogPost";

const PortfolioImage = sequelize.define("profolioImage", {
	src: DataTypes.STRING,
	thumbnailWidth: DataTypes.INTEGER,
	thumbnailHeight: DataTypes.INTEGER,
	thumbnail: DataTypes.STRING,
});

export default PortfolioImage;
