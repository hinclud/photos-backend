import PortfolioImage from "../database/models/PortfolioImage";
import { Request, Response } from "express";
import { uploadImage } from "../utils/fileUpload";

export const getAll = async (req: Request, res: Response) => {
	const images = await PortfolioImage.findAll();
	res.json(images);
};

export const add = async (req: Request, res: Response) => {
	const image = await uploadImage(req, res, "image");
	await PortfolioImage.create({
		...image,
	});
	res.json("success");
};
