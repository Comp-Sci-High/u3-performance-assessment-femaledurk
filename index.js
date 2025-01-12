// Good luck!

const express = require('express');
const app = express()



app.use((req , res , next)=>{
    console.log (req.method, req.url)
    next()
  })
  
  app.get("/", (req, res) => {
    res.status(200).send(`<h1>Welcome to my Cheer API</h1>`);
  });


const cheerMoves = [
  {
    name: "toe touch",
    difficulty: "beginner",
    people: 1
  },
  {
    name: "high v",
    difficulty: "beginner",
    people: 1
  },
  {
    name: "pyramid",
    difficulty: "intermediate",
    people: 3
  },
  {
    name: "liberty",
    difficulty: "intermediate",
    people: 3
  },
  {
    name: "full twist",
    difficulty: "advanced",
    people: 1
  },
  {
    name: "double basket toss",
    difficulty: "advanced",
    people: 8
  },
  {
    name: "full up",
    difficulty: "elite",
    people: 5
  },
  {
    name: "toe touch back handspring",
    difficulty: "elite",
    people: 1
  }
];


app.get("/moves", (req, res) => {
  res.json(`<h1>Cheer Moves</h1>`);
  res.status(200).send(`Here are all the cheer moves avaliable when you go to /moves`);
});


app.get("/difficulty", (req, res)=>{
res.status(200).send(`Here are all the cheer moves difficulties avaliable when you go to /difficulty`);
})



app.get("/api/moves", (req, res) => {
  res.status(200).json(cheerMoves.name);
});


app.get("/api/difficulty", (req, res) => {
  res.status(200).json(cheerMoves.difficulty);
});

app.get("/api/people", (req, res) => {
  res.status(200).json(cheerMoves.people);
});


























































  app.use((req , res , next)=>{
    res.status(404).send("404 NOT FOUND")
  })

app.listen(3000, () => {
    console.log("Server is running at localhost:3000")
})