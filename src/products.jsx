import "./App.css";
import Card from "react-bootstrap/Card";
import Cart from "./cart";
import { useState } from "react";

function Products(props) {
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(0);
  const [description, setDescription] = useState(null);

  function handleClick(index) {
    setDescription(index === description ? null : index);
  }

  const cartProd = (carName, carPrice, carPicture) => {
    const existingCartItem = cartItems.find((item) => item.name === carName);

    if (existingCartItem) {
      setQty(qty + 1);
      setCartItems(
        cartItems.map((item) =>
          item.name === carName ? { ...item, qty: item.qty + 1 } : item
        )
      );
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

  let cars = props.car.map((car, index) => (
    <div className="col-lg-3 col-md-4 mb-5" key={index}>
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
            <b>Pris:</b> {car.pris}
          </Card.Text>
          {description === index && (
            <>
              <Card.Text>
                <b>Beskrivning:</b> {car.beskrivning}
              </Card.Text>
            </>
          )}
        </Card.Body>
        <div className="d-flex text-center m-2 justify-content-between">
          <button
            onClick={() => handleClick(index)}
            className="btn btn-info w-35 m-2"
          >
            {description === index ? "Stäng" : "Mer Info"}
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

  return (
    <div>
      <h2 className="text-center m-3">The Magic Store</h2>

      <div className="d-flex">
        <div className="h-100 col-9 row m-4">{cars}</div>
        <div>
          <h4 className="m-4">Shopping cart ({qty})</h4>

          <Cart cartItems={cartItems} />
        </div>
      </div>
      <br />
    </div>
  );
}

export default Products;
