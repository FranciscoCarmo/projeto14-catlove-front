import styled from "styled-components";
import { BsFillHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import toy from "../../assets/toy.jpg";

export default function OneProduct(props) {
  const { name, price, image, category, _id } = props.produto;
  const navigate = useNavigate();

  return (
    <Wrapper
      onClick={() => {
        navigate(`/products?${_id}`);
      }}
    >
      <img src={image}></img>
      <Info>
        <h3>{name}</h3>
        <p>{category}</p>
        <PriceFav>
          <h2>R$ {(price / 100).toFixed(2)}</h2>
          <BsFillHeartFill color="gray" />
        </PriceFav>
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  /* height: 180px; */
  background-color: white;
  border-radius: 8px;

  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 10px;
    height: 100px;
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;

  h3 {
    font-size: 10px;
    font-weight: bold;
  }
  p {
    font-size: 10px;

    margin-top: 3px;
  }
`;

const PriceFav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 8px;

  h2 {
    font-size: 12px;
    font-weight: bold;
  }
`;
