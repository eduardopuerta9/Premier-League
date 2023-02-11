import { Link } from "react-router-dom"
const Wolves = (props) => {

  return (

    
    <div className="card" onClick={()=> props.onClick}>
      
        
      <div className="img-wrapper">
        <Link to={`/wolves`}>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Wolverhampton_Wanderers.svg/1200px-Wolverhampton_Wanderers.svg.png"></img>
        </Link>
      <div className="info-wrapper flex-col">
       Wolves
      </div>
      </div>
    </div>
  )
}
    
    export default Wolves