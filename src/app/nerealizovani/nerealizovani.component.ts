import { Component, OnInit } from '@angular/core';
import { ArticleModel } from '../Models/article.model';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app-store/app.reducers';
import { selectNerealizovanProjekti } from '../app-store/app.selectors';
import { tap } from 'rxjs/operators';
import { LoadAllArticlesAction } from '../app-store/app.actions';

@Component({
  selector: 'app-nerealizovani',
  templateUrl: './nerealizovani.component.html',
  styleUrls: ['./nerealizovani.component.scss']
})
export class NerealizovaniComponent implements OnInit {

  projekti: ArticleModel[];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(
      select(selectNerealizovanProjekti),
      tap(projekti => {
        if (projekti.length === 0) {
          this.store.dispatch(new LoadAllArticlesAction());
        }
      })
    ).subscribe(projekti => this.projekti = projekti);
  }

}
