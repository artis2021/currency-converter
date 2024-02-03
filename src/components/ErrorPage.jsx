import styled from "styled-components";
import background from '../assets/background.svg'
import { Link } from "react-router-dom";

const StyledError = styled.div`
    width: 100%;
    min-height: 100vh;
    flex-direction: column;
    gap: 20px;
    display: flex;
    justify-content: center;
    align-items: center; 
    
    img{
        width: 300px;
    }

    a{
        background-color: teal;
        padding: 10px 30px;
        border-radius: 80px;
        color: white;
        text-decoration: none;
        font-size: 20px;
    }
`
function ErrorPage(){
    return <StyledError>
        <img src={background} alt="" />
        <Link to="/">Go Home</Link>
    </StyledError>
}

export default ErrorPage