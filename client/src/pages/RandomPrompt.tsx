import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "reactstrap";
import api from "../utils/api"
import { errorCatch } from "../utils/helpers";

const apiUrl = "randomPrompt";

interface randomPromptResponse {
  status: number;
  data: {name: string};
}

const RandomPrompt = () => {
  const [randomPrompt, setRandomPrompt] = useState({name: ""});

  useEffect(() => {
    getRandomPrompt();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getRandomPrompt = () => {
    api.get(api.baseUrl + "/" + apiUrl)
      .then((r: randomPromptResponse) => {
        if (r.status === 200) {
          setRandomPrompt(r.data);
        }
      })
      .catch((e: string) => {
        errorCatch(e);
      });
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <Card className="todays-card">
            <Row className="todays-header">
              <Col>Random Prompt</Col>
            </Row>
            <Row className="todays-owp">
              <Col>{randomPrompt.name}</Col>
            </Row>
            <Row>
              <Col xs="12" sm="12" md="6" className="links">
                <a href={`http://www.dictionary.com/browse/${randomPrompt.name}`}>
                  dictionary.com
                </a>
              </Col>
              <Col xs="12" sm="12" md="6" className="links">
                <a href={`http://www.thesaurus.com/browse/${randomPrompt.name}`}>
                  thesaurus.com
                </a>
              </Col>
            </Row>
            <Row style={{textAlign: "center"}} className="mt-4">
              <Col>
                <Button onClick={getRandomPrompt} className="button-reload">
                  I don't like that one, give me a new one
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RandomPrompt;