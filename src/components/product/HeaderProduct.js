import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function HeaderProduct() {
  const name = localStorage.getItem("name");
  const image = localStorage.getItem("image");

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Back>
        <IoIosArrowBack onClick={() => navigate(-1)} />
      </Back>
      <h2>CatLove</h2>
      <ProfilePicture>
        <img src={image} alt="" />
      </ProfilePicture>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding-left: 18px;
  padding-right: 18px;

  h2 {
    font-size: 28px;
    font-weight: bold;
    font-family: "Reenie Beanie", cursive;
  }
`;

const Back = styled.div`
  font-size: 25px;
`;

const ProfilePicture = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 4px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    object-fit: fill;
  }
`;
