import { Card, Col, Container, Row } from "reactstrap";

const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <p>
              Back in the day, when LiveJournal was still a thing, I often saw <a 
              href="https://100-prompts.livejournal.com/692.html">prompt tables</a> floating 
              around. They were generally for specific things, graphics or writing or whatnot, 
              but what I liked about them was they were usually generic enough that they could 
              be used for anything.
            </p>
            <p>
              The ones I see these days are generally very specific. A lot of them are for 
              writing about yourself, or contain an entire plotline for a new story. Some of 
              them have a single list and nothing else. Others have long since been abandoned.
            </p>
            <p>
              I wanted something that would pick a word for me each day. Not a list where I
              would have too many options at once. I wanted something that would give me
              alternate choices if I didn't like the presented prompt. I wanted it to be generic
              enough that I could apply it to different things: writing, art, graphics, music, and
              anything else creative.
            </p>
            <p>
              I hope in the future to have more types of prompts, but until then, have some
              One Word Prompts.
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default About;