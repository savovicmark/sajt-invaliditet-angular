import { Action } from '@ngrx/store';
import { ArticleModel } from '../Models/article.model';
import { CommentModel } from '../Models/comment.model';
import { Update } from '@ngrx/entity';

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
  ReplyPostError = '[API] Reply Post Error'
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
  constructor(public payload: {comment: CommentModel}) {}
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
                        | ReplyPostError;
