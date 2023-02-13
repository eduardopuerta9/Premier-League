import { Link } from "react-router-dom"
const Leicester = (props) => {

  return (

    
    <div className="card" onClick={()=> props.onClick}>
      
        
      <div className="img-wrapper">
        <Link to={`/leicester`}>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Leicester_City_crest.svg/1200px-Leicester_City_crest.svg.png"></img>
        </Link>
      <div className="info-wrapper flex-col">
       Leicester
      </div>
      </div>
    </div>
  )
}
    
    export default Leicester