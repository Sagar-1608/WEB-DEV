import { useState } from "react";

 


function Card({id , image, info, price, name, removeTour}) // you can also use props 
{
    const [readmore,setReadmore] = useState(false);
    
    const descreption = readmore ? info :`${info.substring(0,200)}....`;

    function readmoreHandler(){
        setReadmore(!readmore);
    }

    return(
        <div className="card">
        <img src={image} className="image" />  


        <div className="tour-info"> 

        <div className="tour-details">
            <h4 className="tour-price">{price}</h4>
            <h4 className="tour-name">{name}</h4>

            <div className="tour-descreption"> 
            {descreption}

            <span className="read-more" onClick={readmoreHandler}>
                {readmore? `Show less`: `Read more`}
            </span>
            
            </div>
        </div>
        </div>

        <button className="btn-red" onClick={()=>removeTour(id)}> 
         Not Insterested
        </button>
        



      

        </div>
    )

}

export default Card;