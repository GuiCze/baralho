const express = require("express");
const naipe = require("./controllers/naipe.js");
const cartas = require("./controllers/carta.js");
const app = express();
const port = 3000;

app.use(express.json()); 

  
app.get("/naipe", (req, res) => {
    res.json(naipe.index());
})

app.get("/naipe/:id", (req, res) => {
    const content = naipe.show(req.params.id)
    res.json(content)
})

app.post("/naipe", (req, res) => {
    const code = naipe.store(req.body)
    res.status(code).json(); 
})

app.put("/naipe", (req, res) => {
    const code = naipe.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/naipe", (req, res) => {
    const code = naipe.destroy(req.params.id)
    res.status(code).json();
})

app.get("/carta", (req, res) => {
    res.json(cartas.index());
})

app.get("/carta/:id", (req, res) => {
    const content = carta.show(req.params.id)
    res.json(content)
})

app.post("/carta", (req, res) => {
    const carta = req.body
    const code = cartas.store(carta)
    res.status(code).json(); 
})

app.put("/carta", (req, res) => {
    const code = carta.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/carta", (req, res) => {
    const code = carta.destroy(req.params.id)
    res.status(code).json();
})



app.listen(port, () => {
    console.log(`ta ligado ${port}`);
});