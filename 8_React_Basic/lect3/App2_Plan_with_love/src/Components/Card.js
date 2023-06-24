import { useState } from "react";

 


function Card({id , image, info, price, name, removeTour}) // you can also use props 
{
    // this constant use for read more and less functionality
    const [readmore,setReadmore] = useState(false);
    
    // if readmore is true the show all info otherwise show short descreption 
    const descreption = readmore ? info :`${info.substring(0,200)}....`;

    //this function set true and false value of read more 
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

        <button className="btn-red" onClick={()=>removeTour(id)}>    {/* removeTour fub=nction call here with id that will be remove  */}
         Not Insterested
        </button>
        



      

        </div>
    )

}

export default Card;