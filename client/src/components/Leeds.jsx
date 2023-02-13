import { Link } from "react-router-dom"
const Leeds = (props) => {

  return (

    
    <div className="card" onClick={()=> props.onClick}>
      
        
      <div className="img-wrapper">
        <Link to={`/leeds`}>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Leeds_United_F.C._logo.svg/1200px-Leeds_United_F.C._logo.svg.png"></img>
        </Link>
      <div className="info-wrapper flex-col">
       Leeds
      </div>
      </div>
    </div>
  )
}
    
    export default Leeds