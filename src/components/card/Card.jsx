import "./Card.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
const Card = ({
  name = "Name",
  desc = "This is a fabulous product and you should buy this asap because...",
  url = "https://www.bigbasket.com/media/uploads/p/l/10000150_19-fresho-onion.jpg",
  price = 599,
  discount = 20,
  category,
  productId,
}) => {
  const [qty, setQty] = useState(1);
  const userEmailString = Cookies.get("_auth_state");
  // const [isUserAuth, SetIsUserAuth] = useState(false);
  const navigate = useNavigate();
  // if(userEmail) SetIsUserAuth(true);
  const handleAdding = async (e) => {
    e.preventDefault();
    // request to user API to update his cart's data
    if (userEmailString) {
      const userEmail = JSON.parse(userEmailString).email;
      try {
        const userId = (
          await axios.get(
            "http://localhost:3001/api/users/getUserId/" + userEmail
          )
        ).data;
        let userProducts = (
          await axios.get(
            "http://localhost:3001/api/users/" + userId + "/products"
          )
        ).data;
        let found = false;
        userProducts = userProducts.map((product) => {
          if (product.id === productId) {
            found = true;
            return { ...product, qty: product.qty + qty };
          }
          return product;
        });
        if (!found) {
          userProducts = [...userProducts, { id: productId, qty: qty }];
        }
        await axios.patch("http://localhost:3001/api/users/" + userId, {
          boughtProducts: userProducts,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      navigate("/login");
    }
    // reset current qty
    setQty(1);
  };
  return (
    <div className="card-container">
      <div className="card-img-container">
        <div className="card-discount-overlay">
          <p className="card-discount">Get {discount}%&nbsp;Off</p>
        </div>
        <img src={url} alt="prod" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{name ? name : "Name"}</h3>
        <p className="card-price">
          Rs.&nbsp;<del>{price}</del>&nbsp;
          {Math.floor(price * (1 - discount / 100))}&nbsp;per&nbsp;Kg
        </p>
        <p className="card-desc">
          {desc} | | | {category}
        </p>
      </div>
      <div className="card-bottom">
        <div className="card-maths">
          <button
            className="card-operator"
            onClick={(e) => {
              e.preventDefault();
              if (qty > 1) setQty(qty - 1);
            }}
          >
            -
          </button>
          <input
            className="card-qty-show"
            placeholder="1"
            type="text"
            value={qty}
          />
          <button
            className="card-operator"
            onClick={(e) => {
              e.preventDefault();
              if (qty < 99) setQty(qty + 1);
            }}
          >
            +
          </button>
        </div>
        <button className="card-add" onClick={handleAdding}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default Card;
