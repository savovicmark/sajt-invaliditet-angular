import { ArticleModel } from '../Models/article.model';
import { UserModel } from '../Models/user.model';
import { CommentModel } from '../Models/comment.model';
import { EntityState } from '@ngrx/entity';

export interface AppState {
  articles: ArticleState;
  user: UserModel;
  comments: CommentModel[];
}

export interface ArticleState extends EntityState<ArticleModel> { }
export interface UserState extends EntityState<UserModel> { }

