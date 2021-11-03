import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";

import { TWITCH_AUTH_URL } from "../../../constants/Auth";

const MainContent = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  overflow: auto;
`;
const Content = styled.div`
  margin: auto;
  max-height: 100%;
`;
const TextContainer = styled.div`
  margin-top: 15px;
  width: 100%;
  text-align: center;
`;

const Login = () => {
  return (
    <Container>
      <Row>
        <TextContainer>
          <h1>Welcome To Twitch Binoculars</h1>
          <p>A simple application to show analytics of top twitch streams</p>
        </TextContainer>
        <MainContent>
          <Content>
            <Button
              href={TWITCH_AUTH_URL}
              className="btn btn-social btn-twitch"
            >
              <span className="fa fa-twitch" /> Sign in with Twitch
            </Button>
          </Content>
        </MainContent>
      </Row>
    </Container>
  );
};

export default Login;
