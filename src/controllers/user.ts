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
		res.status(403).send();
	}
	req.session.user = user;
	res.json({ path: user.isAdmin ? "/admin" : "/user" });
};

export const logout = async (req: Request, res: Response) => {
	req.session.user = null;
};

export const isLoggedIn = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
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
