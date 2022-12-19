import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  const[data, setData] = useState(null);

  const getData = () => 
  
  fetch("https://apitest.lokaly.in/store/category_wise_items", {
    method : "POST",
    headers : {
       'Accept': 'application/json',
       'Content-Type': 'application/json'

    },body :JSON.stringify({"store_id":315,"category_id":34224}) 

    
}).then(response=> response.json())

useEffect(() => {
  getData().then((data) => setData(data.data[0].items.map(item => item)))
}, [])
    
  return (
    <div className='App'>
      <h1>Showing Data</h1>
      <div className='container' >
      {data?.map((item) =>
        <div   key={item.item_id
        }>
             <span> <h5> Name:</h5> {item.item_name}</span>
            <img src={item.item_image} alt=""/>
           
            
           
        </div>)}
      </div>
     
    </div>
  )
}

export default App;
