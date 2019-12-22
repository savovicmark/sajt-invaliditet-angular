import { Component, OnInit, Input } from '@angular/core';
import { ArticleModel } from '../Models/article.model';
import { baseUrl } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})
export class SingleArticleComponent implements OnInit {

  @Input()
  article: ArticleModel;
  baseUrl = baseUrl;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToVijest(id: string) {
    this.router.navigate(['/article', id]);
  }

}
