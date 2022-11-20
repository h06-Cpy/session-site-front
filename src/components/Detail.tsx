import { Col, Container, Row } from "react-bootstrap";
import { Post } from "../interfaces";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DateTimeParser from "../DateTimeParser";

function Detail() {
  const { id } = useParams();
  const [post, setPost] = useState<Post>();
  const [loading, setLoading] = useState(false);

  const fetchPost = async () => {
    try {
      setPost(undefined);
      setLoading(true);
      const response = await axios.get(`http://localhost:8080/${id}`);
      setPost(response.data);
    } catch (e) {
      return <div>error occured</div>;
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchPost();
  }, []);

  if (loading) return <div>loading</div>;
  if (post === undefined) return <div>data can't be loaded</div>;

  return (
    <div>
      <Container>
        <h1>{post?.postTitle}</h1>
        <hr></hr>
        <p>{post?.postContent}</p>
        <p>{DateTimeParser(post?.createdDate)}</p>
        <h3>댓글 {post?.comments.length}개</h3>
        <hr></hr>
        {post?.comments.map((comment) => {
          return (
            <div key={comment.createdDate}>
              <p>{comment.content}</p>
              <p>{DateTimeParser(comment.createdDate)}</p>
              <hr></hr>
            </div>
          );
        })}
      </Container>
    </div>
  );
}

export default Detail;
