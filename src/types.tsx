export type Comment = {
  content: string;
  createdDate: string;
};
export type Post = {
  postTitle: string;
  postContent: string;
  createdDate: string;
  comments: Comment[];
};
export type PostList = {
  postId: number;
  title: string;
  createdDate: string;
  commentNum: number;
};
