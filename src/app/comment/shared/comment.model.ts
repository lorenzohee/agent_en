export class Comment {
    id: Number;
    body: String;
    commentable_id: Number;
    commentable_type: String;
    parent_comment_id: Number;
    to: Number;
    child: Array<any>;
}
