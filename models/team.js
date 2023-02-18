const { Schema } = require('mongoose')

const teamSchema = new Schema(
  {
    team: { type: String, required: true },
    badge_image: { type: String, required: true },
    founded: { type: String, required: true },
    team_image: { type: String, required: true },
    stadium: { type: String, required: true },
    location: { type: String, required: true },
    capacity: { type: String, required: true },
    stadium_image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = teamSchema
