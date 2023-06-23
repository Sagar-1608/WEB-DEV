import logo from './logo.svg';
import './App.css';

// importing the our custom element
import Item from './Components/Item';
import ItemDate from './Components/ItemDate';
import Card from './Components/Card';
import Aset from './Components/Aset';
import Newproduct from './Components/Newproduct';



function App() {

  let inputData;

  /// imp concept how to access data of child node 
  function printProdctData(data){
    console.log("i am inside the app.js")
    console.log(data);
     inputData=data;

  } 
  
 
  return (

    // here we need only single parant thats why we create one div 
    // and add all code in that div 
    <div className='cards'>
      <Newproduct printData={printProdctData}></Newproduct>
      <Card>
      <Aset givenData={inputData}></Aset>
      </Card>
    </div>

  );
}

export default App;
