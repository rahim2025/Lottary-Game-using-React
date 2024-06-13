import "../styleAll.css"
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { genTicket,sum } from "./helperFunc.js";
import Ticket from "../Ticket.jsx";


export default function Lottary({num}){
    let [ticket,setTicket] = useState(genTicket(num));
    let isWinning =  sum(ticket) <= 15 ;
    let buyTicket = ()=>{
        setTicket(genTicket(num))
    }
    return (
        <div className="Lottary">
            <h1>Lottary Game</h1>
            <Ticket ticket={ticket} />
            <h3>{isWinning && "Congratulation! You have won the game" }</h3>
            <button onClick={buyTicket}>Buy Ticket</button>
        </div>
    )
}