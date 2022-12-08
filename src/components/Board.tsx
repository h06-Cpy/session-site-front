import { Button, Col, Container, Row, Table } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { PostList } from "../interfaces";
import { Form, Link, useParams } from "react-router-dom";
import DateTimeParser from "../DateTimeParser";

function Board() {
  let { board } = useParams();
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<PostList[]>([]);
  const [loading, setLoading] = useState(false);

  if (board === undefined) board = "";

  const fetchPosts = async () => {
    try {
      setPosts([]);
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8080/${board}?page=${page}&size=10`
      );
      setPosts(response.data);
    } catch (e) {
      return <div>error occured</div>;
    }
    setLoading(false);
  };

  const handlePageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(event.currentTarget.valueAsNumber);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [board, page]);

  if (loading) return <div>loading</div>;

  return (
    <div>
      <Container className="my-3">
        <div>
          <Row>
            <Col>
              <Link to={"/newPost"}>
                <Button variant="dark">글쓰기</Button>
              </Link>
            </Col>
            <Col>
              <input className="mx-1" type="text" id="find" />
              <button>찾기</button>
            </Col>
          </Row>
        </div>
        <Table>
          <thead>
            <tr>
              <th>제목</th>
              <th>댓글</th>
              <th>작성 일시</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.postId}>
                <td>
                  <Link to={`/post/${post.postId}`}>{post.title}</Link>
                </td>
                <td>{post.commentNum}</td>
                <td>{DateTimeParser(post.createdDate)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="light" className="mb-3" onClick={fetchPosts}>
          다시 불러오기
        </Button>
        <div>
          <input
            className="mx-1"
            type="number"
            id="page"
            defaultValue={page}
            min="0"
            onChange={handlePageChange}
          />
          <label htmlFor="page">페이지</label>
        </div>
      </Container>
    </div>
  );
}

export default Board;
