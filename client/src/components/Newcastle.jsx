import { Link } from "react-router-dom"
const Newcastle = (props) => {

  return (

    
    <div className="card" onClick={()=> props.onClick}>
      
        
      <div className="img-wrapper">
        <Link to={`/newcastle`}>
        <img src="https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg"></img>
        </Link>
      <div className="info-wrapper flex-col">
       Newcastle
      </div>
      </div>
    </div>
  )
}
    
    export default Newcastle