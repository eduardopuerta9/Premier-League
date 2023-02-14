import axios from 'axios'

const About = () => {
  var axios = require('axios')

  var config = {
    method: 'get',
    url: 'https://soccer.sportmonks.com/api/v2.0/standings/season/live/19734',
    headers: {}
  }

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data))
    })
    .catch(function (error) {})

  return (
    <div>
      <h1>
        <center>Standings</center>
      </h1>
      <h3>
        <center>have to put standings here</center>
      </h3>
    </div>
  )
}

export default About
