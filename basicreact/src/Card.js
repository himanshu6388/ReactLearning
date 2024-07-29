import Image  from "./image";
import Name from "./Name";
let title = "Cards"
function Card(props){
    return (
        <>
            <h3 style={
                      {
                        fontSize:'30px', color:'red'
                    }
                }> 
                {title}
            </h3>
            <Name>       
                 <h3>{props.name}</h3>
            </Name>
            <Image src={props.image}/>
        </>
    )
}
export default Card;