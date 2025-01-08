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








































































  app.use((req , res , next)=>{
    res.status(404).send("404 NOT FOUND")
  })

app.listen(3000, () => {
    console.log("Server is running at localhost:3000")
})