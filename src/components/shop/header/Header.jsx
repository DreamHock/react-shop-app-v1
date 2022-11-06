import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledNavBar = styled.nav`
  display: flex;
  padding: 5px;
  align-items: center;
  color: #434343;
  display: flex;
  gap: 10px;
  list-style: none;
  > h3 > a {
    color: #434343;
    text-decoration: none;
  }
  > div {
    > select {
      background-color: transparent;
      color: grey;
      border: 0;
      > option {
        border: 0;
      }
    }
  }
`;

const StyledHeader = styled.header`
  /* position: sticky;
  top: 0; */
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 20px;
`;

const StyledCart = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  padding: 0px 5px;
  > a {
    color: orange;
    text-decoration: underline;
  }
`;

const Header = (props) => {
  let [shop, setShop] = useState("all");

  const shopHandler = (e) => {
    setShop(e.target.value);
    // props.productsHandler(shop);
  };

  useEffect(() => {
    props.productsHandler(shop);
  }, [shop]);

  return (
    <StyledHeader>
      <StyledNavBar>
        <h3><a href="#">Styled store</a></h3>
        <div>
          <select
            onChange={(e) => {
              shopHandler(e);
            }}
            value={shop}
            name="shop"
            id=""
          >
            <option value="all">All Products</option>
            <option value="phones">Phones</option>
            <option value="laptops">Laptops</option>
            <option value="cameras">Cameras</option>
          </select>
        </div>
      </StyledNavBar>
      <StyledCart>
        <a href="#">
          <FaShoppingCart className="cart"/>
        </a>
        <div>0</div>
      </StyledCart>
    </StyledHeader>
  );
};

export default Header;
