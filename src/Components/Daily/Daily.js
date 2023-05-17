import { useRef, useState } from "react"
import { Vehicale } from "../Vehicale/Vehicale"

export const Daily = () => {
    const [selectedVehicale , setSelectedVehicale] = useState(0)
    const [result , setResult] = useState({})

    const ref = useRef()

    console.log(result)

    return <div>
        <Vehicale setSelectedVehicale={setSelectedVehicale}/>
        <input type="number" className="coif" ref={ref}/>
        <button className="daily_submit btn btn-success" onClick={() => {
            const body = {
                vehicaleId: selectedVehicale,
                count: ref.current.value
            }

            fetch("http://localhost:5000/daily", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
            .then(response => response.json())
            .then(data => setResult(data))
        }}>Հաստատել</button>
        {
            result?.value?.length === 1 ? <p>{`Տվյալ դեպքում ավելի հարմար է օգտվել${result?.vehicale.brand} տեսակի ${result?.value} տոննա ծանրաբեռնվածությամբ մեքեայի ${result?.type}`}</p> : null
        }
        {
            result?.value?.length === 2 ? <p>{`Տվյալ դեպքում տարբերություն չկա թե որ մարշրուտը կընտնրենք`}</p> : null
        }
    </div>
}