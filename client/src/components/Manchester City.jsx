import { Link } from "react-router-dom"
const ManchesterCity = (props) => {

  return (

    
    <div className="card" onClick={()=> props.onClick}>
      
        
      <div className="img-wrapper">
        <Link to={`/manchestercity`}>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png"></img>
        </Link>
      <div className="info-wrapper flex-col">
       Manchester City
      </div>
      </div>
    </div>
  )
}
    
    export default ManchesterCity