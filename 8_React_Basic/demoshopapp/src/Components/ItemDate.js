import './ItemDate.css'
import React , {useState} from 'react';

function ItemDate(p)
{
    const day = p.day;
    const month = p.month;
    const year  = p.year;

    // const [day , setDay  ] = useState(p.day);      

    // function clickHandler()
    // {
    //     setDay("16")
    // }

    return(
        
    <div className='date'>
    <div>{day}</div>
    <div>{month} </div>
    <div>{year}</div>
    {/* <button onClick={clickHandler}>update</button> */}
</div>
    )
        
}

export default ItemDate;