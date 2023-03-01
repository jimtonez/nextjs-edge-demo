import axios from "axios";

export default async (req, res) => {
const response = await axios.get(`https://v3.football.api-sports.io/leagues?id=39`, { 
    headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key" : process.env.SPORTS_TOKEN,
    }
});
  res.status(200).json({ data: response.data })
}