import { Component, OnInit } from '@angular/core';
import { ArticleModel } from '../Models/article.model';
import { AppState } from '../app-store/app.reducers';
import { Store, select } from '@ngrx/store';
import { LoadAllArticlesAction } from '../app-store/app.actions';
import { tap } from 'rxjs/operators';
import { selectRealizovaniProjekti } from '../app-store/app.selectors';

@Component({
  selector: 'app-realizovani',
  templateUrl: './realizovani.component.html',
  styleUrls: ['./realizovani.component.scss']
})
export class RealizovaniComponent implements OnInit {

  projekti: ArticleModel[];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(
      select(selectRealizovaniProjekti),
      tap(projekti => {
        if (projekti.length === 0) {
          this.store.dispatch(new LoadAllArticlesAction());
        }
      })
    ).subscribe(projekti => this.projekti = projekti);
  }

}
