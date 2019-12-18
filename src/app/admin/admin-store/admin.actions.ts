import { Action } from '@ngrx/store';
import { ArticleModel } from 'src/app/Models/article.model';
import { Update } from '@ngrx/entity';


export enum AdminActionTypes {
  PostArticle = '[Admin] Post Article',
  ArticlePosted = '[API] Article Posted',
  ArticlePostError = '[API] Article Post Error',
  UpdateArticle = '[Admin] Update Article',
  ArticleUpdated = '[API] Article Updated',
  ArticleUpdateError = '[API] Article Update Error',
  DeleteArticle = '[Admin] Delete Article',
  ArticleDeleted = '[API] Article Deleted',
  ArticleDeleteError = '[API] Article Delete Error'
}

export class PostArticleAction implements Action {
  readonly type = AdminActionTypes.PostArticle;
  constructor(public payload: {article: ArticleModel}) {}
}

export class ArticlePostedAction implements Action {
  readonly type = AdminActionTypes.ArticlePosted;
  constructor(public payload: {article: ArticleModel}) {}
}

export class ArticlePostErrorAction implements Action {
  readonly type = AdminActionTypes.ArticlePostError;
}

export class UpdateArticleAction implements Action {
  readonly type = AdminActionTypes.UpdateArticle;
  constructor(public payload: {articleId: string, article: ArticleModel}) {}
}

export class ArticleUpdatedAction implements Action {
  readonly type = AdminActionTypes.ArticleUpdated;
  constructor(public payload: Update<ArticleModel>) {}
}

export class ArticleUpdateErrorAction implements Action {
  readonly type = AdminActionTypes.ArticleUpdateError;
}

export class DeleteArticleAction implements Action {
  readonly type = AdminActionTypes.DeleteArticle;
  constructor(public payload: {articleId: string}) {}
}

export class ArticleDeletedAction implements Action {
  readonly type = AdminActionTypes.ArticleDeleted;
  constructor(public payload: {articleId: string}) {}
}

export class ArticleDeleteError implements Action {
  readonly type = AdminActionTypes.ArticleDeleteError;
}

export type AdminActions = PostArticleAction
                          | ArticlePostedAction
                          | ArticlePostErrorAction
                          | UpdateArticleAction
                          | ArticleUpdatedAction
                          | ArticleUpdateErrorAction
                          | DeleteArticleAction
                          | ArticleDeletedAction
                          | ArticleDeleteError;
