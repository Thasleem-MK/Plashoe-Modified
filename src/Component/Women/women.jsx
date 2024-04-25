import React, { useContext, useEffect, useState } from "react";
import TitleHook from "../Hook/TitleHook";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import "../Collection/Style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../UseContext/Context";

function Women() {
  TitleHook("Women Archieves");
  const Navigate = useNavigate();
  const { cart, setCart } = useContext(Context);
  const [product, setproduct] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:7000/api/users/products/category/Women`)
      .then((result) => setproduct(result.data))
      .catch((error) => {
        console.log(error);
      });
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
      {product.map((element) => {
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
                <MDBBtn onClick={() => AddCart(element)}>ADD TO CART</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
        );
      })}
    </div>
  );
}

export default Women;
