import { Action } from '@ngrx/store';
import { ArticleModel } from '../Models/article.model';
import { CommentModel, CommentStringModel } from '../Models/comment.model';
import { Update } from '@ngrx/entity';
import { UserModel } from '../Models/user.model';

export enum AppActionTypes {
  LoadAllArticles = '[Articles Page] Load All Articles',
  AllArticlesLoaded = '[API] All Articles Loaded',
  AllArticlesLoadingError = '[API] All Articles Load Error',
  LoadArticleById = '[One Article Page] Load Article By Id',
  ArticleByIdLoaded = '[API] Article By Id Loaded',
  ArticleByIdLoadingError = '[API] Article By Id Loading Error',
  LoadAllCommentsForArticle = '[One Article Page] Load All Comments For Article',
  AllCommentsForArticleLoaded = '[API] All Comments For Article Loaded',
  AllCommentsForArticleLoadingError = '[API] All Comments Loading Error',
  PostComment = '[Article Page] Post Comment',
  CommentPosted = '[API] Comment Posted',
  CommentPostError = '[API] Error Posting Comment',
  PostReplyToComment = '[Article Page] Post Reply To Comment',
  ReplyPosted = '[API] Reply Posted',
  ReplyPostError = '[API] Reply Post Error',
  DeleteComment = '[Article Page] Delete Comment',
  CommentDeleted = '[API] Comment Deleted',
  CommentDeleteError = '[API] Comment Delete Error',
  DeleteReply = '[Article] Delete Reply',
  ReplyDeleted = '[API] Reply Deleted',
  ReplyDeleteError = '[API] Reply Delete Error',
  // ======================= admin====================
  PostArticle = '[Admin] Post Article',
  ArticlePosted = '[API] Article Posted',
  ArticlePostError = '[API] Article Post Error',
  UpdateArticle = '[Admin] Update Article',
  ArticleUpdated = '[API] Article Updated',
  ArticleUpdateError = '[API] Article Update Error',
  DeleteArticle = '[Admin] Delete Article',
  ArticleDeleted = '[API] Article Deleted',
  ArticleDeleteError = '[API] Article Delete Error',
  // ============================================================
  PostUser = '[Sign In] Post User',
  UserPosted = '[API] User posted',
  UserPostError = '[API] Post User Error',
  LogInUser = '[Log In] Log In User',
  UserLoggedIn = '[API] Logged In',
  LogInError = '[API] Log In Error'
}

export class LoadAllArticlesAction implements Action {
  readonly type = AppActionTypes.LoadAllArticles;
}

export class AllArticlesLoadedAction implements Action {
  readonly type = AppActionTypes.AllArticlesLoaded;
  constructor(public payload: {articles: ArticleModel[]}) {}
}

export class AllArticlesLoadErrorAction implements Action {
  readonly type = AppActionTypes.AllArticlesLoadingError;
}

export class LoadArticleByIdAction implements Action {
  readonly type = AppActionTypes.LoadArticleById;
  constructor(public payload: {articleId: string}) {}
}

export class ArticleByIdLoadedAction implements Action {
  readonly type = AppActionTypes.ArticleByIdLoaded;
  constructor(public payload: {article: ArticleModel}) {}
}

export class ArticleByIdLoadErrorAction implements Action {
  readonly type = AppActionTypes.ArticleByIdLoadingError;
}

export class LoadAllCommentsForArticleAction implements Action {
  readonly type = AppActionTypes.LoadAllCommentsForArticle;
  constructor(public payload: {articleId: string}) {}
}

export class AllCommentsForArticleLoadedAction implements Action {
  readonly type = AppActionTypes.AllCommentsForArticleLoaded;
  constructor(public payload: {comments: CommentModel[]}) {}
}

export class AllCommentsForArticleLoadErrorAction implements Action {
  readonly type = AppActionTypes.AllCommentsForArticleLoadingError;
}

export class PostCommentAction implements Action {
  readonly type = AppActionTypes.PostComment;
  constructor(public payload: {comment: CommentStringModel}) {}
}

export class CommentPostedAction implements Action {
  readonly type = AppActionTypes.CommentPosted;
  constructor(public payload: {comment: CommentModel}) {}
}

export class CommentPostErrorAction implements Action {
  readonly type = AppActionTypes.CommentPostError;
}

export class PostReplyToCommentAction implements Action {
  readonly type = AppActionTypes.PostReplyToComment;
  constructor(public payload: {userId: string, commentId: string, text: string}) {}
}

export class ReplyPostedAction implements Action {
  readonly type = AppActionTypes.ReplyPosted;
  constructor(public payload: Update<CommentModel>) {}
}

export class ReplyPostError implements Action {
  readonly type = AppActionTypes.ReplyPostError;
}

export class DeleteCommentAction implements Action {
  readonly type = AppActionTypes.DeleteComment;
  constructor(public payload: {commentId: string}) {}
}

export class CommentDeletedAction implements Action {
  readonly type = AppActionTypes.CommentDeleted;
  constructor(public payload: {commentId: string}) {}
}

export class CommentDeleteErrorAction implements Action {
  readonly type = AppActionTypes.CommentDeleteError;
}

export class DeleteReplyAction implements Action {
  readonly type = AppActionTypes.DeleteReply;
  constructor(public payload: {commentId: string, replyId: string}) {}
}

export class ReplyDeletedAction implements Action {
  readonly type = AppActionTypes.ReplyDeleted;
  constructor(public payload: Update<CommentModel>) {}
}

export class ReplyDeleteErrorAction implements Action {
  readonly type = AppActionTypes.ReplyDeleteError;
}

// ======================admin actions=========================

export class PostArticleAction implements Action {
  readonly type = AppActionTypes.PostArticle;
  constructor(public payload: {article: ArticleModel}) {}
}

export class ArticlePostedAction implements Action {
  readonly type = AppActionTypes.ArticlePosted;
  constructor(public payload: {article: ArticleModel}) {}
}

export class ArticlePostErrorAction implements Action {
  readonly type = AppActionTypes.ArticlePostError;
}

export class UpdateArticleAction implements Action {
  readonly type = AppActionTypes.UpdateArticle;
  constructor(public payload: {articleId: string, article: ArticleModel}) {}
}

export class ArticleUpdatedAction implements Action {
  readonly type = AppActionTypes.ArticleUpdated;
  constructor(public payload: Update<ArticleModel>) {}
}

export class ArticleUpdateErrorAction implements Action {
  readonly type = AppActionTypes.ArticleUpdateError;
}

export class DeleteArticleAction implements Action {
  readonly type = AppActionTypes.DeleteArticle;
  constructor(public payload: {articleId: string}) {}
}

export class ArticleDeletedAction implements Action {
  readonly type = AppActionTypes.ArticleDeleted;
  constructor(public payload: {articleId: string}) {}
}

export class ArticleDeleteError implements Action {
  readonly type = AppActionTypes.ArticleDeleteError;
}

// ===========================================================================================

export class PostUserAction implements Action {
  readonly type = AppActionTypes.PostUser;
  constructor(public payload: {user: UserModel}) {}
}

export class UserPostedAction implements Action {
  readonly type = AppActionTypes.UserPosted;
  constructor(public payload: {user: UserModel}) {}
}

export class UserPostErrorAction implements Action {
  readonly type = AppActionTypes.UserPostError;
}

// ========= za login ostalo da uradim, i da prepravim reducer poslije

export type AppActions = LoadAllArticlesAction
                        | AllArticlesLoadedAction
                        | AllArticlesLoadErrorAction
                        | LoadArticleByIdAction
                        | ArticleByIdLoadedAction
                        | ArticleByIdLoadErrorAction
                        | LoadAllCommentsForArticleAction
                        | AllCommentsForArticleLoadedAction
                        | AllCommentsForArticleLoadErrorAction
                        | PostCommentAction
                        | CommentPostedAction
                        | CommentPostErrorAction
                        | PostReplyToCommentAction
                        | ReplyPostedAction
                        | ReplyPostError
                        | DeleteCommentAction
                        | CommentDeletedAction
                        | CommentDeleteErrorAction
                        | DeleteReplyAction
                        | ReplyDeletedAction
                        | ReplyDeleteErrorAction
                        | PostArticleAction
                        | ArticlePostedAction
                        | ArticlePostErrorAction
                        | UpdateArticleAction
                        | ArticleUpdatedAction
                        | ArticleUpdateErrorAction
                        | DeleteArticleAction
                        | ArticleDeletedAction
                        | ArticleDeleteError
                        | PostUserAction
                        | UserPostedAction
                        | UserPostErrorAction;
