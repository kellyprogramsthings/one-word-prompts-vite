import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Col, Input, Row } from "reactstrap";
import { login } from "../utils/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //const [forwarding, setForwarding] = useState(false);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (!username || !password) return;
    setLoading(true);

    login(username, password).then(
      isLoggedIn => {
        if (isLoggedIn === true) {
          navigate("/");
        }
        else {
          setLoading(false);
        }
      }
    )
  };

  return (
    <Fragment>
      <Container>
        <Card>
          <Row>
            <Col>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                />
              </div>   
            </Col>           
          </Row>
          <Row>
            <Col>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="form-group">
                <Button
                  disabled={loading}
                  onClick={handleLogin}
                >
                  {loading 
                    ? <span className="spinner-border spinner-border-sm"></span>
                    : <span>Login</span>
                  }
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </Fragment>
  );
};

export default Login;