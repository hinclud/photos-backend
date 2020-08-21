import { Router } from "express";
import * as Blog from "../controllers/admin";
import * as Portfolio from "../controllers/portfolio";
import * as User from "../controllers/user";

const router = Router();

router.get("/blog/:id", Blog.getPost);
router.get("/blog/", Blog.getAllPosts);
router.get("/blog/:postId/image", Blog.getPostImages);

router.get("/portfolio", Portfolio.getAll);

router.post("/login", User.login);
router.get("/logout", User.logout);

router.use(User.isLoggedIn);

router.get("/user/image", User.getImages);
router.put("/user/image/:id", User.updateImageSelection);

export default router;
