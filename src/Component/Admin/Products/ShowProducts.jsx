import React, { useState, useEffect } from "react";
import AdminNavBar from "../Nav/NavBar";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "react-bootstrap";
import axios from "axios";
import ProductCard from "./ProductCard";

function ShowProducts() {
  const [filter, setFilter] = useState(false);
  const [showElement, setShowElement] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({});
  const [addingProduct, setAddingProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
    Name: "",
    Gender: "",
    Type: "",
    Price: 0,
    img: "",
  });
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:7000/api/admin/products",
        { withCredentials: true }
      );
      setProductData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSave = () => {
    const updatedProductData = productData.map((product) =>
      product.Name === updatedProduct.Name
        ? { ...product, ...updatedProduct }
        : product
    );
    setProductData(updatedProductData);
    setShowModal(false);
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(
        `http://localhost:7000/api/admin/products/${productId}`,
        { withCredentials: true }
      );
      alert("Item deleted");
      fetchData();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleAddProduct = () => {
    setAddingProduct(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = (product) => {
    setUpdatedProduct(product);
    setShowModal(true);
  };

  const handleAddNewProduct = () => {
    if (Object.values(newProduct).every((value) => value !== "")) {
      setProductData((prevData) => [...prevData, newProduct]);
      setAddingProduct(false);
      
    } else {
      alert("Please complete all fields");
    }
  };

  return (
    <div>
      <AdminNavBar />
      <h1 className="h1 text-black mt-4">Product Section</h1>
      <Button onClick={() => setFilter(!filter)}>Filter Products</Button>
      <Button className="ms-2" onClick={handleAddProduct}>
        Add New Products
      </Button>
      {filter && (
        <div className="mt-1 Show">
          <Button className="me-1" onClick={() => setShowElement("Men")}>
            Men
          </Button>
          <Button className="me-1" onClick={() => setShowElement("Women")}>
            Women
          </Button>
          <Button className="me-1" onClick={() => setShowElement("Running")}>
            Running
          </Button>
          <Button className="me-1" onClick={() => setShowElement("Sneaker")}>
            Sneaker
          </Button>
          <Button onClick={() => setShowElement("Training")}>Training</Button>
        </div>
      )}
      <div className="Collection">
        {productData.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onDelete={handleDelete}
            onEdit={handleShowModal}
          />
        ))}
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <ModalHeader closeButton>
          <Modal.Title className="mx-auto">Edit Product</Modal.Title>
        </ModalHeader>
        <ModalBody>{/* Input fields for editing product */}</ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
      <Modal show={addingProduct} onHide={() => setAddingProduct(false)}>
        <ModalHeader closeButton>
          <Modal.Title className="mx-auto">Add New Product</Modal.Title>
        </ModalHeader>
        <ModalBody>{/* Input fields for adding new product */}</ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setAddingProduct(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddNewProduct}>
            Add to product list
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ShowProducts;
