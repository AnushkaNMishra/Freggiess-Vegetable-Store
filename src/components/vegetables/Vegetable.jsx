import axios from "axios";
import { useState, useEffect } from "react";
import "./Vegetable.css";
import Card from "../card/Card";

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
  {
    id: 7,
    name: "Tomato",
    image:
      "https://c4.wallpaperflare.com/wallpaper/134/1018/397/freshness-rendering-white-background-vegetables-tomatoes-hd-wallpaper-preview.jpg",
    price: 60,
  },
  {
    id: 8,
    name: "Cucumber",
    image:
      "https://img.freepik.com/premium-photo/cucumber-isolated-white-background_147493-1127.jpg",
    price: 35,
  },
  {
    id: 9,
    name: "Peas",
    image:
      "https://img.freepik.com/premium-photo/green-peas-vegetable-bean-isolated-white_87394-41515.jpg?w=2000",
    price: 50,
  },
  {
    id: 10,
    name: "Pumpkin",
    image:
      "https://img.freepik.com/premium-photo/fresh-orange-pumpkin-vegetable-isolated-white-background_161301-4134.jpg?w=2000",
    price: 60,
  },
  {
    id: 11,
    name: "Capsicum",
    image:
      "https://t4.ftcdn.net/jpg/06/06/17/63/360_F_606176375_AE8V94TC30Kjb6AxlNbpkSY7eIbDR2ur.jpg",
    price: 80,
  },
  {
    id: 12,
    name: "Beetroot",
    image:
      "https://media.istockphoto.com/id/162682961/photo/beetroot.jpg?s=612x612&w=0&k=20&c=AzHmJ6fPa44BN7y_rji9nziIXMuOrPeU502KpsPv6Ks=",
    price: 70,
  },
  {
    id: 13,
    name: "Brinjal",
    image:
      "https://img.freepik.com/premium-photo/eggplant-aubergine-brinjal-vegetable-isolated-white-background_136354-4074.jpg?w=2000",
    price: 180,
  },
  {
    id: 14,
    name: "Bitter Gourd",
    image:
      "https://seed2plant.in/cdn/shop/products/bittergourdseeds_800x.jpg?v=1603968417",
    price: 60,
  },
  {
    id: 15,
    name: "Jackfruit",
    image:
      "https://www.liveeatlearn.com/wp-content/uploads/2022/06/picture-of-jackfruit-vert.jpg",
    price: 80,
  },
  {
    id: 16,
    name: "Radish",
    image:
      "https://media.istockphoto.com/id/158690297/photo/daikon-radishes-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=k_KVuE_UbE-shIiG2z2xY8Fu7BqKy_bk4D9NfZdrTfM=",
    price: 70,
  },
  {
    id: 17,
    name: "Ginger",
    image:
      "https://img.freepik.com/premium-photo/ginger-rhizome-isolated-white-background-herb-vegetable-food-asia_39768-10107.jpg?w=2000",
    price: 40,
  },
  {
    id: 18,
    name: "Mushroom",
    image:
      "https://watermark.lovepik.com/photo/20211118/large/lovepik-vegetable-mushrooms-on-a-white-background-picture_480014447.jpg",
    price: 90,
  },
  {
    id: 19,
    name: "Coriander",
    image: "https://m.media-amazon.com/images/I/4180QOfJGwL.jpg",
    price: 20,
  },
  {
    id: 20,
    name: "Lady Finger",
    image:
      "https://img.freepik.com/premium-photo/raw-okra-ladyfingers-isolated-white-background_14349-554.jpg?w=2000",
    price: 75,
  },
];

function Vegetable() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleFilter = () => {
    const filtered = productsData.filter(
      (product) =>
        (minPrice === "" || product.price >= parseFloat(minPrice)) &&
        (maxPrice === "" || product.price <= parseFloat(maxPrice))
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    const getAllFruits = async () => {
      const data = (
        await axios.get("http://localhost:3001/api/products/vegetables")
      ).data;
      console.log(data);
      setFilteredProducts(data);
    };
    getAllFruits();
  }, []);

  return (
    <>
      <div className="fruits-container">
        <div className="filter-section">
          <h2 className="filterheading">Price Filter</h2>
          <div className="filter-row">
            <input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
          <button className="apply-button" onClick={handleFilter}>
            Apply
          </button>
        </div>

        <div className="product-list">
          {filteredProducts.map((card, idx) => (
            <Card
              key={idx}
              name={card.name}
              price={card.price}
              url={card.url}
              discount={card.discount}
              desc={card.desc}
              category={card.category}
              productId={card._id}
            ></Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Vegetable;
