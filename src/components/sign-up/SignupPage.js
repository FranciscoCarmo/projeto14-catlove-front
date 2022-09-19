import styled from "styled-components";

import logo from "../../assets/cat.png";
import { Link } from "react-router-dom";

import FormsSignup from "./FormsSignup";

export default function SignupPage() {
    const logoTitle = "CatLove";
    return (
        <LoginContent>
            <h1>{logoTitle}</h1>
            <img src={logo}></img>
            <FormsSignup />
            <Link to='/' style={{ textDecoration: "none" }}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </LoginContent>
    );
}

const LoginContent = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    background-color: #fafaff;

    img {
        width: 50vw;
        height: auto;
        max-width: 180px;

        margin-top: 65px;
        margin-bottom: 50px;
    }

    input {
        width: 90vw;
        max-width: 303px;
        height: 45px;

        border: solid 2px #d4d4d4;
        border-radius: 5px;
        margin-bottom: 5px;

        font-size: 20px;
        padding-left: 10px;
        display: block;

        ::placeholder {
            opacity: 1;
            color: #d4d4d4;
            font-size: 20px;
        }
    }
    form {
        display: flex;
        flex-direction: column;

        align-items: center;
    }

    p {
        margin-top: 22px;
        text-align: center;
        font-size: 14px;
        color: #f08080;
        text-decoration: underline;
        margin-bottom: 30px;
    }
    h1 {
        font-family: "Reenie Beanie", cursive;
        margin-top: 40px;
        color: #1c1c1c;
    }
    font-size: 55px;
`;
