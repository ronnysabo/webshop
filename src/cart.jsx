function Cart(props) {
  return (
    <div>
      {props.cartItems.map((item, index) => (
        <div key={index} className="mt-5 row">
          <div className="col-4 d-flex justify-content-center align-items-center p-1">
            <img
              className="w-100 h-100"
              src={item.picture}
              alt={item.name}
            ></img>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center p-1">
            <div className="spanFont">
              <span>
                <b>Item:</b> {item.name}
              </span>
              <br />
              <span>
                <b>Qty:</b> {item.qty}
              </span>
              <br />
              <span>
                <b>Price:</b> {item.price}
              </span>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <button className="btn btn-primary btn-sm">Ta bort</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
