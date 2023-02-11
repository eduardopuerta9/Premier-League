import { Link } from "react-router-dom"
const AstonVilla = (props) => {

  return (

    
    <div className="card" onClick={()=> props.onClick}>
      
        
      <div className="img-wrapper">
        <Link to={`/astonvilla`}>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/640px-Arsenal_FC.svg.png"></img>
        </Link>
      <div className="info-wrapper flex-col">
       Aston Villa
      </div>
      </div>
    </div>
    

  )
}
  
  


export default AstonVilla
