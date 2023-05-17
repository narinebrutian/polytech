import { createRef, useRef, useState } from "react"
import "../../App.css"

const CreateRef = () => {
  const ref = useRef()

  return () => ref
}

export const Points = ({points1 , points2 ,setPoints1 , setPoints2 , text1 , text2}) => {

  const addPoint = () => {
    const ref1 = createRef()
    const ref2 = createRef()
    setPoints1([...points1 , <input ref={ref1} type="number" className="input"/>])
    setPoints2([...points2 , <input ref={ref2} type="number" className="input"/>])
  }

  return <div className="points_wrapper">
    <button onClick={() => addPoint()} className="submit addBTN">Ավելացնել կետ</button>
    <div className="inputs">
      <div className="column">
        <p>{text1}</p>
        {
          points1.map((value) => {
          return value
          })
        }
      </div>
      <div className="column">
        <p>{text2}</p>
        {
          points2.map((value) => {
            return value
          })
        }
      </div>
    </div>
  </div>
}

