import { IoIosArrowBack } from "react-icons/io";
import { BsFillHandbagFill } from "react-icons/bs";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function CartHeader({ num }) {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <IoIosArrowBack onClick={() => navigate(-1)} />
            <h1>Carrinho de Compras</h1>

            <div>
                <BsFillHandbagFill />
                <span>{num}</span>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
    margin-bottom: 30px;

    h1 {
        font-size: 15px;
        font-weight: bold;
    }

    & > :first-child {
        font-size: 20px;
        cursor: pointer;
        :hover {
            transition: all 0.1s ease-in;
            transform: translateY(-2px);
            font-size: 30px;
        }
    }

    & > :last-child {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40px;
        border-radius: 5px;
        position: relative;
        box-shadow: -3px 5px 8px -3px rgba(75, 75, 75, 0.64);
        cursor: pointer;

        background-color: #ffffff;
        font-size: 18px;

        :hover {
            transition: all 0.1s ease-in;
            transform: translateY(-5px);
        }

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            border-radius: 30%;
            color: #ffffff;
            height: 15px;
            width: 15px;
            font-size: 10px;
            font-weight: 500;
            background-color: #1c1c1c;
            transform: translateX(5px) translateY(-5px);

            top: 0;
            right: 0;
        }
    }
`;
