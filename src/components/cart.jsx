function Cart(props) {
  //logic of how the cart will look like, taking some props
  return (
    <div>
      {props.cartItems.map((item, index) => (
        <div key={index} className="mt-5 row">
          <div className="col-2 d-flex justify-content-center align-items-center p-1">
            <img
              className="w-100 h-70"
              src={item.picture}
              alt={item.name}
            ></img>
          </div>
          <div className="col-3 d-flex justify-content-center align-items-center p-1">
            <div className="spanFont">
              <span>
                <b>Bil:</b> {item.name}
              </span>
              <br />
              <span>
                <b>Antal:</b> {item.qty}
              </span>
              <br />
              <span>
                <b>Pris:</b> {(item.price * item.qty).toLocaleString()}
              </span>
            </div>
          </div>
          <div className="col-2 d-flex justify-content-center align-items-center">
            <button
              onClick={() => props.removeItems(item.name)}
              className="btn btn-danger btn-sm"
            >
              Ta bort
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
