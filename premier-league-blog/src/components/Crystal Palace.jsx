import { Link } from "react-router-dom"
const CrystalPalace = (props) => {

  return (

    
    <div className="card" onClick={()=> props.onClick}>
      
        
      <div className="img-wrapper">
        <Link to={`/crystalpalace`}>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Crystal_Palace_FC_logo_%282022%29.svg/1200px-Crystal_Palace_FC_logo_%282022%29.svg.png"></img>
        </Link>
      <div className="info-wrapper flex-col">
       Crystal Palace
      </div>
      </div>
    </div>
  )
}
    
    export default CrystalPalace