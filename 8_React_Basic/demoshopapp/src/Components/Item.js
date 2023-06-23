import { Children } from 'react';
import './Item.css'

function Item(props) { 


    const itemName=props.name;
    
    return(
        <div>
         <p className='nirma'>{itemName}</p>
        
        </div> 
        
       
    );

}

export default Item;