import { Button, Col, Container, Row, Table } from "react-bootstrap";

function Board() {
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
              <th>작성일시</th>
            </tr>
          </thead>
        </Table>
      </Container>
    </div>
  );
}

export default Board;
