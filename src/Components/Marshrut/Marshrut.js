import { useState , useRef, createRef} from "react"
import { Point } from "../Point/Point"
import { Vehicale } from "../Vehicale/Vehicale"

export const Marshrut = () => {
    const [selectedVehicale , setSelectedVehicale] = useState(0)
    const [points1 , setPoints1] = useState([])
    const [points2 , setPoints2] = useState([])

    const [result , setResult] = useState([])

    const addPoint1 = () => {
        const ref = createRef()
        setPoints1([...points1 , <input className='input' type="number" ref={ref} />])
    }

    const addPoint2 = () => {
        const ref = createRef()
        setPoints2([...points2 , <input type="number"  className='input' ref={ref} />])
    }

    const handleSubmit = () => {
        const gamma1 = points1.map((value) => {
            
            return +value.ref?.current.value
        })
        const gamma2 = points2.map((value) => {
            return +value.ref?.current.value
        })

        const body = JSON.stringify({
            vehicaleId: selectedVehicale,
            gamma1,
            gamma2
        })

        fetch(`${process.env.REACT_APP_API_BASE_URL}/compare-route`  , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body
        })    
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setResult(data)
        })
        .catch(() => setResult([]))
    }

    return <div className="marshrut_div">
        <Vehicale setSelectedVehicale={setSelectedVehicale}/>
        <hr/>
        <div className="points_div">
            <div>
                <button onClick={() => addPoint1()} className="submit btn btn-primary addMarshKet">Ավելացնել բեռնման բեռնաթափման կետ</button>
                <br/>   
                <Point text="Ճոճանակավոր" points={points1} setPoints1={setPoints1}/>  
                <br/>    
            </div>
            <div>
                <button onClick={() => addPoint2()} className="submit btn btn-primary addMarshKet">Ավելացնել բեռնման բեռնաթափման կետ</button>
                <Point text="Օղակաձև" points={points2} setPoints1={setPoints2}/>
            </div>
        </div>
        <button className="submit btn btn-success" onClick={() => handleSubmit()}>Հաստատել</button>
        {
            result.length === 2 && <p>Տվյալ դեպքում տարբերություն չկա, թե որ երթուղին կընտրենք</p>
        }
        {
            result.length === 1 && <p>{`Տվյալ դեպքում հարմար է օգտվել ${result[0].dataValues.brand} ${result[0].type} երթուղուց։`}</p>
        }
    </div>
}