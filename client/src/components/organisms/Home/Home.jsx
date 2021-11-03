import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

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

const Home = () => {
  return (
    <Container>
      <Row>
        <MainContent>
          <Content>
            <ListGroup>
              <ListGroup.Item>
                <Link to="/streams/game">Total amount of streams per game</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/viewer/game/high">
                  Highest viewer count stream per game
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/viewer/median">
                  Median amount of viewers for all streams
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/streams/odd">
                  Streams with an odd number of viewers
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/streams/even">
                  Streams with an even number of viewers
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/streams/top100/asc">
                  top 100 streams that can be sorted asc
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/streams/top100/desc">
                  top 100 streams that can be sorted desc
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/viewer/same/count">same amount of viewers</Link>
              </ListGroup.Item>
            </ListGroup>
          </Content>
        </MainContent>
      </Row>
    </Container>
  );
};

export default Home;
