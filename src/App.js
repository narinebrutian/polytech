import { useState } from "react";
import { Points } from "./Components/Points/Points";
import { Vehicales } from "./Components/Vehicales/Vehicales";
import "./App.css"
import { AppRouter } from "./AppRouter";

function App() {
  const [points1 , setPoints1] = useState([])
  const [points2 , setPoints2] = useState([])
  const [selectedVehicale1 , setSelectedVehicale1] = useState(0)
  const [selectedVehicale2 , setSelectedVehicale2] = useState(0)

  const [result , setResult] = useState([])

  console.log(result)

  console.log(result)
  
  return (
    <div className="App">
      {/* <div className="wrapper">
      <Vehicales setSelectedVehicale1={setSelectedVehicale1} setSelectedVehicale2={setSelectedVehicale2}/>
      <Points points1={points1} points2={points2} setPoints1={setPoints1} setPoints2={setPoints2}/>
      <button className="submit" onClick={() => {
      const gamma1 = points1.map((value) => {
        return +value.ref.current.value
      })
      const gamma2 = points2.map((value) => {
        return +value.ref.current.value
      })

      console.log(selectedVehicale1 , selectedVehicale2 , gamma1 , gamma2)

      fetch("http://localhost:5000/compare"  , {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          gamma1,
          gamma2,
          vehicaleId1: selectedVehicale1,
          vehicaleId2: selectedVehicale2
        })
      })    
      .then(response => response.json())
      .then(data => setResult(data))
      
    }}>հաստատել</button>
    {
      result.length === 1 ? <p>{`Հետևյալ դեպքում ավելի հարմարմ է օգտվել ${result[0].value} քաշ տեղափոխող ${result[0].dataValues.brand} տրանսպորտի տեսակից`}</p> : null
    }
    {
      result.length === 2 ? <p>{`Հետրևալ դեպքում հարմար է օգտագործել և առաջին և երկրորդ տեսակները`}</p> : null
    }
      </div> */}
      <AppRouter />
    </div>
    
  );
}

export default App;
