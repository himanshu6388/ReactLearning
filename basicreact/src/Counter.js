import { useState} from 'react';
function Counter(){

    const [x, setX] = useState(0);
   
    return (
        <>
        Count x: {x} is {(x % 2 === 0) ?'Even' : 'Odd'}; <br/>
        <button onClick={()=>{setX(x+1)}}>Inc</button>
        <button onClick={()=>{setX(x-1)}}>Dec</button>

        </>
    )
}

export default Counter;