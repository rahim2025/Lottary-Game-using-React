import TicketNum from "./TicketNum"
import "./styleAll.css"
export default function Ticket({ticket}){
    return(
        <div className="Ticket">
        {ticket.map((num,idx)=>(
                <TicketNum num={num} />
            ))
        }
        </div>
    );
}