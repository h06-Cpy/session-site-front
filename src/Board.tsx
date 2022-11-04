import { Button, Col, Container, Row, Table } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

type PostList = {
  title: string;
  date: string;
  commentsNum: number;
};

function Board() {
  const [posts, setPosts] = useState<PostList[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      setPosts([]);
      setLoading(true);
      const response = await axios.get("http://localhost:8080");
      setPosts(response.data);
    } catch (e) {
      return <div>error occured</div>;
    }
    setLoading(false);
  };

  if (loading) return <div>loading</div>;

  return (
    <div>
      <Container className="my-3">
        <div>
          <Row>
            <Col>
              <Button variant="dark">글쓰기</Button>
            </Col>
            <Col>
              <input type="text" id="find" />
              <a href=".">
                <button>찾기</button>
              </a>
            </Col>
          </Row>
        </div>
        <Table>
          <thead>
            <tr>
              <th>제목</th>
              <th>댓글</th>
              <th>작성일시</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr>
                <td>{post.title}</td>
                <td>{post.date}</td>
                <td>{post.commentsNum}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Board;
