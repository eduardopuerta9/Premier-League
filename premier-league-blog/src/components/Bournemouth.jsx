import { Link } from "react-router-dom"
const Bournemouth = (props) => {

  return (

    
    <div className="card" onClick={()=> props.onClick}>
      
        
      <div className="img-wrapper">
        <Link to={`/bournemouth`}>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/AFC_Bournemouth_%282013%29.svg/1200px-AFC_Bournemouth_%282013%29.svg.png"></img>
        </Link>
      <div className="info-wrapper flex-col">
       Bournemouth
      </div>
      </div>
    </div>
  )
}
    
    export default Bournemouth