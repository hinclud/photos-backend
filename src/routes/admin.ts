import { Router } from "express";
import * as Admin from "../controllers/admin";
import * as Portfolio from "../controllers/portfolio";

const router = Router();

router.use(Admin.isLoggedIn);

// Blog post image
router.post("/blog/:postId/image", Admin.addPostImage);
router.delete("/blog/image/:id", Admin.deletePostImage);

// blog post
router.post("/blog", Admin.addPost);
router.put("/blog/:id", Admin.updatePost);
router.delete("/blog/:id", Admin.deletePost);

// Portfolio
router.post("/portfolio", Portfolio.add);

// User
router.post("/user/:username/image", Admin.addUserImages);
router.get("/user/", Admin.getAllUsers);

export default router;
