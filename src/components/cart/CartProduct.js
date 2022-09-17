import styled from "styled-components";
import { IoIosAddCircle } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { AiFillWechat, AiOutlineMinusCircle } from "react-icons/ai";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { deleteProduct, postCart } from "../../service/axiosCatLove";

export default function CartProduct(props) {
    const { name, price, image, category, amount } = props.produto;
    const { reload, setReload } = useContext(UserContext);
    const { myCart, setMyCart } = useContext(UserContext);
    const cart = [...myCart];

    async function changeAmount(type) {
        if (amount === 1 && type === "minus") {
            return;
        }
        let ind = cart.indexOf(props.produto);
        if (type === "minus") {
            cart[ind].amount--;
        } else {
            cart[ind].amount++;
        }
        setReload(reload + 1);
        setMyCart(cart);

        postCart({ products: [...myCart] })
            .then((res) => {
                console.log("sucesso ao postar carrinho");
            })
            .catch((err) => {
                alert("Falha ao enviar o carrinho");
                console.log(err);
            });
    }

    function handleDelete() {
        deleteProduct(props.produto)
            .then((res) => {
                console.log(props.produto);
                console.log("sucesso ao enviar deletar");
                setReload(reload + 1);
            })
            .catch((err) => {
                alert("Falha ao enviar o delete");
                console.log(err);
            });
    }

    return (
        <Wrapper>
            <img src={image} />

            <ProductInfo>
                <h1>{name}</h1>
                <p>{category}</p>
                <h2>R$ {(price / 100).toFixed(2)}</h2>
            </ProductInfo>
            <ButtonsSection>
                <MdClose
                    onClick={() => {
                        handleDelete();
                    }}
                />
            </ButtonsSection>

            <div>
                <AiOutlineMinusCircle onClick={() => changeAmount("minus")} />
                <span>{amount}</span>
                <IoIosAddCircle onClick={() => changeAmount("plus")} />
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
    position: relative;
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

const ButtonsSection = styled.div`
    display: flex;
    flex-direction: column;

    position: absolute;
    right: 10px;
    top: 10px;
`;
