import { Link } from "react-router-dom"
const Chelsea = (props) => {

  return (

    
    <div className="card" onClick={()=> props.onClick}>
      
        
      <div className="img-wrapper">
        <Link to={`/chelsea`}>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png"></img>
        </Link>
      <div className="info-wrapper flex-col">
       Chelsea
      </div>
      </div>
    </div>
  )
}
    
    export default Chelsea