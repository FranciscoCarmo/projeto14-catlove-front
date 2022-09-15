import { IoIosArrowBack } from "react-icons/io";
import { BsFillHandbagFill } from "react-icons/bs";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function CartHeader() {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <IoIosArrowBack onClick={() => navigate(-1)} />
            <h1>Carrinho de Compras</h1>

            <div>
                <BsFillHandbagFill />
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
    color: #1c1c1c;

    h2 {
        font-size: 15px;
        font-weight: bold;
    }

    & > :first-child {
        font-size: 20px;
    }

    & > :last-child {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40px;
        border-radius: 5px;

        background-color: #ffffff;
        font-size: 18px;
    }
`;
