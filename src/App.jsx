import "./App.css";
import Searchbar from "./searchbar";
import data from "./products.json";
import Card from "react-bootstrap/Card";

function App() {
  console.log(data);

  const bilar = data.map((product) => (
    <div className="col-md-3 mb-2" key={product.produktnummer}>
      <Card className="m-1 h-100">
        <div className="img">
          <Card.Img className="p-4" variant="top" src={product.bild} />
        </div>
        <Card.Body>
          <Card.Title>{product.namn}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Produktnummer: {product.produktnummer}
          </Card.Subtitle>
          <Card.Text>
            <p>Pris: {product.pris}</p>
            <p>Beskrivning: {product.beskrivning}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  ));
  return (
    <>
      <div>
        <h2>The Magic Store</h2>
      </div>
      <Searchbar />
      <div className="row m-20">{bilar}</div>
    </>
  );
}

export default App;
