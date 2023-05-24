import { useEffect, useState } from "react"

export const Vehicale = ({setSelectedVehicale , text , name}) => {
    const [vehicales , setVehicales] = useState([])

    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_BASE_URL}/vehicales`)
      .then(respone => respone.json())
      .then(data => {
        setVehicales(data)
      })
      .catch((e) => {
        setVehicales([])
      })
    } ,[])

    return <div  className="daily_select_div">
        <form>
          {text && <p>{text}</p>}
              {
                vehicales.length > 0 ?vehicales?.map((value) => {
                  return <li className="car_list">
                    <input className="input_list" id={`${name}${value.id}`} type="radio" name="vehicale" onChange={(e) => setSelectedVehicale(value.id)}/>
                  
                    <label for={`${name}${value.id}`}>{value.brand}/{value.phi}</label>
                    </li>
                }) : <p>Տրանսպորտային միջոցները չեն ներբեռնվել</p>
              }
        </form>
    </div>
}