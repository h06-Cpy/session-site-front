import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const WritePost = () => {
  const navigate = useNavigate(); //navigate for redirect after form submit

  const [title, setTitle] = useState<String>();
  const [content, setContent] = useState<String>();
  const [board, setBoard] = useState<String>("smalltalk");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value as String);
  };
  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.currentTarget.value as String);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBoard(event.currentTarget.id);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/post", {
        board: `${board}`,
        title: `${title}`,
        content: `${content}`,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
    navigate(0);
  };

  return (
    <div>
      <Container>
        <Form className="my-3" onSubmit={handleSubmit}>
          <Form.Group controlId="postTitle">
            <Form.Control
              required
              type="text"
              size="lg"
              placeholder="제목"
              onChange={handleTitleChange}
            />
          </Form.Group>
          <hr></hr>
          <Form.Group controlId="postContent">
            <Form.Control
              required
              as="textarea"
              placeholder="내용"
              rows={7}
              onChange={handleContentChange}
            />
          </Form.Group>

          <div key={"inline-radio"}>
            <Form.Check
              inline
              type="radio"
              id="main"
              name="group1"
              label="공지방에"
              onChange={handleRadioChange}
              required
            />
            <Form.Check
              inline
              type="radio"
              id="smalltalk"
              name="group1"
              label="잡담방에"
              onChange={handleRadioChange}
            />
          </div>

          <Button className="my-3" variant="dark" type="submit">
            글쓰기
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default WritePost;
