import { DataTypes } from "sequelize";
import sequelize from ".";

const BlogPost = sequelize.define("blogPosts", {
	title: { type: DataTypes.STRING },
	date: { type: DataTypes.STRING },
	description: { type: DataTypes.STRING },
});

export default BlogPost;
