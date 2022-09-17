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
                navigate(`/home/${_id}`);
            }}
        >
            <img src={image}></img>
            <Info>
                <h3>{name}</h3>
                <p>{category}</p>
                <PriceFav>
                    <h2>R$ {(price / 100).toFixed(2)}</h2>
                    <Hearth />
                </PriceFav>
            </Info>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;

    background-color: white;
    border-radius: 10px;
    box-shadow: -3px 5px 8px -3px rgba(75, 75, 75, 0.64);
    margin-top: 20px;
    padding: 15px 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        height: 100px;
    }
`;

const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 5px;
    padding-right: 5px;
    margin-top: 10px;

    h3 {
        font-size: 12px;
        font-weight: bold;
    }
    p {
        font-size: 12px;
        color: #757774;
        margin-top: 5px;
    }
`;

const PriceFav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
    margin-bottom: 8px;

    h2 {
        font-size: 14px;
        font-weight: bold;
        margin-top: 5px;
        color: #ff6b64;
    }
`;

const Hearth = styled(BsFillHeartFill)`
    font-size: 18px;
`;
