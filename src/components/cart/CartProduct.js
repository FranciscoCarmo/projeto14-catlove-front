import styled from "styled-components";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillWechat, AiOutlineMinusCircle } from "react-icons/ai";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

export default function CartProduct(props) {
    const { name, price, image, category, _id } = props.produto;
    const { myCart, setMyCart } = useContext(UserContext);
    const cart = [...myCart];
    const num = "01";

    /*  async function addToCard() {
        let t = [];
        let ind = await cart.indexOf(_id);

        t.push(cart[1]);

        /      let product = cart.splice(ind, 1);
        let teste = { ...product[0], amount: Number(product[0].amount) + 1 }; 
        console.log(t);
    } */

    return (
        <Wrapper>
            <img src={image} />

            <ProductInfo>
                <h1>{name}</h1>
                <p>{category}</p>
                <h2>R$ {(price / 100).toFixed(2)}</h2>
            </ProductInfo>
            <div>
                <AiOutlineMinusCircle />
                <span>{num}</span>
                <IoIosAddCircle onClick={addToCard} />
            </div>
        </Wrapper>
    );
}

const ProductInfo = styled.div`
    display: flex;
    max-width: 60%;
    height: 80%;
    flex-direction: column;
    justify-content: space-around;
    color: #1c1c1c;

    h1 {
        font-size: 12px;
    }
    p {
        font-size: 12px;
        color: #daddd8;
    }
    h2 {
        font-size: 15px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    width: 100%;
    background-color: #fafaff;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 0 12px;

    img {
        height: 40%;
    }

    & > :last-child {
        display: flex;
        align-items: center;
        width: 20%;
        justify-content: space-around;
        font-size: 20px;
        margin-top: 40px;

        span {
            font-size: 8px;
            font-weight: 700;
        }
    }
`;
