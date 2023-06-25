import './Newproduct.css'

import React, {useState} from "react"

function Newproduct(props)
{
    // function saveProduct(product){
    //     console.log("i am inside  new product")
    //     console.log(product);

    //     // calling the parent function
    //     props.printData(product);
 
    // }


    const [newTitle ,setTitle] = useState("")
    const [newDate, setDate] = useState("")

    function titleChangeHandler(event){
        setTitle(event.target.value)
        

    }
    function dateCahangeHandler (event){
        setDate(event.target.value);

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

    return(
        <div className='newproduct'>
            {/* <ProductForm onSaveproduct={saveProduct}></ProductForm> */}

            
            <form className='form' onSubmit={submitHandler}>
            {/* for name  */}

            <div className='new-p-title'>
                <label>Title:-</label>
                <input type='text' onChange={titleChangeHandler} value={newTitle}/>

            </div>

            {/* for date  */}
            <div className='new-p-date'>
                <label>Date:-</label>
                <input type='date' min='2023-01-01' max='2023-12-31' onChange={dateCahangeHandler} value={newDate}/>

            </div>
            <div className='new-p-button'>
                <button  type='submit'>Add Product</button>

            </div>

        </form>

        </div>
    )
}
export default Newproduct;   