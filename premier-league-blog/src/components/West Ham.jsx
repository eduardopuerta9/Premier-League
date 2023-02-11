import { Link } from "react-router-dom"
const WestHam = (props) => {

  return (

    
    <div className="card" onClick={()=> props.onClick}>
      
        
      <div className="img-wrapper">
        <Link to={`/westham`}>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/West_Ham_United_FC_logo.svg/1200px-West_Ham_United_FC_logo.svg.png"></img>
        </Link>
      <div className="info-wrapper flex-col">
       West Ham
      </div>
      </div>
    </div>
  )
}
    
    export default WestHam