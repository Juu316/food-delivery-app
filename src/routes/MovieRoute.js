import express from "express";
import axios from "axios";
import fs from "fs";

const router = express.Router();

const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWFiYzllYjNmZTQxNzI1NDViZDc0MzI2ZmQwMDJmOCIsIm5iZiI6MTczODAzNzc1NC42MzY5OTk4LCJzdWIiOiI2Nzk4NTlmYTM3MmNiMjBjZjgyMzg0NGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WBQLl0E0QJ4_D0cK0QpkcTuzIiyGY7jX3c7QUPBpU-s";

// const options = {
//     method: 'GET',
//     url: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWFiYzllYjNmZTQxNzI1NDViZDc0MzI2ZmQwMDJmOCIsIm5iZiI6MTczODAzNzc1NC42MzY5OTk4LCJzdWIiOiI2Nzk4NTlmYTM3MmNiMjBjZjgyMzg0NGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WBQLl0E0QJ4_D0cK0QpkcTuzIiyGY7jX3c7QUPBpU-s'
//     }
//   };


//   router.get('/movies', async (req, res) => {
//     try {
//         axios
//   .request(options)
//   .then(res => console.log(res.data))
//   .catch(err => console.error(err));
//     } catch (error) {
//       res.status(500).json({ message: "Error fetching movie data", error: error.message });
//     }
//   });




router.get('/movies', async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,{ headers: 
        {Authorization: `Bearer ${apiKey}`}
    });
    const movies = response.data;
    fs.writeFileSync("../db/movies.json", JSON.stringify(movies, null, 2));
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: "Error fetching movie data", error: error.message });
  }
});

export default router;