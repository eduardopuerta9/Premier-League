import { Link } from "react-router-dom"
const Southhampton = (props) => {

  return (

    
    <div className="card" onClick={()=> props.onClick}>
      
        
      <div className="img-wrapper">
        <Link to={`/southhampton`}>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/FC_Southampton.svg/1200px-FC_Southampton.svg.png"></img>
        </Link>
      <div className="info-wrapper flex-col">
       Southhampton
      </div>
      </div>
    </div>
  )
}
    
    export default Southhampton