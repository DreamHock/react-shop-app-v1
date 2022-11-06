import { useState } from "react";
import Body from "./body/Body";
import Footer from "./footer/Footer";
import Header from "./header/Header";

let products = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/71WphaLsr8L._AC_UL320_.jpg",
    title: "DELL",
    desc: "Core i5 7th",
    price: 3900,
    categorie: "laptops",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/71WphaLsr8L._AC_UL320_.jpg",
    title: "Dell",
    desc: "Pro 12.3",
    price: 4000,
    categorie: "laptops",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/71WphaLsr8L._AC_UL320_.jpg",
    title: "Hp",
    desc: "Core i5 6th",
    price: 5000,
    categorie: "laptops",
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/71WphaLsr8L._AC_UL320_.jpg",
    title: "Toshiba",
    desc: "Core i5 7th",
    price: 3990,
    categorie: "laptops",
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/71WphaLsr8L._AC_UL320_.jpg",
    title: "Lenovo",
    desc: "Core i7 7th",
    price: 4000,
    categorie: "laptops",
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/71WphaLsr8L._AC_UL320_.jpg",
    title: "HP",
    desc: "Core i7 7th",
    price: 4000,
    categorie: "laptops",
  },
  {
    id: 7,
    img: "https://m.media-amazon.com/images/I/71WphaLsr8L._AC_UL320_.jpg",
    title: "EliteBook",
    desc: "Core i7 7th",
    price: 4000,
    categorie: "laptops",
  },
  {
    id: 8,
    img: "https://m.media-amazon.com/images/I/71WphaLsr8L._AC_UL320_.jpg",
    title: "Mac",
    desc: "Pro 11",
    price: 4000,
    categorie: "laptops",
  },
  {
    id: 9,
    img: "https://m.media-amazon.com/images/I/71JkspfLJQL._AC_UL320_.jpg",
    title: "Samsung S20 Ultra",
    desc: "256 GD",
    price: 4000,
    categorie: "phones",
  },
  {
    id: 10,
    img: "https://m.media-amazon.com/images/I/71JkspfLJQL._AC_UL320_.jpg",
    title: "Iphone 12",
    desc: "500 GB",
    price: 5000,
    categorie: "phones",
  },
  {
    id: 11,
    img: "https://m.media-amazon.com/images/I/71JkspfLJQL._AC_UL320_.jpg",
    title: "Iphone 14",
    desc: "500 GB",
    price: 14000,
    categorie: "phones",
  },
  {
    id: 12,
    img: "https://m.media-amazon.com/images/I/71JkspfLJQL._AC_UL320_.jpg",
    title: "Samsung Ultra",
    desc: "256 Gb",
    price: 4000,
    categorie: "phones",
  },
  {
    id: 13,
    img: "https://m.media-amazon.com/images/I/61GqujOjXuL._AC_UL320_.jpg",
    title: "Canon",
    desc: "7500 HD",
    price: 4000,
    categorie: "cameras",
  },
  {
    id: 14,
    img: "https://m.media-amazon.com/images/I/61GqujOjXuL._AC_UL320_.jpg",
    title: "Nikon",
    desc: "2500 HD",
    price: 4000,
    categorie: "cameras",
  },
  {
    id: 15,
    img: "https://m.media-amazon.com/images/I/61GqujOjXuL._AC_UL320_.jpg",
    title: "Canon",
    desc: "2500 HD",
    price: 4000,
    categorie: "cameras",
  },
  {
    id: 16,
    img: "https://m.media-amazon.com/images/I/61GqujOjXuL._AC_UL320_.jpg",
    title: "Nikon",
    desc: "7500 HD",
    price: 4000,
    categorie: "cameras",
  },
];

const ShopApp = (props) => {
  let [filterProducts, setFilterProducts] = useState(products);


  const productsHandler = (filter) => {
    let filterPrs;
    if(filter !== "all") {
        filterPrs = products.filter((product) => {
        return product.categorie === filter;
      });
    }
    else {
      filterPrs = products;
    }
    setFilterProducts(filterPrs);
  };

  return (
    <>
      <Header productsHandler={productsHandler} />
      <Body products={filterProducts} />
      <Footer />
    </>
  );
};

export default ShopApp;
