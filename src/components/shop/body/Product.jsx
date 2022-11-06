import { useState } from "react";
import styled from "styled-components";
// npm install react-icons --save


const StyledProduct = styled.div`
  margin: 20px;
  height: 300px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid whitesmoke;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  > * {
    margin: 5px;
  }
  > :first-child {
    height: 175px;
    width: 100%;
    > img {
      display: block;
      max-height: 100%;
      max-width: 100%;
      margin: auto;
    }
  }
  > :nth-child(2) {
    font-weight: bold;
  }
  > :nth-child(3) {
    color: grey;
  }
  > :last-child {
    background-color: transparent;
    border: 1px solid tomato;
    color: tomato;
  }
`;

const Product = ({ product }) => {
  return (
    <StyledProduct>
      <div>
        <img src={product.img} alt="300 x 200" />
      </div>
      <h6>{product.desc}</h6>
      <h6>{product.price}</h6>
      <button>Add to cart</button>
    </StyledProduct>
  );
};

export default Product;
