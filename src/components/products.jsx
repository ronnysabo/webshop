import Card from "react-bootstrap/Card";
import Cart from "./cart";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../App.css";

function Products(props) {
  //different states
  const [show, setShow] = useState(false);
  const [selectedCarName, setSelectedCarName] = useState("");
  const [selectedCarDescription, setSelectedCarDescription] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(0);
  const [selectedCarPic, setSelecetedCarPic] = useState("");

  //function for modal(show/hide)
  const handleClose = () => setShow(false);

  //function for what to show in my modal
  const handleShowMoreInfo = (namn, beskrivning, bild) => {
    setSelectedCarName(namn);
    setSelectedCarDescription(beskrivning);
    setSelecetedCarPic(bild);
    setShow(true);
  };

  //function with 3 params. loops through the cartItems array
  const cartProd = (carName, carPrice, carPicture) => {
    const existingCartItem = cartItems.find((item) => item.name === carName);

    //if it exists update the qty,
    if (existingCartItem) {
      setQty(qty + 1);
      setCartItems(
        cartItems.map((item) =>
          item.name === carName ? { ...item, qty: item.qty + 1 } : item
        )
      );
      //if the item is not in cart, add it
    } else {
      setQty(qty + 1);
      setCartItems(
        cartItems.concat({
          name: carName,
          price: carPrice,
          qty: 1,
          picture: carPicture,
        })
      );
    }
  };

  //remove items from the cart, reduce qty by 1 or remove item from the cart
  function removeItems(name) {
    const updatedItems = cartItems
      .map((item) =>
        item.name === name ? { ...item, qty: item.qty - 1 } : item
      )
      .filter((item) => item.qty > 0);

    setCartItems(updatedItems);
  }

  //calc total items in cart
  const totalItemsCart = cartItems.reduce(
    (sum, product) => sum + product.qty,
    0
  );

  //calc total cost by multiply qty with price
  const totalCost = cartItems
    .reduce((sum, product) => sum + product.qty * product.price, 0)
    .toLocaleString();

  // map through the cars and give each card the specific car info.
  let bilar = props.car.map((car, index) => (
    <div className="col-lg-4 col-md-6 col-sm-6 col-xl-3 mb-5" key={index}>
      <Card className="m-1 h-100 row-100 w-70">
        <div className="img">
          <Card.Img className="p-4" variant="top" src={car.bild} />
        </div>
        <Card.Body>
          <Card.Title>{car.namn}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Produktnummer: {car.produktnummer}
          </Card.Subtitle>
          <Card.Text>
            <b>Pris:</b> {car.pris.toLocaleString() + " SEK"}
          </Card.Text>
          <Modal
            animation={false}
            show={show}
            onHide={handleClose}
            keyboard={false}
          >
            {/* modal that has state show false until button more info is clicked */}
            <Modal.Header closeButton>
              <Modal.Title>{selectedCarName}</Modal.Title>
            </Modal.Header>
            <div className="mt-3 d-flex justify-content-center">
              <img
                className="h-50 w-50 p-2 text-center"
                src={selectedCarPic}
                alt=""
              />
            </div>
            <Modal.Body>{selectedCarDescription}</Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Stäng
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
        <div className="d-flex text-center m-2 justify-content-between">
          <button
            onClick={() =>
              handleShowMoreInfo(car.namn, car.beskrivning, car.bild)
            }
            className="btn btn-secondary w-35 m-2"
          >
            Mer info
          </button>
          <button
            className="btn btn-dark w-2 m-2"
            onClick={() => cartProd(car.namn, car.pris, car.bild)}
          >
            Köp
          </button>
        </div>
      </Card>
    </div>
  ));

  //rendering the cars & cartitems
  return (
    <div>
      <div className="d-flex">
        <div className="h-100 col-8 row m-4">{bilar}</div>
        <div>
          {totalItemsCart > 0 && (
            <>
              <h4 className="m-4">Varukorg ({totalItemsCart})</h4>
              <Cart cartItems={cartItems} removeItems={removeItems} />
              <hr className="col-7" />
              <span className="text-align-end">
                <b>Total kostnad:</b> {totalCost + " SEK"}
              </span>
            </>
          )}

          <br />
        </div>
      </div>
      <br />
    </div>
  );
}

export default Products;
