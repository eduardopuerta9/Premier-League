import { Link } from "react-router-dom"
const Brighton = (props) => {

  return (

    
    <div className="card" onClick={()=> props.onClick}>
      
        
      <div className="img-wrapper">
        <Link to={`/brighton`}>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/640px-Brighton_%26_Hove_Albion_logo.svg.png"></img>
        </Link>
      <div className="info-wrapper flex-col">
       Brighton
      </div>
      </div>
    </div>
  )
}
    
    export default Brighton