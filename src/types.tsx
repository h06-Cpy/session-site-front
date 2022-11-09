export type Comment = {
  content: string;
  date: string;
  post: Post;
};
export type Post = {
  board: string;
  title: string;
  content: string;
  date: string;
  comments: Comment[];
};
export type PostList = {
  title: string;
  date: string;
  commentNum: number;
};
