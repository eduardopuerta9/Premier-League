import { Link } from "react-router-dom"
const Tottenham = (props) => {

  return (

    
    <div className="card" onClick={()=> props.onClick}>
      
        
      <div className="img-wrapper">
        <Link to={`/tottenham`}>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/1200px-Tottenham_Hotspur.svg.png"></img>
        </Link>
      <div className="info-wrapper flex-col">
       Tottenham
      </div>
      </div>
    </div>
  )
}
    
    export default Tottenham