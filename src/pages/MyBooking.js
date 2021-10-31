import React, { useEffect, useState } from "react";
import ExtraHeader from "../components/Header/ExtraHeader";
import useAuth from "../hooks/useAuth";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const MyBooking = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`https://vast-beach-32401.herokuapp.com/myorders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [loading]);

  const handleDeleteOrder = (id) => {
    alert("are you sure to cancel this trip");
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
        <h1 className=''>My Bookings: {myOrders.length}</h1>
        <h5>Your Booking list Down below</h5>
      </ExtraHeader>
      <div className='container-fluid mt-5'>
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>#</th>
              <th>Plan Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className=''>
            {myOrders.map((orders, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{orders.name}</td>
                <td>{orders.email}</td>
                <td>{orders.status}</td>
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

export default MyBooking;
