import styled from "styled-components";
import { IoIosAddCircle } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { HiOutlineMinusCircle } from "react-icons/hi";
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
            <div>
                <img src={image} />
            </div>

            <ProductInfo>
                <h1>{name}</h1>
                <p>{category}</p>
                <h2>
                    R$ {(price / 100).toFixed(2).toString().replace(".", ",")}
                </h2>
            </ProductInfo>
            <ButtonsSection>
                <MdClose
                    onClick={() => {
                        handleDelete();
                    }}
                />
            </ButtonsSection>

            <div>
                <Minus onClick={() => changeAmount("minus")} />
                <span>{amount}</span>
                <Plus onClick={() => changeAmount("plus")} />
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
        font-size: 11px;
        font-weight: 700;
    }
    p {
        font-size: 11px;
        color: #8a8a8a;
    }
    h2 {
        color: #ff6b64;
        font-size: 12px;
        font-weight: 700;
    }
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 120px;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    background-color: #f0f0f0;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 0 12px;

    & > :first-child {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 90px;
        width: 80px;
        margin-right: 10px;
        border-radius: 10px;
        background-color: #ffffff;
        box-shadow: -3px 5px 8px -3px rgba(75, 75, 75, 0.64);

        img {
            height: 70%;
            width: auto;
        }
    }

    & > :last-child {
        display: flex;
        align-items: center;
        width: 20vw;
        justify-content: space-around;
        font-size: 30px;
        margin-top: 40px;
        cursor: pointer;
        font-weight: 400;
        max-width: 90px;

        span {
            font-size: 12px;
            font-weight: 700;
            margin: 0 5px;
        }
    }
`;

const ButtonsSection = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;

    position: absolute;
    right: 10px;
    top: 10px;
`;

const Minus = styled(HiOutlineMinusCircle)`
    :hover {
        transform: translateY(-2px);
        transition: all 0.1s ease-in;
    }

    :active {
        transform: translateY(4px);
        transition: all 0.2s ease-in;
    }
`;
const Plus = styled(IoIosAddCircle)`
    :hover {
        transform: translateY(-2px);
        transition: all 0.1s ease-in;
    }

    :active {
        transform: translateY(4px);
        transition: all 0.2s ease-in;
    }
`;
