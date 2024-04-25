import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import AdminNavBar from "../Nav/NavBar";
import axios from "axios";

function EachPerson() {
  const [userData, setUserData] = useState({});
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);
  const [display, setDisplay] = useState("Orders");
  const { ID } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDataResponse = await axios.get(
          `http://localhost:7000/api/admin/users/${ID}`,
          { withCredentials: true }
        );
        setUserData(userDataResponse.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchCartData = async () => {
      try {
        const cartResponse = await axios.get(
          `http://localhost:7000/api/admin/cart/${ID}`,
          { withCredentials: true }
        );
        if (typeof cartResponse.data !== "string") {
          setCart(cartResponse.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const fetchOrderData = async () => {
      try {
        const orderResponse = await axios.get(
          `http://localhost:7000/api/admin/order/${ID}`,
          { withCredentials: true }
        );
        console.log(orderResponse.data);
        setOrder(orderResponse?.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
    fetchCartData();
    fetchOrderData();
  }, []);

  const viewCart = () => {
    setDisplay("Cart");
  };

  const viewOrders = () => {
    setDisplay("Orders");
  };

  const completePurchase = async (_id) => {
    const id = _id;
    console.log(id);
    await axios.delete(`http://localhost:7000/api/admin/order/${id}`,{withCredentials:true});
    window.location.reload();
  };

  return (
    <div className="vh-100 d-flex flex-column">
      <AdminNavBar />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="p-4">
              <div className="text-center">
                <Card.Img
                  src={userData.profileImg}
                  alt="Profile Image"
                  className="rounded-circle"
                  style={{ width: "150px", height: "150px" }}
                />
                <div className="mt-3">
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "#333",
                    }}
                  >
                    {userData.name}
                  </h3>
                  <p style={{ fontSize: "18px", color: "#666" }}>
                    {userData.userName}
                  </p>
                  <p style={{ fontSize: "18px", color: "#666" }}>
                    {userData.email}
                  </p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Button className="me-3" onClick={viewCart}>
                  View Cart
                </Button>
                <Button onClick={viewOrders}>View Orders</Button>
              </div>
              <div className="mt-4">
                <h5
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#333",
                  }}
                >
                  {display}
                </h5>
                {display === "Cart" ? (
                  cart.length > 0 ? (
                    cart.map((item) => (
                      <Card key={item.product._id} className="mb-3">
                        <Card.Body>
                          <div className="d-flex align-items-center">
                            <Card.Img
                              src={item.product.image}
                              alt="Shopping Item"
                              className="rounded"
                              style={{ width: "65px" }}
                            />
                            <div className="ms-3">
                              <Card.Title
                                style={{
                                  fontSize: "20px",
                                  fontWeight: "bold",
                                  color: "#333",
                                }}
                              >
                                {item.product.title}
                              </Card.Title>
                              <Card.Text
                                style={{ fontSize: "16px", color: "#666" }}
                              >
                                Quantity: {item.quantity}
                              </Card.Text>
                              <Card.Text
                                style={{
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                  color: "#333",
                                }}
                              >
                                Total Amount:{" "}
                                {(item.quantity * item.product.price).toFixed(
                                  2
                                )}
                              </Card.Text>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    ))
                  ) : (
                    <p
                      className="text-center"
                      style={{ fontSize: "18px", color: "#666" }}
                    >
                      No items in the cart.
                    </p>
                  )
                ) : order.length > 0 ? (
                  order.map((orderItem) => (
                    <div key={orderItem._id} className="mb-3">
                      <Card>
                        <Card.Body>
                          {orderItem.products.map((productItem) => (
                            <div
                              key={productItem.productId._id}
                              className="d-flex align-items-center mb-3"
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Card.Img
                                src={productItem.productId.image}
                                alt={productItem.productId.title}
                                className="rounded"
                                style={{ width: "65px" }}
                              />
                              <div className="ms-3">
                                <Card.Title
                                  style={{
                                    fontSize: "20px",
                                    fontWeight: "bold",
                                    color: "#333",
                                  }}
                                >
                                  {productItem.productId.title}
                                </Card.Title>
                                <Card.Text
                                  style={{ fontSize: "16px", color: "#666" }}
                                >
                                  Quantity: {productItem.quantity}
                                </Card.Text>
                                <Card.Text
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    color: "#333",
                                  }}
                                >
                                  Total Amount: $
                                  {(
                                    productItem.quantity *
                                    productItem.productId.price
                                  ).toFixed(2)}
                                </Card.Text>
                              </div>
                            </div>
                          ))}
                          <p style={{ fontSize: "16px", color: "#666" }}>
                            Total Items: {orderItem.totalItems}
                          </p>
                          <p
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              color: "#333",
                            }}
                          >
                            Total Price: ${orderItem.totalPrice.toFixed(2)}
                          </p>
                          <p style={{ fontSize: "16px", color: "#666" }}>
                            Purchase Date:{" "}
                            {new Date(orderItem.pusrchaseDate).toLocaleString()}
                          </p>
                          <p style={{ fontSize: "16px", color: "#666" }}>
                            Order ID: {orderItem.orderId}
                          </p>
                          <Button
                            onClick={() => completePurchase(orderItem._id)}
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Complete Purchase
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                  ))
                ) : (
                  <p
                    className="text-center"
                    style={{ fontSize: "18px", color: "#666" }}
                  >
                    No orders found.
                  </p>
                )}
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default EachPerson;
