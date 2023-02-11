import { Link } from "react-router-dom"
const Liverpool = (props) => {

  return (

    
    <div className="card" onClick={()=> props.onClick}>
      
        
      <div className="img-wrapper">
        <Link to={`/liverpool`}>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png"></img>
        </Link>
      <div className="info-wrapper flex-col">
       Liverpool
      </div>
      </div>
    </div>
  )
}
    
    export default Liverpool