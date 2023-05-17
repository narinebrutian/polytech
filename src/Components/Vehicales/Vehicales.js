import { useState , useEffect} from "react"
import styles from "./styles.module.css"

export const Vehicales = ({setSelectedVehicale1 , setSelectedVehicale2}) => {
  const [vehicales , setVehicales] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:5000/vehicales")
    .then(respone => respone.json())
    .then(data => {
      setVehicales(data)
    })
  } ,[])

  return <div className={styles.container}>
    <div className={styles.wrapper}>
        <div className={styles.vehicale}>
          <div className={styles.vehicale_wrapper}>
            <p><b>Առաջին տրանսպորտային միջոց</b></p>
            <ul className={styles.list}>
              <form>
                {
                  vehicales.map((value) => {
                    return <li className={styles.list_item}>
                      <input id={value.id} type="radio" name="brand" onChange={(e) => setSelectedVehicale1(e.target.id)}/>
                      <label for={value.id}>{value.brand} / {value.phi}</label>
                      </li>
                  })
                }
              </form>
            </ul>
          </div>
        </div>
          <div className={styles.vehicale}>
            <div className={styles.vehicale_wrapper}>
            <p><b>Երկրորդ տրանսպորտային միջոց</b></p>
              <ul className={styles.list}>
                <form>
                  {
                    vehicales.map((value) => {
                      return <li className={styles.list_item}>
                        <input id={value.id} type="radio" name="brand" onChange={(e) => setSelectedVehicale2(e.target.id)}/>
                        <label for={value.id}>{value.brand} / {value.phi}</label>
                        </li>
                    })
                  }
                </form>
              </ul>
          </div>
        </div>
    </div>
  </div>
}