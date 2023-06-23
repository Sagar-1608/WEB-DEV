

import { useState } from 'react';
import './ProductForm.css';


function ProductForm(props) {



   // in below code we use usestate as single single parameter 

    // const [title ,setTitle] = useState("")
    // const [date, setDate] = useState("")

    // function titleChangeHandler(event){
    //     setTitle(event.target.value)
    //     // console.log(event.target.value);

    // }
    // function dateCahangeHandler (event){
    //     setDate(event.target.value);

    //     console.log("printing")
    //     console.log(title);
    //     console.log(date);
    // }


    const [newTitle ,setTitle] = useState("")
    const [newDate, setDate] = useState("")

    function titleChangeHandler(event){
        setTitle(event.target.value)
        

    }
    function dateCahangeHandler (event){
        setDate(event.target.value);
        // console.log(event.target.value)

    }




    function submitHandler(event){
        event.preventDefault();

        const productData= {
            title:newTitle,
            date:newDate

        }; 


        props.onSaveproduct(productData);

       setTitle('');
       setDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            {/* for name  */}

            <div className='new-p-title'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} value={newTitle}/>

            </div>

            {/* for date  */}
            <div className='new-p-date'>
                <label>Date</label>
                <input type='date' min='2023-01-01' max='2023-12-31' onChange={dateCahangeHandler} value={newDate}/>

            </div>
            <div className='new-p-button'>
                <button type='submit'>Add Product</button>

            </div>

        </form>
    )

}

export default ProductForm;