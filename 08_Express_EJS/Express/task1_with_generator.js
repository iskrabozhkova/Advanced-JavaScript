const express = require('express');
const app = express();
app.use(express.json());

const PORT = 8080;
const events = {};
let id = 0;

function* gen(){
    let index = 0;
    while(true){
        yield index++;
    }
}

const idGen = gen();

app.post('/events', (req,res) => {
    const data = req.body;
    const {name, capacity} = data;
    if(!name || name === ''){
        return res.status(400).send("Empty name");
    }
    if(!capacity || capacity <= 0){
        return res.status(400).send("Capacity must be positive");
    }
    const id = idGen.next().value;
    events[id] = {...data};
    res.json({id, ...data}) 
})

app.get('/events/:id', (req, res) => {
    const {id} = req.params;
    res.json(events[id]);
})

const bookSpot = {}
app.post('/events/:id/book-spot', (req,res) => {
    const data = req.body;
    const {id} = req.params;

    try{
        if(!events[id]){
            throw new Error("Not valid id");
        }
        if(bookSpot[id] && events[id].capacity <= bookSpot[id].length){
            throw new Error("Not enough places");
        }
    }catch(e){
       return res.status(400).send(e.message);
    }
   
    bookSpot[id] = bookSpot[id] ? [...bookSpot[id], {...data}] : [{...data}];
    res.json({freeSpaces: events[id].capacity - bookSpot[id].length});
})

app.listen(PORT, () => {
    console.log('Server is listening');
})