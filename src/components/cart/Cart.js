import styled from "styled-components";
import CartHeader from "./CartHeader";
import CartProduct from "./CartProduct";

const cart = [
    {
        name: "Ração Seca Nutrilus Pro Carne para Gatos Adultos - 10,1Kg",
        image: "https://www.petlove.com.br/images/products/250518/small/2661128_FRENTE.jpg?1635791683",
        price: "13671",
        category: "rações",
    },
    {
        name: "Ração Royal Canin Sterilised para Gatos Adultos Castrados - 10,1Kg",
        image: "https://www.petlove.com.br/images/products/224004/small/Ra%C3%A7%C3%A3o_Royal_Canin_Sterilised_para_Gatos_Adultos_Castrados_31022932.jpg?1627717840",
        price: "44798",
        category: "rações",
    },
    {
        name: "Ração Seca Nutrilus Pro Salmão para Gatos Adultos Castrados - 10,1Kg",
        image: "https://www.petlove.com.br/images/products/250521/small/2661134_FRENTE.jpg?1635792669",
        price: "15561",
        category: "rações",
    },
    {
        name: "Ração Whiskas Carne para Gatos Adultos Castrados - 10,1Kg",
        image: "https://www.petlove.com.br/images/products/258569/small/RAOWHI_4.JPG?1658246240",
        price: "18999",
        category: "rações",
    },
    {
        name: "Ração Seca Nutrilus Pro Frango para Gatos Adultos Castrados - 10,1Kg",
        image: "https://www.petlove.com.br/images/products/250520/small/2661132_FRENTE.jpg?1635792614",
        price: "15021",
        category: "rações",
    },
];

let subtotal = 0;

const frete = 999;

export default function MyCart() {
    return (
        <Wrapper>
            <CartHeader num={cart.length} />
            {cart.map((produto, i) => {
                subtotal += Number(produto.price);
                return <CartProduct produto={produto} key={i} />;
            })}
            <PurchaseInfo>
                <div>
                    <span>Subtotal</span>
                    <h3>R$ {(subtotal / 100).toFixed(2)}</h3>
                </div>
                <div>
                    <span>Frete</span>
                    <h3>R$ {(frete / 100).toFixed(2)}</h3>
                </div>
                <div>
                    <span>Total</span>
                    <h3>R$ {((frete + subtotal) / 100).toFixed(2)}</h3>
                </div>
            </PurchaseInfo>
            <button> Proceder para o CheckOut</button>
        </Wrapper>
    );
}

const PurchaseInfo = styled.div`
    color: #1c1c1c;
    div {
        display: flex;
        align-items: center;
        height: 50px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        border-bottom: 1px solid white;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    padding: 30px 20px;

    background-color: #fcdacc;
    display: flex;
    flex-direction: column;

    min-height: 100vh;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 80px;
        background-color: #f08080;
        color: white;
        font-size: 15px;
        border-radius: 20px;
        border: none;
        margin-top: 20px;
        cursor: pointer;
    }
`;
