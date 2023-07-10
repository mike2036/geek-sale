import './index.scss';

const CartItem = ({ item }) => {
  // console.log(item);

  const { imageUrl, name, quantity, price } = item;

  return (
    <div className="cart-item-container">
      <img alt={`${name}`} src={imageUrl} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>{`${quantity} x $${price}`}</span>
      </div>
    </div>
  );
};

export default CartItem;
