import React, { useEffect, useState } from "react";
import ExtraHeader from "../components/Header/ExtraHeader";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://vast-beach-32401.herokuapp.com/allorders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [loading]);
  const handleDeleteOrder = (id) => {
    fetch(`https://vast-beach-32401.herokuapp.com/deleteorders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setLoading(true);
        }
      });
  };
  return (
    <div className='container'>
      <ExtraHeader>
        <h1>Manage orders{allOrders.length}</h1>
      </ExtraHeader>

      <div className='container-fluid mt-5'>
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>#</th>
              <th>Plan Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className=''>
            {allOrders.map((orders, index) => (
              <tr className='' key={index}>
                <td>{index + 1}</td>
                <td>{orders.name}</td>
                <td>{orders.email}</td>
                <td>{orders.status}</td>
                <td>
                  <Button>Update Status</Button>
                </td>
                <td>
                  <Button onClick={() => handleDeleteOrder(orders._id)}>
                    Delete Plan
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageOrders;
