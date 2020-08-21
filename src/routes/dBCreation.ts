import BlogPost from "../database/models/BlogPost";
import BlogPostImage from "../database/models/BlogPostImage";
import User from "../database/models/User";
import PortfolioImage from "../database/models/PortfolioImage";
import UserImage from "../database/models/UserImage";

export const create = async () => {
	await BlogPost.sync();
	// await BlogPost.create({
	// 	title: "New Post",
	// 	date: "2020/08/20",
	// 	description: "this is simple description",
	// });
	await BlogPostImage.sync();
	// await BlogPostImage.create({
	// 	src: "https://images.financialexpress.com/2017/07/India-Pakistan.jpg",
	// 	thumbnail:
	// 		"https://images.financialexpress.com/2017/07/India-Pakistan.jpg",
	// 	thumbnailWidth: 800,
	// 	thumbnailHeight: 500,
	// 	blogPostId: 1,
	// });
	// await BlogPostImage.create({
	// 	src:
	// 		"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/anushka_virat_0.png?yTf2BkaIHPX3_GUi545rrkbUuOQJcoQw&size=770:433",
	// 	thumbnail:
	// 		"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/anushka_virat_0.png?yTf2BkaIHPX3_GUi545rrkbUuOQJcoQw&size=770:433",
	// 	thumbnailWidth: 800,
	// 	thumbnailHeight: 500,
	// 	blogPostId: 1,
	// });
	await User.sync();
	await PortfolioImage.sync();
	await UserImage.sync();
};
