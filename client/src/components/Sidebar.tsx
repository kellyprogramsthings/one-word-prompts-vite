import * as React from "react"
import { Link } from "react-router-dom";
import { Card, Col, Container, Nav, Navbar, NavItem, Row } from "reactstrap";

type props = {
  children: React.ReactNode;
}

const Sidebar = ({ children }: props) => {
  // TODO: collapse for mobile

  return (
    <Container>
      <Row>
        <Col sm="3">
          <Card>
            <Navbar color="light" className="nav-links">
              <Link to="/">One Word Prompts</Link>
              <Nav vertical className="nav-links">
                <hr />
                <NavItem>
                  <Link to="/about">About</Link>
                </NavItem>
                <NavItem>
                  <Link to="/previousprompts">Previous Prompts</Link>
                </NavItem>
                <NavItem>
                  <Link to="/randomprompt">Prompt Generator</Link>
                </NavItem>
                <NavItem>
                  <Link to="/othersites">Other Prompt Sites</Link>
                </NavItem>
              </Nav>
            </Navbar>
          </Card>
        </Col>
        <Col>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;