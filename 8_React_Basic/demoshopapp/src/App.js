import logo from './logo.svg';
import './App.css';

// importing the our custom element
import Item from './Components/Item';
import ItemDate from './Components/ItemDate';
import Card from './Components/Card';



function App() {
  
  // this is list of object 
 const  itemsList=[
    {
      name:"Wheel",
      day:"20",
      month:"Jan",
      year:"2020"
    },
    {
      name:"Santur",
      day:"22",
      month:"Jun",
      year:"2021"
    },
    {
      name:"Parle",
      day:"15",
      month:"Aug",
      year:"2022"
    },
    {
      name:"R-GOLD",
      day:"07",
      month:"may",
      year:"2023"
    }

  ];
  return (

    // here we need only single parant thats why we create one div 
    // and add all code in that div 
    
  
    <div>
    <Card>
    <Item name={itemsList[0].name}></Item>
    <ItemDate day={itemsList[0].day} month={itemsList[0].month} year={itemsList[0].year}></ItemDate>

    <Item name={itemsList[1].name}></Item>
    <ItemDate day={itemsList[1].day} month={itemsList[1].month} year={itemsList[1].year}></ItemDate>

    <Item name={itemsList[2].name}></Item>
    <ItemDate day={itemsList[2].day} month={itemsList[2].month} year={itemsList[2].year}></ItemDate>

    <Item name={itemsList[3].name}></Item>
    <ItemDate day={itemsList[3].day} month={itemsList[3].month} year={itemsList[3].year}></ItemDate>


{/* <div className="App"> Hello omji!!</div> */}

    </Card>

    

    </div>
    
  );
}

export default App;
