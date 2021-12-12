export default function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incrementQuantity = Function.prototype,
    decrementQuantity = Function.prototype,
  } = props;

  return (
    <li className="collection-item">
      {name} x{quantity} = {price * quantity} <b>$</b>
      <span className="secondary-content">
        <i
          className="material-icons btn-q"
          onClick={() => incrementQuantity(id)}
        >
          add
        </i>
        <i
          style={{ margin: "0px 10px" }}
          className="material-icons btn-q"
          onClick={() => decrementQuantity(id)}
        >
          remove
        </i>
        <i
          className="material-icons basket-delete"
          onClick={() => removeFromBasket(id)}
        >
          delete_forever
        </i>
      </span>
    </li>
  );
}
