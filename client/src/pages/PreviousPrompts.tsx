import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Table } from "reactstrap";
import * as _ from "lodash";
import api from "../utils/api";
import { errorCatch } from "../utils/helpers";

interface prompt {
  id: number,
  date: Date,
  promptName: string
}

interface previousPromptResponse {
  status: number;
  data: [];
}

const PreviousPrompts = () => {
  const [previousPrompts, setPreviousPrompts] = useState([]);

  useEffect(() => {
    getPreviousPrompts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getPreviousPrompts = () => {
    api.get(api.baseUrl + "/multiDayPrompts")
      .then((r: previousPromptResponse) => {
        if (r.status === 200) {
          setPreviousPrompts(r.data);
        }
      })
      .catch((e: string) => {
        errorCatch(e);
      });
  }

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Table>
              <tbody>
                {_.map(previousPrompts, (p: prompt) => {
                  return(<tr key={p.id}><td>{p.date.toString()}</td><td>{p.promptName}</td></tr>);
                })}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default PreviousPrompts;