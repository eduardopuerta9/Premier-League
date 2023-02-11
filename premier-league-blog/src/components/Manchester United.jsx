import { Link } from "react-router-dom"
const ManchesterUnited = (props) => {

  return (

    
    <div className="card" onClick={()=> props.onClick}>
      
        
      <div className="img-wrapper">
        <Link to={`/manchestercity`}>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png"></img>
        </Link>
      <div className="info-wrapper flex-col">
       Manchester United
      </div>
      </div>
    </div>
  )
}
    
    export default ManchesterUnited