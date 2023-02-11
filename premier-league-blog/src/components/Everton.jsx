import { Link } from "react-router-dom"
const Everton = (props) => {

  return (

    
    <div className="card" onClick={()=> props.onClick}>
      
        
      <div className="img-wrapper">
        <Link to={`/everton`}>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Everton_FC_logo.svg/1200px-Everton_FC_logo.svg.png"></img>
        </Link>
      <div className="info-wrapper flex-col">
       Everton
      </div>
      </div>
    </div>
  )
}
    
    export default Everton