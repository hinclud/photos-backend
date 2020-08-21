import { DataTypes } from "sequelize";
import sequelize from ".";
import BlogPost from "./BlogPost";

const BlogPostImage = sequelize.define("blogPostImages", {
	src: DataTypes.STRING,
	thumbnailWidth: DataTypes.INTEGER,
	thumbnailHeight: DataTypes.INTEGER,
	thumbnail: DataTypes.STRING,
});

BlogPostImage.belongsTo(BlogPost);

export default BlogPostImage;
