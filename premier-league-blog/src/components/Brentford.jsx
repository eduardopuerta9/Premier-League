import { Link } from "react-router-dom"
const Brentford = (props) => {

  return (

    
    <div className="card" onClick={()=> props.onClick}>
      
        
      <div className="img-wrapper">
        <Link to={`/brentford`}>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Brentford_FC_crest.svg/1200px-Brentford_FC_crest.svg.png"></img>
        </Link>
      <div className="info-wrapper flex-col">
       Brentford
      </div>
      </div>
    </div>
  )
}
    
    export default Brentford