import { Injectable } from '@angular/core';
import { Effect, ofType } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { ArticleService } from '../services/article.service';
import * as fromActions from '../app-store/app.actions';
import { mergeMap, map, catchError, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from '../services/user.service';
import { CommentService } from '../services/comment.service';

@Injectable()
export class AppEffects {

  constructor(private actions$: Actions,
              private articleService: ArticleService,
              private userService: UserService,
              private commentService: CommentService) {}

  @Effect()
  loadAllArticles$ = this.actions$.pipe(
    ofType<fromActions.LoadAllArticlesAction>(fromActions.AppActionTypes.LoadAllArticles),
    mergeMap(action => this.articleService.getAllArticles().pipe(
      map(articles => new fromActions.AllArticlesLoadedAction({articles})),
      catchError(err => of(new fromActions.AllArticlesLoadErrorAction()) )
    ))
  );
  @Effect()
  loadArticleById$ = this.actions$.pipe(
    ofType<fromActions.LoadArticleByIdAction>(fromActions.AppActionTypes.LoadArticleById),
    mergeMap(action => this.articleService.getArticleById(action.payload.articleId).pipe(
      map(article => new fromActions.ArticleByIdLoadedAction({article})),
      catchError(err => of (new fromActions.ArticleByIdLoadErrorAction()))
    ))
  );
  @Effect()
  loadAllCommentsForArticle$ = this.actions$.pipe(
    ofType<fromActions.LoadAllCommentsForArticleAction>(fromActions.AppActionTypes.LoadAllCommentsForArticle),
    mergeMap(action => this.commentService.getAllCommentsForArticle(action.payload.articleId).pipe(
      map(comments => new fromActions.AllCommentsForArticleLoadedAction({comments})),
      catchError(err => of (new fromActions.AllCommentsForArticleLoadErrorAction()))
    ))
  );
  @Effect()
  postComment$ = this.actions$.pipe(
    ofType<fromActions.PostCommentAction>(fromActions.AppActionTypes.PostComment),
    exhaustMap(action => this.commentService.postComment(action.payload.comment).pipe(
      map(comment => new fromActions.CommentPostedAction({comment})),
      catchError(err => of (new fromActions.CommentPostErrorAction()))
    ))
  );

  @Effect()
  PostReply$ = this.actions$.pipe(
    ofType<fromActions.PostReplyToCommentAction>(fromActions.AppActionTypes.PostReplyToComment),
    exhaustMap(action => this.commentService.postReplyToComment(action.payload.commentId, action.payload.userId, action.payload.text).pipe(
      map(comment => new fromActions.ReplyPostedAction({
        id: comment._id,
        changes: comment
      })),
      catchError(err => of (new fromActions.ReplyPostError()))
    ))
  );
  @Effect()
  DeleteComment$ = this.actions$.pipe(
    ofType<fromActions.DeleteCommentAction>(fromActions.AppActionTypes.DeleteComment),
    exhaustMap(action => this.commentService.deleteComment(action.payload.commentId).pipe(
      map(comment => new fromActions.CommentDeletedAction({commentId: comment._id})),
      catchError(err => of (new fromActions.CommentDeleteErrorAction())
    ))
  )
  );

  @Effect()
  DeleteReply$ = this.actions$.pipe(
    ofType<fromActions.DeleteReplyAction>(fromActions.AppActionTypes.DeleteReply),
    exhaustMap(action => this.commentService.deleteReply(action.payload.commentId, action.payload.replyId).pipe(
      map(comment => new fromActions.ReplyDeletedAction({id: comment._id, changes: comment})),
      catchError(err => of(new fromActions.ReplyDeleteErrorAction()))
    ))
  );

  // ============================ admin=======================================
  @Effect()
  PostComment$ = this.actions$.pipe(
    ofType<fromActions.PostArticleAction>(fromActions.AppActionTypes.PostArticle),
    exhaustMap(action => this.articleService.postArticle(action.payload.article).pipe(
      map(article => new fromActions.ArticlePostedAction({article})),
      catchError(err => of(new fromActions.ArticlePostErrorAction()))
    ))
  );

  @Effect()
  UpdateArticle$ = this.actions$.pipe(
    ofType<fromActions.UpdateArticleAction>(fromActions.AppActionTypes.UpdateArticle),
    exhaustMap(action => this.articleService.updateArticleById(action.payload.articleId, action.payload.article).pipe(
      map(article => new fromActions.ArticleUpdatedAction({id: article._id, changes: article})),
      catchError(err => of(new fromActions.ArticleUpdateErrorAction()))
    ))
  );

  @Effect()
  DeleteArticle$ = this.actions$.pipe(
    ofType<fromActions.DeleteArticleAction>(fromActions.AppActionTypes.DeleteArticle),
    exhaustMap(action => this.articleService.deleteArticleById(action.payload.articleId).pipe(
      map(article => new fromActions.ArticleDeletedAction({articleId: article._id})),
      catchError(err => of(new fromActions.ArticleDeleteError()) )
    ))
  );
  @Effect()
  PostUser$ = this.actions$.pipe(
    ofType<fromActions.PostUserAction>(fromActions.AppActionTypes.PostUser),
    exhaustMap(action => this.userService.postUser(action.payload.user).pipe(
      map(user => new fromActions.UserPostedAction({user})),
      catchError(err => of(new fromActions.UserPostErrorAction()))
    ))
  );
  @Effect()
  LoginUser$ = this.actions$.pipe(
    ofType<fromActions.LogInUserAction>(fromActions.AppActionTypes.LogInUser),
    exhaustMap(action => this.userService.loginUser(action.payload.username, action.payload.password).pipe(
      map(user => new fromActions.UserLoggedInAction({user})),
      catchError(err => of(new fromActions.UserLogInErrorAction()))
    ))
  );
}
