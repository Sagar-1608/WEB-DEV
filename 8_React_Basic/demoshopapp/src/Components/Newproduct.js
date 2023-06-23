import './Newproduct.css'

import ProductForm from './ProductForm'

function Newproduct(props)
{
    function saveProduct(product){
        console.log("i am inside  new product")
        console.log(product);

        // calling the parent function
        props.printData(product);
 
    }

    return(
        <div className='newproduct'>
            <ProductForm onSaveproduct={saveProduct}></ProductForm>
        </div>
    )
}
export default Newproduct;   