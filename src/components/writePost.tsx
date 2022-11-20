import React, { BaseSyntheticEvent, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControlProps,
  FormControl,
} from "react-bootstrap";

const WritePost = () => {
  const [title, setTitle] = useState<String>();
  const [content, setContent] = useState<String>();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value as String);
  };
  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.currentTarget.value as String);
  };
  const handleSubmit = () => {};

  return (
    <div>
      <Container>
        <Form className="my-3">
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
          <Button className="my-3" variant="dark" type="submit">
            글쓰기
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default WritePost;
