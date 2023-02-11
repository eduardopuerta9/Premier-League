import { Link } from "react-router-dom"
const Nottingham = (props) => {

  return (

    
    <div className="card" onClick={()=> props.onClick}>
      
        
      <div className="img-wrapper">
        <Link to={`/nottinghamforest`}>
        <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/393.png"></img>
        </Link>
      <div className="info-wrapper flex-col">
       Nottingham Forest
      </div>
      </div>
    </div>
  )
}
    
    export default Nottingham