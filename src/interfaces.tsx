export interface Comment {
  content: string;
  createdDate: string;
}

export interface Post {
  postTitle: string;
  postContent: string;
  createdDate: string;
  comments: Comment[];
}

export interface PostList {
  postId: number;
  title: string;
  createdDate: string;
  commentNum: number;
}
