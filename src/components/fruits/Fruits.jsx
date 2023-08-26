import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../card/Card";
import "./Fruits.css";

const productsData = [
  {
    id: 1,
    name: "Apple",
    image: "https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg",
    price: 200,
  },
  {
    id: 2,
    name: "Banana",
    image:
      "https://m.media-amazon.com/images/I/51ebZJ+DR4L._AC_UF1000,1000_QL80_.jpg",
    price: 60,
  },
  {
    id: 3,
    name: "Blue Grapes",
    image: "https://m.media-amazon.com/images/I/61nHWMMpylL.jpg",
    price: 90,
  },
  {
    id: 4,
    name: "Lichi",
    image:
      "https://images.jdmagicbox.com/quickquotes/images_main/lichi-372485267-n4os2.jpg",
    price: 50,
  },
  {
    id: 5,
    name: "Green Grapes",
    image:
      "https://img3.exportersindia.com/product_images/bc-full/2020/4/6141567/fresh-green-grapes-1587041828-5375924.png",
    price: 50,
  },
  {
    id: 6,
    name: "Orange",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1s80ihHbko7WzJ2CgR3YwoGgrmbRh2qDiiw&usqp=CAU",
    price: 70,
  },
  {
    id: 7,
    name: "Strawberry",
    image:
      "https://i.pinimg.com/736x/f4/34/5c/f4345c014a0a05e54a08ee5d84391588--strawberries-vegetables.jpg",
    price: 180,
  },
  {
    id: 8,
    name: "Watermelon",
    image:
      "https://i.pinimg.com/736x/7f/82/b0/7f82b07e5335838ca4fc3a6f04003ffb.jpg",
    price: 60,
  },
  {
    id: 9,
    name: "Kiwi",
    image:
      "https://previews.123rf.com/images/natika/natika1207/natika120700228/14424443-whole-kiwi-fruit-and-his-segments-isolated-on-white-background-cutout.jpg",
    price: 90,
  },
  {
    id: 10,
    name: "Pomengranate",
    image:
      "https://media.istockphoto.com/id/940118920/photo/ripe-pomegranate-fruit-and-one-cut-in-half-with-leaf.jpg?s=612x612&w=0&k=20&c=iVTrJvW6rtFTlsWk5J3v1r1NeCgNtZMD4qDJIh3sfik=",
    price: 180,
  },
  {
    id: 11,
    name: "Papaya",
    image:
      "https://img.freepik.com/premium-photo/ripe-papaya-fruit-isolated-white-background-full-depth-field_253984-7074.jpg",
    price: 80,
  },
  {
    id: 12,
    name: "Coconut",
    image:
      "https://img.freepik.com/premium-photo/green-coconut-isolated-white-background_403166-2091.jpg",
    price: 70,
  },
  {
    id: 13,
    name: "Avacado",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1AJ9vorIc07vQKLyptRmwAKYM5Cn751c7RA&usqp=CAU",
    price: 180,
  },
  {
    id: 14,
    name: "Cherry",
    image:
      "https://w0.peakpx.com/wallpaper/590/523/HD-wallpaper-red-cherries-fruits-aesthetic-ultra-food-and-drink-spring-cherry-white-background-fruits-fresh-macro-closeup-sweet-cherries-springtime-ripe-healthy-vegetarian-aesthetic-vitamins-vegan.jpg",
    price: 90,
  },
  {
    id: 15,
    name: "Pear",
    image:
      "https://img.freepik.com/premium-psd/green-pear-fruit-isolated-white-background_33736-3950.jpg?w=2000",
    price: 130,
    description: "Nutritious green broccoli florets.",
  },
  {
    id: 16,
    name: "Mango",
    image:
      "https://img.freepik.com/premium-photo/ripe-yellow-mango-with-cut-half-green-leaf-isolated-white-background_252965-516.jpg",
    price: 130,
    description: "Nutritious green broccoli florets.",
  },
  {
    id: 17,
    name: "Pineapple",
    image:
      "https://img.freepik.com/premium-photo/juicy-pineapple-white-background-isolated_96064-298.jpg?w=2000",
    price: 160,
    description: "Nutritious green broccoli florets.",
  },
  {
    id: 18,
    name: "Blueberry",
    image:
      "https://w0.peakpx.com/wallpaper/777/206/HD-wallpaper-blueberries-berries-blueberries-on-a-white-background-berries-on-a-white-background-healthy-berries.jpg",
    price: 120,
    description: "Nutritious green broccoli florets.",
  },
  {
    id: 19,
    name: "Apricot",
    image:
      "https://img.freepik.com/premium-photo/group-apricot-white-background_146936-960.jpg",
    price: 120,
    description: "Nutritious green broccoli florets.",
  },
  {
    id: 20,
    name: "DragonFruit",
    image:
      "https://media.istockphoto.com/id/1364034447/photo/fresh-pitahaya-on-white-background-dragon-fruit.jpg?s=612x612&w=0&k=20&c=mkYotHioKj-eMD5mB6t3f_BxFOucqN828Sdvk5bCqFU=",
    price: 120,
    description: "Nutritious green broccoli florets.",
  },
  {
    id: 21,
    name: "DragonFruit",
    image:
      "https://media.istockphoto.com/id/1364034447/photo/fresh-pitahaya-on-white-background-dragon-fruit.jpg?s=612x612&w=0&k=20&c=mkYotHioKj-eMD5mB6t3f_BxFOucqN828Sdvk5bCqFU=",
    price: 120,
    description: "Nutritious green broccoli florets.",
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
        await axios.get("http://localhost:3001/api/products/fruits")
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
