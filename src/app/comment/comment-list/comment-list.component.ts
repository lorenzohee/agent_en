import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {Comment} from '../shared/comment.model';
import { FormBuilder, Validators } from '@angular/forms';
import { CommentService } from '../shared/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @ViewChild('commentText') commentText;
  @Input() comments: Comment[];
  @Input() demandId: Number;
  comment: Comment;
  replyCommentId: Number;
  replyToId: Number;

  commentForm = this.fb.group({
    body: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private commentService: CommentService) { }

  ngOnInit() {
  }

  onCommentSubmit() {
    this.comment = this.commentForm.value;
    this.comment.commentable_id = this.demandId;
    this.comment.commentable_type = 'Blog';
    this.comment.parent_comment_id = this.replyCommentId;
    this.comment.to = this.replyToId;
    this.commentService.createComment(this.comment).subscribe(res => {
      if (res.parent_comment_id) {
        this.comments.forEach((v, i) => {
          if (res.parent_comment_id === v.id) {
            v.child = (v.child || []).concat([res]);
            return false;
          }
        });
      } else {
        this.comments = [res].concat(this.comments);
      }
      this.replyCommentId = null;
      this.commentForm = this.fb.group({
        body: ['', Validators.required]
      });
    });
  }

  replyComment(id: Number, user_name: String, replyto: Number) {
    this.replyCommentId = id;
    this.replyToId = replyto;
    this.commentForm = this.fb.group({
      body: [`@${user_name} `, Validators.required]
    });
    this.commentText.nativeElement.focus();
  }

}
