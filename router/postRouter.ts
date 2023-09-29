import express from "express";
import { PostBusiness } from "../src/business/PostBusiness";
import { LikesDislikesDatabase } from "../src/database/LikesDislikesDatabase";
import { PostDatabase } from "../src/database/PostDatabase";
import { PostController } from "../src/controller/PostController";
import { CommentDatabase } from "../src/database/CommnetDatabase";
import { TokenManager } from "../src/services/tokenManager";
import { IdGenerator } from "../src/services/IdGenerator";

export const postRouter = express.Router();

const postController = new PostController(
    new PostBusiness(
        new PostDatabase(),
        new LikesDislikesDatabase(),
        new CommentDatabase(),
        new TokenManager(),
        new IdGenerator()
    )
);

postRouter.post('/', postController.createPost);
postRouter.get('/', postController.getPosts);
postRouter.put('/:id', postController.updatePost);
postRouter.delete('/:id', postController.deletePost);
postRouter.put('/:id/like', postController.likeDislikePost);
postRouter.post('/:id/comment', postController.createComment);