import { useState , useRef, createRef} from "react"
import { Point } from "../Point/Point"
import { Vehicale } from "../Vehicale/Vehicale"

export const Marshrut = () => {
    const [selectedVehicale , setSelectedVehicale] = useState(0)
    const [points1 , setPoints1] = useState([])
    const [points2 , setPoints2] = useState([])

    const [result , setResult] = useState()

    const addPoint1 = () => {
        const ref = createRef()
        setPoints1([...points1 , <input className='ket_input' type="number" ref={ref} />, <br/>])
    }

    const addPoint2 = () => {
        const ref = createRef()
        setPoints2([...points2 , <input type="number"  className='ket_input' ref={ref} />, <br/>])
    }

    return <div className="marshrut_div">
        <Vehicale setSelectedVehicale={setSelectedVehicale}/>
        <hr/>
        <div className="points_div">
            <div>
                <button onClick={() => addPoint1()} className="submit btn btn-primary addMarshKet">Ավելացնել Կետ</button>
                <br/>   
                <Point text="Ճոճանակային" points={points1} setPoints1={setPoints1}/>  
                <br/>    
            </div>
            <div>
                <button onClick={() => addPoint2()} className="submit btn btn-primary addMarshKet">Ավելացնել Կետ</button>
                <Point text="Շրջանաձև" points={points2} setPoints1={setPoints2}/>
            </div>
        </div>
        <button className="submit btn btn-success" onClick={() => {
            const gamma1 = points1.map((value) => {
                console.log(value)
                return +value.ref.current.value
            })
            const gamma2 = points2.map((value) => {
                return +value.ref.current.value
            })

            fetch("http://localhost:5000/compare-route"  , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                vehicaleId: selectedVehicale,
                gamma1,
                gamma2
            })
            })    
            .then(response => response.json())
            .then(data => console.log(data))
        }}>Հաստատել</button>
    </div>
}