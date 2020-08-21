import multer from "multer";
import { Request } from "express";
import { imageSize } from "image-size";
import path from "path";

export const fileStore = multer({
	storage: multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, process.env.UPLOADS);
		},
		filename: function (req, file, cb) {
			const uniqueSuffix =
				Date.now() + "-" + Math.round(Math.random() * 1e9);
			cb(null, uniqueSuffix + file.originalname);
		},
	}),
});

interface IImage {
	src?: string;
	thumbnailWidth?: number;
	thumbnailHeight?: number;
	thumbnail?: string;
}

interface IDimensions {
	width: number;
	height: number;
}

export const uploadImage = async (req: Request, res: any, field: string) => {
	return new Promise<IImage>((resolve, reject) => {
		fileStore.single(field)(req, res, async function (err) {
			if (err) {
				res.send(err);
				reject(err);
			}

			const dim = imageSize(req.file.path);
			const image: IImage = {
				src: path.join("/uploads/", req.file.filename),
				thumbnail: path.join("/uploads/", req.file.filename),
				thumbnailHeight: dim.height,
				thumbnailWidth: dim.width,
			};
			resolve(image);
		});
	});
};
