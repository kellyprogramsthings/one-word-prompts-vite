import { Card, Col, Container, Row } from "reactstrap";

const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <p>
              Here are some other prompt sites that I find interesting.
            </p>
            <p>
              <ul>
                <li>
                  <a 
                    href="https://blog.reedsy.com/creative-writing-prompts/"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    1100+ Creative Writing Prompts To Inspire You Right Now
                  </a>
                </li>
                <li>
                  <a 
                    href="https://blog.reedsy.com/plot-generator/"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Plot Generator • The Ultimate Bank of 500,000+ Plots
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.servicescape.com/writing-prompt-generator"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Writing Prompt Generator | 1,153 Fiction Story Ideas
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.reddit.com/r/WritingPrompts/"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Prompts and motivation to create something out of nothing (reddit)
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.writersdigest.com/prompts"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Creative Writing Prompts - Writer's Digest
                  </a>
                </li>
                <li>
                  <a 
                    href="https://writing-prompt-s.tumblr.com/tagged/writing%20prompts"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Writing Prompts (tumblr)
                  </a>
                </li>
              </ul>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default About;