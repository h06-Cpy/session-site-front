import { Container, Form, Button } from "react-bootstrap";
import { Post } from "../interfaces";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import DateTimeParser from "../DateTimeParser";

function Detail() {
  //react hooks must be on top!
  const { id } = useParams();
  const [post, setPost] = useState<Post>();
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState<String>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPost();
  }, []);

  if (id === undefined) {
    return (
      <div>
        <h2>id error</h2>
      </div>
    );
  }

  const fetchPost = async () => {
    try {
      setPost(undefined);
      setLoading(true);
      const response = await axios.get(`http://localhost:8080/post?id=${id}`);
      setPost(response.data);
    } catch (e) {
      return <div>error occured</div>;
    }
    setLoading(false);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.currentTarget.value as String);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/comment", {
        content: `${comment}`,
        postId: parseInt(id),
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate(0);
  };

  if (loading) return <div>loading</div>;
  if (post === undefined) return <div>data can't be loaded</div>;

  return (
    <div>
      <Container className="my-3">
        <h1>{post?.postTitle}</h1>
        <hr></hr>
        <p>{post?.postContent}</p>
        <p>{DateTimeParser(post?.createdDate)}</p>
        <Form className="my-3" onSubmit={handleSubmit}>
          <Form.Group controlId="commentContent">
            <Form.Control
              required
              as="textarea"
              placeholder="댓글"
              rows={3}
              onChange={handleContentChange}
            />
          </Form.Group>
          <Button className="my-3" variant="dark" type="submit">
            댓글쓰기
          </Button>
        </Form>
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
