import React from "react";
import { Card, CardHeader, CardBody, TableEditable } from "mdbreact";

const columns = ["Person Name", "Age", "Company Name", "Country", "City"];

const data = [
  ["Aurelia Vega", 30, "Deepends", "Spain", "Madrid"],
  ["Guerra Cortez", 45, "Insectus", "USA", "San Francisco"],
  ["Guadalupe House", 26, "Isotronic", "Germany", "Frankfurt am Main"],
  ["Elisa Gallagher", 31, "Portica", "United Kingdom", "London"]
];

const TableEditablePage = props => {
  return (
    <Card>
      <CardHeader
        tag="h3"
        className="text-center font-weight-bold text-uppercase py-4"
      >
        Table Editable
      </CardHeader>
      <CardBody>
        <TableEditable data={data} columns={columns} striped bordered />
      </CardBody>
    </Card>
  );
};

export default TableEditablePage;