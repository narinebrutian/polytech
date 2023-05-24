import "../../App.css"

export const Point = ({points , text}) => {
  console.log(text)
  return <div className="points">
        {
          text && <p>{text}</p>
        }
        {
          points.map((value) => {
            return value
          })
        }
    </div>
}