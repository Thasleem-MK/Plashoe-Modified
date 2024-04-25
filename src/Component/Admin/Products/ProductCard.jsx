import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Delete, Edit } from "@mui/icons-material";

const ProductCard = ({ product, onDelete, onEdit }) => {
  const { _id, Name, Gender, Type, Price, img } = product;

  return (
    <MDBCard className="Cards">
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay"
      >
        <MDBCardImage src={img} fluid alt="Product Image" />
        <div
          className="mask"
          style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
        ></div>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{Name}</MDBCardTitle>
        <MDBCardText>
          <Delete className="text-danger me-3" onClick={() => onDelete(_id)} />
          <Edit className="text-warning ms-3" onClick={() => onEdit(product)} />
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
};

export default ProductCard;
