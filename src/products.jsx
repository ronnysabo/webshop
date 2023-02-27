import "./App.css";
import Card from "react-bootstrap/Card";

function Products(props) {
  let bil;

  bil = props.car.map((car, index) => (
    <div className="col-md-3 mb-5" key={index}>
      <Card className="m-2 h-100">
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
          <Card.Text>
            <b>Beskrivning:</b> {car.beskrivning}
          </Card.Text>
        </Card.Body>
        <div className="d-flex text-center m-2 justify-content-between">
          <button className="btn btn-secondary w-35 m-2">Mer info</button>
          <button className="btn btn-dark w-2 m-2">Köp</button>
        </div>
      </Card>
    </div>
  ));

  console.log(props.car);
  return (
    <>
      <div className="d-flex flex-column">
        <h2 className="text-center m-3">The Magic Store</h2>
      </div>
      <div className="row m-4">{bil}</div>
      <br />
    </>
  );
}

export default Products;
