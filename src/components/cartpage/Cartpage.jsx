import { useState } from "react";
import Card from "../card/Card";
import "./Cartpage.css"; // Import your CSS file

const productsData = [
  {
    id: 1,
    name: "Carrot",
    image:
      "https://t3.ftcdn.net/jpg/02/99/43/48/360_F_299434842_UF1e0k44KUpkdtAEu0XbbPVnTHFuRwAm.jpg",
    price: 40,
  },
  {
    id: 2,
    name: "Brocoli",
    image:
      "https://t4.ftcdn.net/jpg/01/38/59/65/360_F_138596527_vo9I8cKl20phDuIauIEfeQ2mWGw60Wjm.jpg",
    price: 60,
  },
  {
    id: 3,
    name: "Cauliflower",
    image:
      "https://media.istockphoto.com/id/186828790/photo/cauliflower-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=oLL9OeCwhHolL-MqXb3CZEkL0NyE483_vEqm3Tj0Lzo=",
    price: 30,
  },
  {
    id: 4,
    name: "Onion",
    image:
      "https://thumbs.dreamstime.com/b/red-onion-cut-half-isolated-white-background-red-onion-cut-half-isolated-white-background-clipping-path-full-105173215.jpg",
    price: 50,
  },
  {
    id: 5,
    name: "Potato",
    image:
      "https://img.freepik.com/premium-photo/potato-vegetable-isolated-white-background_42033-117.jpg",
    price: 50,
  },
  {
    id: 6,
    name: "Garlic",
    image:
      "https://img.freepik.com/premium-photo/garlic-white-background-garlic-is-medicinal-plant-is-kind-spice_319982-314.jpg?w=2000",
    price: 45,
  },
];

function Cartpage() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const increaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity++;
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity--;
      setCartItems(updatedCartItems);
    }
  };

  const removeProduct = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <>
      <div className="cart-product">
        <div className="cart-page">
          <div className="cart-items">
            <h1>Cart</h1>
            {cartItems.map((item, index) => (
              <div className="cart-item" key={item.index}>
                <div className="product-image">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-image"
                  />
                </div>
                <div className="product-info">
                  <p>{item.name}</p>
                  <p>Rs.{item.price}</p>
                </div>

                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(index)}>-</button>
                  <p>{item.quantity}</p>
                  <button onClick={() => increaseQuantity(index)}>+</button>
                </div>
                <button
                  className="remove-button"
                  onClick={() => removeProduct(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="order-summarry">
            <h2>Cart Summary</h2>
            <hr></hr>
            <div className="order-summary-details">
              <div className="detail-titles">
                <div className="details">
                  <p>No. of Items</p>
                </div>
                <div className="details">
                  {" "}
                  <p>Subtotal</p>
                </div>
                <div className="details">
                  <p>Delivery Charges</p>
                </div>
              </div>
              <div className="detail-values">
                <div className="details">
                  <p>{getTotalItems()}</p>
                </div>
                <div className="details">
                  {" "}
                  <p>Rs.{getTotalPrice().toFixed(2)}</p>
                </div>
                <div className="details">
                  <p>Rs.0</p>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="order-summary-details">
              <div className="detail-titles">
                <p className="details">Total </p>
              </div>
              <div className="detail-values">
                <p className="price-details">Rs.{getTotalPrice().toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="total-price">
          <p>Cart Total: Rs.{getTotalPrice().toFixed(2)}</p>
        </div>
      </div>
    </>
  );
}

export default Cartpage;
