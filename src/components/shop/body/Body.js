import News from "./News";
import Products from "./Products";

const Body = ({products}) => {
  return (
    <>
      <News />
      <Products products={products}/>
    </>
  );
};

export default Body;
