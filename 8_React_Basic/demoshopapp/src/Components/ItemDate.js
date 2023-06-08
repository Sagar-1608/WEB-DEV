import './ItemDate.css'

function ItemDate(p)
{
    const day = p.day;
    const month = p.month;
    const year  = p.year;

    return(
        
    <div className='date'>
    <div>{day}</div>
    <div>{month} </div>
    <div>{year}</div>
</div>
    )
        
}

export default ItemDate;