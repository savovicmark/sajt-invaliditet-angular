import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as adminActions from './admin.actions';
import { exhaustMap, map, catchError, exhaust } from 'rxjs/operators';
import { ArticleService } from 'src/app/services/article.service';
import { of } from 'rxjs';



@Injectable()
export class AdminEffects {
  constructor(private actions$: Actions,
              private articleService: ArticleService) {}

  @Effect()
  PostComment$ = this.actions$.pipe(
    ofType<adminActions.PostArticleAction>(adminActions.AdminActionTypes.PostArticle),
    exhaustMap(action => this.articleService.postArticle(action.payload.article).pipe(
      map(article => new adminActions.ArticlePostedAction({article})),
      catchError(err => of(new adminActions.ArticlePostErrorAction()))
    ))
  );

  @Effect()
  UpdateArticle$ = this.actions$.pipe(
    ofType<adminActions.UpdateArticleAction>(adminActions.AdminActionTypes.UpdateArticle),
    exhaustMap(action => this.articleService.updateArticleById(action.payload.articleId, action.payload.article).pipe(
      map(article => new adminActions.ArticleUpdatedAction({id: article._id, changes: article})),
      catchError(err => of(new adminActions.ArticleUpdateErrorAction()))
    ))
  );

  @Effect()
  DeleteArticle$ = this.actions$.pipe(
    ofType<adminActions.DeleteArticleAction>(adminActions.AdminActionTypes.DeleteArticle),
    exhaustMap(action => this.articleService.deleteArticleById(action.payload.articleId).pipe(
      map(article => new adminActions.ArticleDeletedAction({articleId: article._id})),
      catchError(err => of(new adminActions.ArticleDeleteError()) )
    ))
  );
}
