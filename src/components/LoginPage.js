import styled from "styled-components";

import logo from "../assets/cat.png";
import { Link } from "react-router-dom";
import { useState } from "react";

import FormsSection from "./FormsSection";

export default function LoginPage() {
  const logoTitle = "CatLove";
  return (
    <LoginContent>
      <h1>{logoTitle}</h1>
      <img src={logo}></img>
      <FormsSection />
      <Link to="/cadastro" style={{ textDecoration: "none" }}>
        <p>Não tem uma conta? Cadastre-se!</p>
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
    height: 180px;
    width: 180px;

    margin-top: 65px;
    margin-bottom: 50px;
  }

  input {
    width: 303px;
    height: 45px;

    border: solid 2px #d4d4d4;
    border-radius: 5px;
    margin-bottom: 5px;

    font-size: 20px;
    padding-left: 10px;
    display: block;

    ::placeholder {
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

    font-size: 14px;
    color: #f08080;
    text-decoration: underline;
  }
  h1 {
    font-family: "Reenie Beanie", cursive;
    margin-top: 40px;
    color: #1c1c1c;
  }
  font-size: 55px;
`;
