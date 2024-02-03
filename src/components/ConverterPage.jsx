import { useState } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"
import { IoHomeOutline } from "react-icons/io5";

const StyledConverter = styled.div`
    background-color: #f3f4f5;
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon{
        position: fixed;
        top: 10px;
        right: 10px;
        font-size: 24px;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 10px 20px;
        border-radius: 10px;
        text-decoration: none;
        color: #646363;
        box-shadow: 0 6px 8px #00000017;
    }

    .card{
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0 5px 6px #00000024;

        .selects{
            display: flex;
            width: 100%;
            justify-content: space-between;
            gap: 5px;
            select{
                padding: 5px 10px;
                border: 1px solid gray;
                color: gray;
                border-radius: 2px;
                flex: 1;

            }
        }

        input{
            padding: 5px 10px;
            border: 1px solid gray;
            color: gray;
            border-radius: 2px;
            flex: 1;
            width: 100%;
        }

        button{
            padding: 10px 20px;
            border-radius: 5px;
            border: none;
            outline: none;
            background-color: #2c2b2b;
            color: white;
            transition: all ease 0.3s;
            
            &:active{
                transform: scale(0.9);
            }
        }

        




    }
`

function ConverterPage() {
    // states
    const [from, setFrom] = useState('USD')
    const [to, setTo] = useState('INR')
    const [amount, setAmount] = useState(0)

    const [ans, setAns] = useState(-1)

    const options = ["SGD", "MYR", "EUR", "USD", "AUD", "JPY", "CNH", "HKD", "CAD", "INR", "DKK", "GBP", "RUB", "NZD", "MXN", "IDR", "TWD", "THB", "VND"];
    const handleClick = async () => {
        // from, to, amount
        // make an API request
        // get the data
        // update the state
        const url = `https://currency-exchange.p.rapidapi.com/exchange?from=${from}&to=${to}`;

        if(from === to){
            setAns(amount)
            return;
        }

        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    'X-RapidAPI-Key': '499774d812msh124920385c363b3p1da951jsn86e5ddd192e5',
                    'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
                }
            })
            const data = await response.json();
            console.log(data)
            setAns((data*amount).toFixed(4))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <StyledConverter>
            <Link to="/" className="icon">
                <IoHomeOutline /> Home
            </Link>
            <div className="card">
                <h1>
                    Welcome to Currency Converter
                </h1>
                <div className="selects">
                <select id="from" value={from} onChange={(evt) => setFrom(evt.target.value)}>
                    {
                        options.map((ele, idx) => {
                            return <option value={ele} key={idx}>{ele}</option>
                        })
                    }
                </select>
                <select id="to" value={to} onChange={(evt) => setTo(evt.target.value)}>
                    {
                        options.map((ele, idx) => {
                            return <option value={ele} key={idx}>{ele}</option>
                        })
                    }
                </select>
                </div>
                <input type="number" id="amount" placeholder="Enter amount" value={amount} onChange={(evt) => setAmount(evt.target.value)} />
                <button onClick={handleClick}>Convert</button>
                <div className="result">
                    {ans === -1 ? "Please enter some amount and convert." : ans}
                </div>
            </div>
        </StyledConverter>
    )
}

export default ConverterPage