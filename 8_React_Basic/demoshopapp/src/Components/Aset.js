import './Aset.css';
import Item from './Item';
import ItemDate from './ItemDate';

// import useState
import React , {useState} from 'react';


const itemsList = [
    {
      name: "Wheel",
      day: "20",
      month: "Jan",
      year: "2020"
    },
    {
      name: "Santur",
      day: "22",
      month: "Jun",
      year: "2021"
    },
    {
      name: "Parle",
      day: "15",
      month: "Aug",
      year: "2022"
    },
    {
      name: "R-GOLD",
      day: "07",
      month: "may",
      year: "2023"
    }

  ];

function Aset(props){
 
   

    const [day , setDay  ] = useState();      

    function clickHandler()
    {
        
    }

    


    return (
        <div>
            <div className='c1'>
           <ItemDate day={itemsList[0].day} month={itemsList[0].month} year={itemsList[0].year}></ItemDate>
           <Item name={itemsList[0].name}></Item>
           <button onClick={clickHandler}>Add</button>
         </div>

         <div className='c1'>
            <ItemDate day={itemsList[1].day} month={itemsList[1].month} year={itemsList[1].year}></ItemDate>
            <Item name={itemsList[1].name}></Item>
            <button onClick={clickHandler}>Add</button>
         </div>

         <div className='c1'>
          
           <ItemDate day={itemsList[2].day} month={itemsList[2].month} year={itemsList[2].year}></ItemDate>
           <Item name={itemsList[2].name}></Item>
           <button onClick={clickHandler}>Add</button>


         </div>

         <div className='c1'>
          
           <ItemDate day={itemsList[3].day} month={itemsList[3].month} year={itemsList[3].year}></ItemDate>
           <Item name={itemsList[3].name}></Item>
           <button onClick={clickHandler}>Add</button>
         </div>
       

        </div>
        
    )

}

export default Aset;