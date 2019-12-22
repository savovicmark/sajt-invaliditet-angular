import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app-store/app.reducers';
import { selectVijesti } from '../app-store/app.selectors';
import { tap } from 'rxjs/operators';
import { LoadAllArticlesAction } from '../app-store/app.actions';
import { ArticleModel } from '../Models/article.model';

@Component({
  selector: 'app-vijesti',
  templateUrl: './vijesti.component.html',
  styleUrls: ['./vijesti.component.scss']
})
export class VijestiComponent implements OnInit {

  vijesti: ArticleModel[];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(
      select(selectVijesti),
      tap(vijesti => {
        if (vijesti.length === 0) {
          this.store.dispatch(new LoadAllArticlesAction());
        }
      })
    ).subscribe(vijesti => this.vijesti = vijesti);
  }

}
