import { useState } from "react"
import { Points } from "../Points/Points"
import { Vehicales } from "../Vehicales/Vehicales"

export const Gruz = () => {
    const [points1 , setPoints1] = useState([])
    const [points2 , setPoints2] = useState([])
    const [selectedVehicale1 , setSelectedVehicale1] = useState(0)
    const [selectedVehicale2 , setSelectedVehicale2] = useState(0)

    const [result , setResult] = useState([])

    return <>
        <div className="wrapper">
      <Vehicales setSelectedVehicale1={setSelectedVehicale1} setSelectedVehicale2={setSelectedVehicale2}/>
      <Points className='car_title' points1={points1} points2={points2} setPoints1={setPoints1} setPoints2={setPoints2} text1={"Առաջին տր․ միջ․"} text2={"Երկրորդ  տր․ միջ․"}/>
      <button className="submit submitBTN" onClick={() => {
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
      
    }}>Հաստատել</button>
    {
      result.length === 1 ? <p className="result_text">{`Հետևյալ դեպքում ավելի հարմար է օգտվել ${result[0].value} քաշ տեղափոխող ${result[0].dataValues.brand} տրանսպորտի տեսակից`}</p> : null
    }
    {
      result.length === 2 ? <p>{`Հետևյալ դեպքում հարմար է օգտագործել և առաջին, և երկրորդ տեսակները`}</p> : null
    }
      </div>
    </>
}