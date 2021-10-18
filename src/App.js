import logo from './logo.svg';
import './App.css';
import React from 'react';


function App (){

  React.useEffect(() => {

    const getData = () => {
      fetch("https://www.superheroapi.com/api.php/4917344464945186/69/connections")
      .then((response) => response.json())
      .then((response.json) => {
        
      });
    }


  })

  /*const [ID, setID] = React.useState("");

  React.useEffect(() => {

    const getData = async () => {

      // Below is to call API
      const res =  await fetch("https://www.superheroapi.com/api.php/4917344464945186/69/connections")
      const test_data = await res.json()

    // below is to specify which data from JSON you would like to call, such as, name, id.
    console.log(test_data)
    }

    setID(test_data.id);
    const data = getData();
  }); */

  return(
    <div>{}</div>
  )

}

export default App;