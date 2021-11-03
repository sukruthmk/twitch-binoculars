import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import Table from "../../atoms/Table";
import {BASE_API_URL} from '../../../constants/API'

const ShowHighestViewPerGame = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch(`${BASE_API_URL}/viewer/game/high`)
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);
    const columns = [
      {
        Header: "Streams per game",
        columns: [
          {
            Header: "Game name",
            accessor: "game_name",
          },
          {
            Header: "Max viewer count",
            accessor: "max_viewer_count",
          },
        ],
      },
    ];
    return (
      <Container>
        <Row>
          <Table columns={columns} data={data} />
        </Row>
      </Container>
    );
};

export default ShowHighestViewPerGame;
