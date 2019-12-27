import { Component, OnInit, Input } from '@angular/core';
import { CommentModel, ReplyModel } from '../Models/comment.model';
import { FormControl } from '@angular/forms';
import { AppState } from '../app-store/app.reducers';
import { PostReplyToCommentAction, DeleteReplyAction } from '../app-store/app.actions';
import { Store, select } from '@ngrx/store';
import { UserModel } from '../Models/user.model';
import { selectUser } from '../app-store/app.selectors';

@Component({
  selector: 'app-odgovor',
  templateUrl: './odgovor.component.html',
  styleUrls: ['./odgovor.component.scss']
})
export class OdgovorComponent implements OnInit {

  @Input()
  reply: ReplyModel;
  /*@Input()
  userId: string; // nece bit input nego iz stora koji je user, jer odje ga vuce iz one article comp*/
  @Input()
  commentId: string;
  odgovor = false;
  odg = new FormControl('');
  user: UserModel;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select(selectUser)).subscribe(user => this.user = user);
  }

  sendReply() {
    this.store.dispatch(new PostReplyToCommentAction({userId: this.user._id, commentId: this.commentId, text: this.odg.value}));
    this.odg.reset();
  }

  deleteReply() {
    this.store.dispatch(new DeleteReplyAction({commentId: this.commentId, replyId: this.reply._id}));
  }

}
