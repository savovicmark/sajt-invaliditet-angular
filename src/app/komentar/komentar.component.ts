import { Component, OnInit, Input } from '@angular/core';
import { CommentModel } from '../Models/comment.model';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app-store/app.reducers';
import { PostReplyToCommentAction } from '../app-store/app.actions';

@Component({
  selector: 'app-komentar',
  templateUrl: './komentar.component.html',
  styleUrls: ['./komentar.component.scss']
})
export class KomentarComponent implements OnInit {

  @Input()
  comment: CommentModel;
  odgovor = false;
  odg = new FormControl('');

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  sendReply(userId: string, commentId: string) {
    this.store.dispatch(new PostReplyToCommentAction({userId, commentId, text: this.odg.value}));
    this.odg.reset();
  }

}
