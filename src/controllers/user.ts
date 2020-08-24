import UserImage from "../database/models/UserImage";
import User from "../database/models/User";
import { Request, Response, NextFunction } from "express";

export const login = async (req: Request, res: Response) => {
	const user = await User.findOne({
		where: {
			username: req.body.username,
			password: req.body.password,
		},
	});
	if (!user) {
		res.status(400).send("Wrong Username or Password");
		return;
	}
	req.session.user = {
		username: user.dataValues.username,
		isAdmin: user.dataValues.isAdmin,
	};
	console.log("saving to session ", req.session.user);
	req.session.save((err) => {
		if (!err) {
			res.json({ path: user.isAdmin ? "/admin" : "/user" });
		} else res.status(403).send(err);
	});
};

export const logout = async (req: Request, res: Response) => {
	req.session.user = null;
};

export const isUser = async (req: Request, res: Response) => {
	if (req.session.user) res.json(true);
	else res.json(false);
};

export const isAdmin = async (req: Request, res: Response) => {
	if (req.session.user && req.session.user.isAdmin) res.json(true);
	else res.json(false);
};

export const isLoggedIn = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.log("user : ", req.session.user);
	// req.session.user = { username: "manuver" };
	if (!req.session.user) {
		res.status(403).send("access denied, login to continue");
	} else {
		next();
	}
};

export const getImages = async (req: Request, res: Response) => {
	const username = req.session.user.username;
	const images = await UserImage.findAll({
		where: {
			username,
		},
	});

	res.json(images);
};

export const updateImageSelection = async (req: Request, res: Response) => {
	const username = req.session.user.username;
	const id = req.params.id;
	await UserImage.update(
		{
			isSelected: req.body.isSelected,
		},
		{
			where: {
				id,
				username,
			},
		}
	);
	res.json("Success");
};
