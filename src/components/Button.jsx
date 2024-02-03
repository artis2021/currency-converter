import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: ${(props) => {
        return props.color
    }};
    border: none;
    outline: none;
    padding: 10px 30px;
    font-size: 20px;
    color: white;
    border-radius: 30px;
    transition: all 0.2s ease;

    /* Hover effect */
    &:hover{
        transform: scale(0.95);
    }

    /* Active effect */
    &:active{
        transform: scale(0.9);
    }
`


function Button({color}) {
  return (
    <StyledButton color={color}>
        Click Me
    </StyledButton>
  )
}

export default Button
