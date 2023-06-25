import { Children } from 'react';
import './Item.css'
import React, {useState} from "react"

function Item({id, day, month, year, name, removeProduct }) {



    return (
        <div className='p'>
            <div className='car'>


                <div className='c1'>
                    <div className='date'>
                        <div>{day}</div>
                        <div>{month} </div>
                        <div>{year}</div>
                    </div>

                    <p className='name'>{name}</p>
                    <button onClick={()=>removeProduct(id)}>Remove</button>
                    
                </div>

            </div>


        </div>


    );

}

export default Item;