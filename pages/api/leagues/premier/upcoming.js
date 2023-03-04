import axios from "axios";
import { events } from '@/constants/premier'

export default async (req, res) => {

  // const response = await axios.get(`https://v3.football.api-sports.io/fixtures?league=39&season=2022&status=NS&from=2023-03-01&to=2023-03-07`, { 
  //     headers: {
  //         "x-rapidapi-host": "v3.football.api-sports.io",
  //         "x-rapidapi-key" : process.env.SPORTS_TOKEN,
  //     }
  // });

  let upcomingMatches = []
  
  for ( const match of events) {
    upcomingMatches.push({
        id: match.fixture.id,
        teams: match.teams,
        round: match.league.round
    })
  }   
  res.status(200).json(upcomingMatches)
}