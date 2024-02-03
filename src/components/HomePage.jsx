import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledDiv = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #f3f4f5;
    gap: 40px;

    h1{
        font-size: 36px;
        text-align: center;
        span{
            
            padding: 5px 15px;
            border-radius: 5px;
            font-size: 48px;
            color: #0b8950;
            text-decoration: underline;
        }
    }

    .link{
        padding: 20px 30px;
        border-radius: 10px;
        background-color: white;
        text-decoration: none;
        font-size: 20px;
        box-shadow: 0 5px 7px #0000002d;


    }
`

function HomePage(){
    return (
       <StyledDiv>
        <h1>Welcome to <span>currency converter</span></h1>
        <Link to="/converter" className="link">Get Started</Link>
       </StyledDiv>
    )
}

export default HomePage