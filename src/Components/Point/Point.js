import "../../App.css"


export const Point = ({points  , setPoints , text }) => {

  return <div>
    <div >
      <div >
        <p>{text}</p>
        {
          points.map((value) => {
          return value
          })
        }
      </div>
    </div>
  </div>
}