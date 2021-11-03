import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import Table from "../../atoms/Table";
import { BASE_API_URL } from "../../../constants/API";

const ShowMedianViewer = () => { const [data, setData] = useState([]);
useEffect(() => {
  fetch(`${BASE_API_URL}/viewer/median`)
    .then((response) => response.json())
    .then((data) => setData(data));
}, []);
const columns = [
  {
    Header: "Median stream",
    columns: [
      {
        Header: "Median viewer count",
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
);};

export default ShowMedianViewer;
