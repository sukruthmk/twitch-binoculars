import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import Table from "../../atoms/Table";
import { BASE_API_URL } from "../../../constants/API";

const ShowStreams = ({ type }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      type === "odd"
        ? `${BASE_API_URL}/streams/odd`
        : `${BASE_API_URL}/streams/even`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [type]);
  const columns = [
    {
      Header: `Streams with ${type} number of views`,
      columns: [
        {
          Header: "Title",
          accessor: "title",
        },
        {
          Header: "Game name",
          accessor: "game_name",
        },
        {
          Header: "Viewer count",
          accessor: "viewer_count",
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

export default ShowStreams;
