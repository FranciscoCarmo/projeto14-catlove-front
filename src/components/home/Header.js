import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const name = localStorage.getItem("name");
    const image = localStorage.getItem("image");

    const navigate = useNavigate();

    return (
        <Wrapper>
            <Back>
                <IoIosArrowBack onClick={() => navigate(-1)} />
            </Back>
            <h2>Bem vindo, {name}!</h2>
            <ProfilePicture>
                <img src={image} alt='' />
            </ProfilePicture>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
        font-size: 18px;
        font-weight: bold;
    }
`;

const Back = styled.div`
    font-size: 25px;
    cursor: pointer;

    :hover {
        transition: all 0.1s ease-in;
        transform: translateY(-2px);
        font-size: 30px;
    }
`;

const ProfilePicture = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 5px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 6px;
        object-fit: fill;
    }
`;
