import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Style.css";
import TitleHook from "../Hook/TitleHook";
import axios from "axios";

export default function Cart() {
  TitleHook("Cart");
  const [cart, setCart] = useState([]);
  const [state, setState] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/users/cart", { withCredentials: true })
      .then((result) => {
        setCart(result.data);
      })
      .catch((error) => {
        Navigate("/login");
        console.log(error);
      });
  }, [state]);

  const PurchaseUpdater = async (element, value) => {
    if (value === -1) {
      await axios.put(
        "http://localhost:7000/api/users/cart",
        { productId: element.product._id },
        { withCredentials: true }
      );
    } else {
      await axios.post(
        "http://localhost:7000/api/users/cart",
        { productId: element.product._id },
        { withCredentials: true }
      );
    }
    setState(!state);
  };

  const deleteItem = async (element) => {
    const config = {
      data: {
        productId: element.product._id,
      },
      withCredentials: true,
    };
    await axios.delete(`http://localhost:7000/api/users/cart`, config);
    setState(!state);
  };

  const placeOrder = async () => {
    if (cart.length > 0) {
      await axios
        .post(
          "http://localhost:7000/api/users/orders",
          {},
          { withCredentials: true }
        )
        .then((result) => {
          setState(!state);
          const paymentLink = result.data;
          window.open(paymentLink, "_blank");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container mb-4" style={{ marginTop: "-7vh" }}>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="8" lg="7" className="mx-auto my-auto">
            <MDBCard className="shadow border-0 rounded-lg">
              <MDBCardBody className="p-4">
                <MDBRow className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCol>
                    <MDBTypography tag="h5" style={{ textAlign: "left" }}>
                      <Link className="text-dark" to={"/collection"}>
                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                        shopping
                      </Link>
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol md="auto">
                    <p className="mb-0 text-muted">
                      Shopping cart ({cart.length} items)
                    </p>
                  </MDBCol>
                </MDBRow>
                {cart.length > 0 && (
                  <>
                    {cart.map((element, index) => (
                      <MDBCard key={index} className="mb-3 border rounded">
                        <MDBCardBody className="d-flex justify-content-between align-items-center px-4">
                          <MDBRow className="w-100 d-flex align-items-center">
                            <MDBCol md="3">
                              <MDBCardImage
                                src={element.product.image}
                                fluid
                                className="rounded-lg shadow-sm"
                                style={{ width: "100%" }}
                                alt="Shopping item"
                              />
                            </MDBCol>
                            <MDBCol md="6" className="ps-4">
                              <MDBTypography
                                tag="h5"
                                className="text-dark mb-2"
                              >
                                {element.product.title}
                              </MDBTypography>
                              <p className="text-muted mb-0">
                                {`${element.product.category}`}
                              </p>
                            </MDBCol>
                            <MDBCol
                              md="3"
                              className="flex-column align-items-center justify-content-center"
                            >
                              <div
                                className="d-flex mb-2 align-items-center"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <button
                                  className="btn btn-sm btn-outline-dark rounded-circle shadow-sm me-2"
                                  disabled={element.quantity === 1}
                                  onClick={() => PurchaseUpdater(element, -1)}
                                >
                                  <MDBIcon icon="minus" />
                                </button>
                                <MDBTypography
                                  tag="h5"
                                  className="mb-0 fw-normal ms-2 me-2"
                                >
                                  {element.quantity}
                                </MDBTypography>
                                <button
                                  className="btn btn-sm btn-outline-dark rounded-circle shadow-sm me-2"
                                  onClick={() => PurchaseUpdater(element, 1)}
                                >
                                  <MDBIcon icon="plus" />
                                </button>
                              </div>
                              <div className="text-success mb-2">
                                Total: $
                                {parseFloat(
                                  (
                                    element.quantity * element.product.price
                                  ).toFixed(2)
                                )}
                              </div>
                              <button
                                className="btn btn-sm btn-danger shadow-sm"
                                onClick={() => deleteItem(element)}
                              >
                                <MDBIcon icon="trash-alt" /> Remove
                              </button>
                            </MDBCol>
                          </MDBRow>
                        </MDBCardBody>
                      </MDBCard>
                    ))}
                  </>
                )}
                <div className="d-flex justify-content-between mt-4">
                  <MDBTypography tag="h5" className="text-muted">
                    Subtotal: $
                    {cart.length > 0 && (
                      <>
                        {cart
                          .reduce(
                            (acc, item) =>
                              acc + item.quantity * item.product.price,
                            0
                          )
                          .toFixed(2)}
                      </>
                    )}
                  </MDBTypography>
                  <button
                    className="btn btn-primary"
                    disabled={cart.length==0}
                    onClick={() => {
                      placeOrder();
                    }}
                  >
                    Place Order
                  </button>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
