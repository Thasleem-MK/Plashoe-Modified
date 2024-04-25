import React, { useContext, useEffect, useState } from "react";
import TitleHook from "../Hook/TitleHook";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import "./Style.css";
import { Context } from "../UseContext/Context";
import { useNavigate } from "react-router-dom";

function Collection() {
  const { search, cart, setCart } = useContext(Context);
  TitleHook("Collection");
  const Navigate = useNavigate();

  const [product, setproduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/users/products")
      .then((result) => {
        setproduct(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const AddCart = async (element) => {
    await axios
      .post(
        "http://localhost:7000/api/users/cart",
        { productId: element._id },
        { withCredentials: true }
      )
      .catch(() => {
        Navigate("/login");
      });
    setCart(!cart);
  };

  return (
    <div className="Collection">
      {search === ""
        ? product.map((element) => {
            return (
              <div key={element._id}>
                <MDBCard className="Cards">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-overlay"
                  >
                    <MDBCardImage src={element.image} fluid alt="..." />

                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>{element.title}</MDBCardTitle>
                    <MDBCardText>{`Price : $${element.price}`}</MDBCardText>
                    <MDBBtn onClick={() => AddCart(element)}>
                      ADD TO CART
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
            );
          })
        : product.map((element) => {
            return (
              <div key={element._id}>
                {element.title.toLowerCase().includes(search.toLowerCase()) ||
                element.category.toLowerCase().includes(search.toLowerCase()) ||
                element.gender.toLowerCase().includes(search.toLowerCase()) ? (
                  <MDBCard className="Cards">
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image hover-overlay"
                    >
                      <MDBCardImage src={element.image} fluid alt="..." />

                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </MDBRipple>
                    <MDBCardBody>
                      <MDBCardTitle>{element.title}</MDBCardTitle>
                      <MDBCardText>{`Price : $${element.price}`}</MDBCardText>
                      <MDBBtn onClick={() => AddCart(element)}>
                        ADD TO CART
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                ) : (
                  ""
                )}
              </div>
            );
          })}
    </div>
  );
}

export default Collection;
