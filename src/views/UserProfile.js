import React, { useState } from "react";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import TextEditor from "components/TextEditor";

function User() {
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState("");

  const handleAddRow = () => {
    if (newAnswer.trim() !== "") {
      setAnswers([...answers, { answer: newAnswer }]);
      setNewAnswer("");
    }
  };

  const handleRemoveRow = (index) => {
    const updatedAnswers = answers.filter((_, i) => i !== index);
    setAnswers(updatedAnswers);
  };

  const handleInputChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index].answer = value;
    setAnswers(updatedAnswers);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Create Question</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Question</label>
                        <TextEditor />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="align-items-center">
                    <Col md="5">
                      <Form.Group>
                        <label>Add Option</label>
                        <Form.Control
                          type="text"
                          placeholder="Type an option and click Add"
                          value={newAnswer}
                          onChange={(e) => setNewAnswer(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md="1" className="text-center mt-4">
                      <Button
                        variant="primary"
                        onClick={handleAddRow}
                        className="btn btn-sm"
                      >
                        Add
                      </Button>
                    </Col>
                  </Row>

                  {answers.map((answer, index) => (
                    <Row key={index} className="align-items-center">
                      <Col md="5">
                        <Form.Group>
                          <label> Option ({index + 1})</label>
                          <Form.Control
                            type="text"
                            placeholder="Edit Option"
                            value={answer.answer}
                            onChange={(e) =>
                              handleInputChange(index, e.target.value)
                            }
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col md="1" className="text-center">
                        <Button
                          className="btn btn-sm"
                          variant="danger"
                          onClick={() => handleRemoveRow(index)}
                        >
                          -
                        </Button>
                      </Col>
                    </Row>
                  ))}

                  <Row>
                    <Col md="5">
                      <Form.Group>
                        <label>Answer</label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Answer"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Answer Explanation</label>
                        <TextEditor />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Button
                        className="btn-fill pull-right"
                        type="submit"
                        variant="info"
                      >
                        Save Question
                      </Button>
                    </Col>
                  </Row>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;
