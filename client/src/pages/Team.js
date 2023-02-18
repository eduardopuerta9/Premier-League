const Team = ({ team }) => {
  return (
    <div className="arsenal">
      <h1>
        <center>{team.team}</center>
        <center>
          <img src={team.badge_image} height={120}></img>
          <br></br>
          <h3> Founded: {team.founded} </h3>
          <h3>Current Squad:</h3>
          <img src={team.team_image} height={200} width={300}></img>
          <h3>Stadium: {team.stadium}</h3>
          <h4>Located: {team.location}</h4>
          <h4>Capacity: {team.capacity}</h4>
          <img src={team.stadium_image} height={300} width={300}></img>
        </center>
      </h1>
      <h3>
        <center></center>
      </h3>
    </div>
  )
}

export default Team
