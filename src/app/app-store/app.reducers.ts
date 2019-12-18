import { ArticleModel } from '../Models/article.model';
import { UserModel } from '../Models/user.model';
import { CommentModel } from '../Models/comment.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as appActions from './app.actions';

export interface AppState {
  articles: ArticleState;
  user: UserModel;
  comments: CommentState;
}

export interface ArticleState extends EntityState<ArticleModel> { }
export interface CommentState extends EntityState<CommentModel> { }

export const articleAdapter: EntityAdapter<ArticleModel> = createEntityAdapter({
  selectId: article => article._id
});

export const commentAdapter: EntityAdapter<CommentModel> = createEntityAdapter({
  selectId: comment => comment._id
});

export const articleInitialState: ArticleState = articleAdapter.getInitialState();
export const commentInitialState: CommentState = commentAdapter.getInitialState();
export const userInitialState: UserModel = {
  _id: '',
  username: '',
  email: '',
  password: '',
  verified: false,
  banned: false
};

export function articleReducer(state = articleInitialState, action: appActions.AppActions): ArticleState {
  switch (action.type) {
    case appActions.AppActionTypes.AllArticlesLoaded:
      return articleAdapter.addMany(action.payload.articles, state);
    case appActions.AppActionTypes.ArticleByIdLoaded:
    case appActions.AppActionTypes.ArticlePosted:
      return articleAdapter.addOne(action.payload.article, state);
    case appActions.AppActionTypes.ArticleUpdated:
      return articleAdapter.updateOne(action.payload, state);
    case appActions.AppActionTypes.ArticleDeleted:
      return articleAdapter.removeOne(action.payload.articleId, state);
    default: {
      return state;
    }
  }
}
export function commentReducer(state = commentInitialState, action: appActions.AppActions): CommentState {
    switch (action.type) {
      case appActions.AppActionTypes.AllCommentsForArticleLoaded:
        return commentAdapter.addMany(action.payload.comments, state);
      case appActions.AppActionTypes.CommentPosted:
        return commentAdapter.addOne(action.payload.comment, state);
      case appActions.AppActionTypes.ReplyPosted:
      case appActions.AppActionTypes.ReplyDeleted:
        return commentAdapter.updateOne(action.payload, state);
      case appActions.AppActionTypes.DeleteComment:
        return commentAdapter.removeOne(action.payload.commentId, state);
      default: {
        return state;
      }
    }
  }

export function userReducer(state = userInitialState, action: appActions.AppActions): UserModel {
    switch (action.type) {
      case appActions.AppActionTypes.UserPosted:
        return {...state, ...action.payload.user };
      default: {
        return state;
      }
    }
  }
export const {
  selectIds: selectArticleIds,
  selectAll: selectArticleAll,
  selectEntities: selectArticleEntities,
  selectTotal: selectArticleTotal
 } = articleAdapter.getSelectors();

export const {
  selectIds: selectCommentIds,
  selectAll: selectCommentAll,
  selectEntities: selectCommentEntities,
  selectTotal: selectCommentTotal
 } = commentAdapter.getSelectors();

