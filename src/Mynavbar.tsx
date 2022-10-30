import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";

function Mynavbar() {
  return (
    <div>
      <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href=".">Session</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#잡담방">잡담방(익명)</Nav.Link>
            <Nav.Link href="#퀴즈">퀴즈</Nav.Link>
          </Nav>
          <Nav className="d-flex">
            <Nav.Link href="#회원가입">회원가입</Nav.Link>
            <Nav.Link href="#로그인">로그인</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Mynavbar;
