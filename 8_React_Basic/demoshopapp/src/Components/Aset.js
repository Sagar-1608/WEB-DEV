import './Aset.css';
import Item from './Item';
// import useState
import React , {useState} from 'react';

function Aset({data,removeProduct}){
 
    return (

        <div className="card">
            {
                data.map((item)=>{
                    return <Item key={item.id} {...item} removeProduct={removeProduct}></Item> // ..tour means cloning object  //then both all abject and removetour function send to card
                })
            }
          </div>
       
        
    )

}

export default Aset;