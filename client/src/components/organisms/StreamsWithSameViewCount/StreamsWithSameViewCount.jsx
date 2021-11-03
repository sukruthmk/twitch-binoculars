import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import Table from "../../atoms/Table";
import { BASE_API_URL } from "../../../constants/API";

const StreamsWithSameViewCount = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${BASE_API_URL}/viewer/same/count`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  const columns = [
    {
      Header: `Streams with same viewer count`,
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

export default StreamsWithSameViewCount;
