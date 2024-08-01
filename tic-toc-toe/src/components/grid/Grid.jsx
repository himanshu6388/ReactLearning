import { useState } from "react";
import Card from "../cards/Card";
import './Grid.css';

function Grid({numberOfCard}){
    const [board, setBoard] = useState(Array(numberOfCard).fill(""));

    return (
        <div className="grid">
            {board.map((el, idx) => <Card key={idx}/>)};
        </div>
    )
}
export default Grid;