import { CartContext } from '../../contexts';
import { useContext } from 'react';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);
  // const handelRemoveItem = (item) => {
  //   removeItemFromCart(item);
  // };

  return (
    <div className="checkout-container">
      <div className="title"></div>
      <div>
        {cartItems.map((item) => {
          const { id, name, price, quantity } = item;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span onClick={() => removeItemFromCart(item)}>---</span>
              <br />
              <span onClick={() => addItemToCart(item)}>+++</span>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
