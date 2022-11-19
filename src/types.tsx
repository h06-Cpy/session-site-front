export type Comment = {
  commentContent: string;
  commentDate: string;
};
export type Post = {
  postTitle: string;
  postContent: string;
  postDate: string;
  comments: Comment[];
};
export type PostList = {
  postId: number;
  title: string;
  date: string;
  commentNum: number;
};
