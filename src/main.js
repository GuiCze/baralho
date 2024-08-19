const express = require("express");
const baralho = require("./controllers/baralho.js");
const app = express();
const port = 3000;

app.use(express.json()); 

  
app.get("/naipe", (req, res) => {
    res.json(baralho.index());
})

app.post("/naipe", (req, res) => {
    const code = baralho.store(req.body)
    res.status(code).json(); 
})


app.listen(port, () => {
    console.log(`ta ligado ${port}`);
});