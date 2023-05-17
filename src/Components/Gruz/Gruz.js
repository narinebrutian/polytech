import { createRef, useState } from "react"
import { Vehicale } from "../Vehicale/Vehicale"
import { Point } from "../Point/Point"

export const Gruz = () => {
    const ref1 = createRef()
    const ref2 = createRef()

    const [points1 , setPoints1] = useState([<input ref={ref1} type="number" className="input"/>])
    const [points2 , setPoints2] = useState([<input ref={ref2} type="number" className="input"/>])
    const [selectedVehicale1 , setSelectedVehicale1] = useState(0)
    const [selectedVehicale2 , setSelectedVehicale2] = useState(0)

    const [result , setResult] = useState([])

    const handleSubmit = () => {
      const gamma1 = points1.map((value) => {
        return +value.ref.current.value
      })

      const gamma2 = points2.map((value) => {
        return +value.ref.current.value
      })

      fetch(`${process.env.REACT_APP_API_BASE_URL}/compare`  , {
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
      .catch(() => setResult([]))
    }

    const handleAddPoint = () => {
      const ref1 = createRef()
      const ref2 = createRef()
      setPoints1([...points1 , <input ref={ref1} type="number" className="input"/>])
      setPoints2([...points2 , <input ref={ref2} type="number" className="input"/>])
    }

    return <>
      <div className="wrapper">
        <div className="gruz_vehicales">
          <Vehicale setSelectedVehicale={setSelectedVehicale1} text={"Առաջին տրանսպորտային միջոց"} name="brand1"/>
          <Vehicale setSelectedVehicale={setSelectedVehicale2} text={"Երկրորդ տրանսպորտային միջոց"} name="brand2"/>
        </div>
        <button onClick={() => handleAddPoint()} className="submit addBTN">Ավելացնել կետ</button>
        <div className="gruz_points">
          <Point points={points1} text="Առաջին տրանսպորտային միջոց"/>
          <Point points={points2} text="Երկրորդ տրանսպորտային միջոց"/>
        </div>
        <button className="submit submitBTN" onClick={() => handleSubmit()}>Հաստատել</button>
        {
          result.length === 1 ? <p className="result_text">{`Հետևյալ դեպքում ավելի հարմար է օգտվել ${result[0].value} քաշ տեղափոխող ${result[0].dataValues.brand} տրանսպորտի տեսակից`}</p> : null
        }
        {
          result.length === 2 ? <p>{`Հետևյալ դեպքում հարմար է օգտագործել և առաջին, և երկրորդ տեսակները`}</p> : null
        }
      </div>
    </>
}