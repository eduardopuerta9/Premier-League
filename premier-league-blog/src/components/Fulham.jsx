import { Link } from "react-router-dom"
const Fulham = (props) => {

  return (

    
    <div className="card" onClick={()=> props.onClick}>
      
        
      <div className="img-wrapper">
        <Link to={`/fulham`}>
        <img src="https://upload.wikimedia.org/wikipedia/en/e/eb/Fulham_FC_%28shield%29.svg"></img>
        </Link>
      <div className="info-wrapper flex-col">
       Fulham
      </div>
      </div>
    </div>
  )
}
    
    export default Fulham