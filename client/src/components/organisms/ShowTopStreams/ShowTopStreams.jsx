import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import Table from "../../atoms/Table";
import { BASE_API_URL } from "../../../constants/API";

const ShowTopStreams = ({sort}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch(
        sort === "asc"
          ? `${BASE_API_URL}/streams/top100/asc`
          : `${BASE_API_URL}/streams/top100/desc`
      )
        .then((response) => response.json())
        .then((data) => setData(data));
    }, [sort]);
    const columns = [
      {
        Header: `Top 100 streams sorted by viewer count in ${sort}`,
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

export default ShowTopStreams;
