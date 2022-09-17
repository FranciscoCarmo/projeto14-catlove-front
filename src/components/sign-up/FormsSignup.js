import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { signUp } from "../../service/axiosCatLove.js";

export default function FormsSigninSection() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    let navigate = useNavigate();

    function handleSigninForm(e) {
        e.preventDefault();

        const signinForm = {
            email: email,
            name: nome,
            image: foto,
            password: password,
            confirm,
        };
        console.log(signinForm);

        const requisicao = signUp(signinForm);

        setIsLoading(true);

        requisicao
            .then(() => {
                console.log("Deu certo");
                console.log(requisicao);

                navigate("/", { replace: true });

                setEmail("");
                setPassword("");
                setNome("");
                setFoto("");
                setIsLoading(false);
            })
            .catch(() => {
                alert("Falha no cadastro");

                console.log(requisicao);

                setIsLoading(false);
            });
    }

    if (isLoading) {
        return (
            <form onSubmit={handleSigninForm}>
                <input
                    type='email'
                    placeholder='email'
                    disabled
                    value={email}
                ></input>
                <input
                    type='password'
                    placeholder='senha'
                    disabled
                    value={password}
                ></input>
                <input
                    type='password'
                    placeholder='senha'
                    disabled
                    value={confirm}
                ></input>
                <input
                    type='text'
                    placeholder='nome'
                    disabled
                    value={nome}
                ></input>
                <input
                    type='text'
                    placeholder='foto'
                    disabled
                    value={foto}
                ></input>
                <Botao type='submit' disabled fosco='true'>
                    <ThreeDots color='#FFF' height={50} width={50} />
                </Botao>
            </form>
        );
    } else {
        return (
            <form onSubmit={handleSigninForm}>
                <input
                    type='email'
                    placeholder='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                ></input>
                <input
                    type='password'
                    placeholder='senha'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                ></input>
                <input
                    type='password'
                    placeholder='confirme a senha'
                    onChange={(e) => setConfirm(e.target.value)}
                    value={confirm}
                ></input>
                <input
                    type='text'
                    placeholder='nome'
                    onChange={(e) => setNome(e.target.value)}
                    value={nome}
                ></input>
                <input
                    type='text'
                    placeholder='foto'
                    onChange={(e) => setFoto(e.target.value)}
                    value={foto}
                ></input>
                <Botao type='submit'>Cadastrar</Botao>
            </form>
        );
    }
}

const Botao = styled.button`
    width: 90vw;
    max-width: 303px;
    height: 45px;

    border: none;
    border-radius: 5px;

    background-color: #f08080;
    opacity: ${(props) => (props.fosco ? 0.3 : 1)};
    color: white;

    font-size: 21px;

    display: flex;
    justify-content: center;
    align-items: center;
`;
