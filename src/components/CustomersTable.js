import React from "react";
import { Table } from "react-bootstrap-v5";

export const CustomersTable = () => {
  return (
    <div className="shadow shadow-sm rounded p-4">
      <h1 className="display-5 text-center">Customers</h1>
      <Table hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Pending</th>
            <th>Orders</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Abdul Fatah</td>
            <td>0313-3491905</td>
            <td>3</td>
            <td>Rs. 1200</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
