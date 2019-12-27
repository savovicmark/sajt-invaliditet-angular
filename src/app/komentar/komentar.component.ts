import { Component, OnInit, Input } from '@angular/core';
import { CommentModel } from '../Models/comment.model';
import { FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app-store/app.reducers';
import { PostReplyToCommentAction, DeleteCommentAction } from '../app-store/app.actions';
import { UserModel } from '../Models/user.model';
import { selectUser } from '../app-store/app.selectors';

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
  user: UserModel;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select(selectUser)).subscribe(user => this.user = user);
  }

  sendReply(commentId: string) {
    this.store.dispatch(new PostReplyToCommentAction({userId: this.user._id, commentId, text: this.odg.value}));
    this.odg.reset();
  }
  deleteComment(commentId: string) {
    this.store.dispatch(new DeleteCommentAction({commentId}));
  }

}
