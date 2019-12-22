import { Component, OnInit } from '@angular/core';
import { ArticleModel } from '../Models/article.model';
import { baseUrl } from '../../environments/environment';
import { CommentModel } from '../Models/comment.model';
import { ActivatedRoute } from '@angular/router';
import { map, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app-store/app.reducers';
import { selectArticleById, selectAllCommentsForArticle } from '../app-store/app.selectors';
import { LoadArticleByIdAction, PostCommentAction } from '../app-store/app.actions';
import { FormControl } from '@angular/forms';

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

  constructor(private route: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.article = data.article);
    this.route.params.pipe(
      map(params => params.articleId),
      switchMap(articleId => this.store.select(selectAllCommentsForArticle(articleId)))
    ).subscribe(comments => this.comments = comments);
  }

  toggleComments() {
    this.viewComments = !this.viewComments;
  }

  postNewComment() {
    this.store.dispatch(new PostCommentAction({comment: {
      text: this.postComment.value,
      articleId: this.article._id,
      userId: '5df07374cab84d18e8a28366'
    }}));
    this.postComment.reset();
  }

}
