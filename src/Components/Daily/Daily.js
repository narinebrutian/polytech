import { useRef, useState } from "react"
import { Vehicale } from "../Vehicale/Vehicale"

export const Daily = () => {
    const [selectedVehicale , setSelectedVehicale] = useState(0)
    const [result , setResult] = useState({})

    const ref = useRef()

    const handleSubmit = () => {
        const body = {
            vehicaleId: selectedVehicale,
            count: ref.current.value
        }

        fetch(`${process.env.REACT_APP_API_BASE_URL}/daily`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(data => setResult(data))
        .catch(() => setResult([]))
    }

    return <div className="daily">
        <Vehicale setSelectedVehicale={setSelectedVehicale}/>
        <div className="daily_submit_1">
            <div className="vehicales_count">
                <label>Ներմուծել երթուղում գտնվող մեքենաների քանակը</label>
                <input type="number" className="coif" ref={ref}/>
            </div>
            <button className="daily_submit btn btn-success" onClick={() => handleSubmit()}>Հաստատել</button>
        </div>
        {
            result?.value?.length === 1 ? <p>{`Տվյալ դեպքում ավելի հարմար է օգտվել ${result?.vehicale.brand} տեսակի ${result?.value} տոննա ծանրաբեռնվածությամբ մեքեայից ${result?.type} երթուղով`}</p> : null
        }
        {
            result?.value?.length === 2 ? <p>{`Տվյալ դեպքում տարբերություն չկա թե որ մարշրուտը կընտնրենք`}</p> : null
        }
    </div>
}