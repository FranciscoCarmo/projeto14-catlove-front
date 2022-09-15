import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

import { signIn } from "../service/axiosCatLove.js";

export default function FormsSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleLoginForm(e) {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };
    console.log(loginData);

    const requisicao = signIn(loginData);

    setIsLoading(true);

    requisicao
      .then((resposta) => {
        console.log("Deu certo");
        console.log(resposta.data);
        setUser({ ...resposta.data });
        console.log(resposta.data.token);

        localStorage.setItem("token", resposta.data.token);
        localStorage.setItem("image", resposta.data.image);
        localStorage.setItem("name", resposta.data.name);

        navigate("/home", { replace: true });

        setEmail("");
        setPassword("");
        setIsLoading(false);
      })
      .catch(() => {
        alert("Falha no login");

        console.log(requisicao);
        setEmail("");
        setPassword("");
        setIsLoading(false);
      });
  }

  if (isLoading) {
    return (
      <form onSubmit={handleLoginForm}>
        <input type="email" placeholder="email" disabled value={email}></input>
        <input
          type="password"
          placeholder="senha"
          disabled
          value={password}
        ></input>
        <Botao type="submit" disabled fosco="true">
          <ThreeDots color="#FFF" height={50} width={50} />
        </Botao>
      </form>
    );
  } else {
    return (
      <form onSubmit={handleLoginForm}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <input
          type="password"
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        <Botao type="submit">Entrar</Botao>
      </form>
    );
  }
}

const Botao = styled.button`
  width: 303px;
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
