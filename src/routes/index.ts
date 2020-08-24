import path from "path";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors";

import admin from "./admin";
import client from "./client";

const app = express();
dotenv.config();
const port = 5000;

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(cors());
app.use(cookieParser());
app.use(
	session({
		resave: true,
		saveUninitialized: true,
		secret: "skfjfkfgjeoeiwrrwrewoirweoi4",
		cookie: { secure: false },
	})
);

app.use("/api/admin", admin);
app.use("/api", client);

app.use("/uploads/", express.static(process.env.UPLOADS));
app.use("/", express.static(process.env.FRONTEND + "/build/"));

app.get("/*", function (_req: any, res: any) {
	res.sendFile(path.resolve(process.env.FRONTEND, "./build", "index.html"));
});

// some temp work

import BlogPost from "../database/models/BlogPost";
import BlogPostImage from "../database/models/BlogPostImage";
import User from "../database/models/User";
import PortfolioImage from "../database/models/PortfolioImage";
import UserImage from "../database/models/UserImage";

export const create = async () => {
	await BlogPost.sync();

	await BlogPostImage.sync();

	await User.sync();
	await PortfolioImage.sync();
	await UserImage.sync();
};

create();

// end of temp work

app.listen();
