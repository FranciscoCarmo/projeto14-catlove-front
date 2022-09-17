import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { BsFillHandbagFill } from "react-icons/bs";

export default function HeaderProduct() {
    const name = localStorage.getItem("name");
    const image = localStorage.getItem("image");

    const navigate = useNavigate();

    return (
        <Wrapper>
            <Back>
                <IoIosArrowBack onClick={() => navigate(-1)} />
            </Back>
            <h2>CatLove</h2>
            <CartIcon>
                <BsFillHandbagFill onClick={() => navigate("/cart")} />
            </CartIcon>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px 18px 0;

    h2 {
        font-size: 35px;
        font-weight: bold;
        font-family: "Reenie Beanie", cursive;
    }
`;

const Back = styled.div`
    font-size: 25px;
    cursor: pointer;

    :hover {
        transition: all 0.1s ease-in;
        transform: translateY(-2px);
        font-size: 30px;
    }
`;

const CartIcon = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 4px;
    cursor: pointer;

    font-size: 28px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 6px;
        object-fit: fill;
    }

    :hover {
        transform: translateY(-2px);
        transition: all 0.1s ease-in;
    }

    :active {
        transform: translateY(7px);
        transition: all 0.2s ease-in;
    }
`;
