import BlogPost from "../database/models/BlogPost";
import BlogPostImage from "../database/models/BlogPostImage";
import { uploadImage } from "../utils/fileUpload";
import { Request, Response, NextFunction } from "express";
import UserImage from "../database/models/UserImage";
import User from "../database/models/User";

export const isLoggedIn = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (!req.session.user) {
		res.status(403).send("access denied! please login as admin");
	} else {
		if (req.session.user.isAdmin) {
			next();
		} else {
			res.status(403).send("you don't have access to this page!");
		}
	}
};

export const addPost = async (req, res) => {
	BlogPost.create({
		title: req.body.title,
		description: req.body.description,
		date: req.body.date,
	})
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.send(err);
		});
};

export const getPost = (req, res) => {
	const id = req.params.id;
	BlogPost.findOne({
		where: {
			id,
		},
	})
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
};

export const getAllPosts = (req, res) => {
	BlogPost.findAll()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
};

export const deletePost = async (req, res) => {
	const id = req.params.id;
	await BlogPostImage.destroy({
		where: {
			blogPostId: id,
		},
	});
	await BlogPost.destroy({
		where: {
			id,
		},
	});
	res.send("success");
};

export const updatePost = async (req, res) => {
	const id = req.params.id;
	await BlogPost.update(
		{ ...req },
		{
			where: {
				id,
			},
		}
	);
	res.send("success");
};

export const getPostImages = async (req, res) => {
	const postId = req.params.postId;
	await BlogPostImage.findAll({
		where: {
			BlogPostId: postId,
		},
	}).then((images) => {
		res.json(images);
	});
	res.send("success");
};

export const deletePostImage = async (req, res) => {
	const id = req.params.id;
	await BlogPostImage.destory({
		where: {
			id,
		},
	});
	res.send("success");
};

export const addPostImage = async (req: Request, res: Response) => {
	const postId = req.params.postId;

	const postImage = await uploadImage(req, res, "image");
	await BlogPostImage.create({
		...postImage,
		blogPostId: postId,
	});
	res.send("success");
};

export const addUserImages = async (req: Request, res: Response) => {
	const username = req.params.username;
	const image = await uploadImage(req, res, "image");
	await UserImage.create({
		...image,
		username,
	});

	res.send("success");
};

export const getAllUsers = async (req: Request, res: Response) => {
	const users = await User.findAll();
	res.json(users);
};
