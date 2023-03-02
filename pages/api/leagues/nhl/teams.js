import axios from "axios";

export default async (req, res) => {

  const response = await axios.get(`https://v1.hockey.api-sports.io/teams?league=57&season=2022`, { 
      headers: {
          "x-rapidapi-host": "v1.hockey.api-sports.io",
          "x-rapidapi-key" : process.env.SPORTS_TOKEN,
      }
  });

  let teams = []
    
  for ( const team of response.data.response) {
    teams.push({
        id: team.id,
        name: team.name,
        logo: team.logo
    })
  }   
  res.status(200).json(teams)
}