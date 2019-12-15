import { UserModel } from './user.model';
import { ArticleModel } from './article.model';

export interface ReplyModel {
  _id?: string;
  text: string;
  user: UserModel;
  comment: CommentModel;
}

export interface CommentModel {
  _id?: string;
  text: string;
  userId?: UserModel;
  articleId?: ArticleModel;
  replies?: ReplyModel[] | [];
}
