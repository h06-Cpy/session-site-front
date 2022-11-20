import { Button, Col, Container, Row, Table } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { PostList } from "../types";
import { Link } from "react-router-dom";
import DateTimeParser from "../DateTimeParser";

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

  useEffect(() => {
    fetchPosts();
  }, []);

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
              <th>댓글수</th>
              <th>작성일시</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr>
                <td>
                  <Link to={`/${post.postId}`}>{post.title}</Link>
                </td>
                <td>{post.commentNum}</td>
                <td>{DateTimeParser(post.createdDate)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="light" onClick={fetchPosts}>
          다시 불러오기
        </Button>
      </Container>
    </div>
  );
}

export default Board;
