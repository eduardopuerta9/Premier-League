import { Link } from "react-router-dom"
const AstonVilla = (props) => {

  return (

    
    <div className="card" onClick={()=> props.onClick}>
      
        
      <div className="img-wrapper">
        <Link to={`/astonvilla`}>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Aston_Villa_FC_crest_%282016%29.svg/1200px-Aston_Villa_FC_crest_%282016%29.svg.png"></img>
        </Link>
      <div className="info-wrapper flex-col">
       Aston Villa
      </div>
      </div>
    </div>
    

  )
}
  
  


export default AstonVilla
