import { CommentDB } from "../models/Comment";
import { BaseDatabase } from "./BaseDatabase";

export class CommentDatabase extends BaseDatabase {
    TABLE_COMMENTS = 'comments'

    public async createComment(newComment:CommentDB):Promise<void>{
        await BaseDatabase.connection(this.TABLE_COMMENTS)
            .insert(newComment)
    }
}