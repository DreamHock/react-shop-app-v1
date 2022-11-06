import ShopApp from "../ShopApp";
import Product from "./Product";
import styled from "styled-components";

const StyledProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

const Products = ({ products }) => {
  return (
    <StyledProducts>
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </StyledProducts>
  );
};

export default Products;
