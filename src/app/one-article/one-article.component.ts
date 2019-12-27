import { Component, OnInit } from '@angular/core';
import { ArticleModel } from '../Models/article.model';
import { baseUrl } from '../../environments/environment';
import { CommentModel } from '../Models/comment.model';
import { ActivatedRoute } from '@angular/router';
import { map, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app-store/app.reducers';
import { selectArticleById, selectAllCommentsForArticle, selectUser } from '../app-store/app.selectors';
import { LoadArticleByIdAction, PostCommentAction } from '../app-store/app.actions';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { UserModel } from '../Models/user.model';

@Component({
  selector: 'app-one-article',
  templateUrl: './one-article.component.html',
  styleUrls: ['./one-article.component.scss']
})
export class OneArticleComponent implements OnInit {

  baseUrl = baseUrl;
  article: ArticleModel;
  viewComments = false;
  comments: CommentModel[];
  postComment: FormControl = new FormControl('');
  user: UserModel;

  constructor(private route: ActivatedRoute,
              private store: Store<AppState>,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.article = data.article);
    this.route.params.pipe(
      map(params => params.articleId),
      switchMap(articleId => this.store.select(selectAllCommentsForArticle(articleId)))
    ).subscribe(comments => this.comments = comments);
    this.store.pipe(select(selectUser)).subscribe(user => this.user = user);
  }

  toggleComments() {
    this.viewComments = !this.viewComments;
  }

  postNewComment() {
    this.store.dispatch(new PostCommentAction({comment: {
      text: this.postComment.value,
      articleId: this.article._id,
      userId: this.user._id // ovo ce ic iz storea user
    }}));
    this.postComment.reset();
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px'
    });
  }

}
