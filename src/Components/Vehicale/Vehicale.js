import { useEffect, useState } from "react"

export const Vehicale = ({setSelectedVehicale}) => {
    const [vehicales , setVehicales] = useState()

    useEffect(() => {
        fetch("http://localhost:5000/vehicales")
        .then(respone => respone.json())
        .then(data => {
          setVehicales(data)
        })
      } ,[])

    return <div  className="daily_select_div">
        <form>
              {
                vehicales?.map((value) => {
                  return <li className="car_list">
                    <input className="input_list" id={value.id} type="radio" name="brand" onChange={(e) => setSelectedVehicale(e.target.id)}/>
                  
                    <label for={value.id}>{value.brand}/{value.phi}</label>
                    </li>
                })
              }
        </form>
    </div>
}