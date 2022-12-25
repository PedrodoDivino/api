
const express = require('express');
const routes = express.Router();

let db = [
    { '1': { nome: 'cliente 1' }, Idade: '25' },
    { '2': { nome: 'cliente 2' }, Idade: '30' },
    { '3': { nome: 'cliente 3' }, Idade: '35' },
];

routes.get('/', (req, res) => { 
    return res.send(db);
})
routes.post('/add', (req, res) => { 
    const body = req.body;

    if (!body) 
        return res.status(400).end();   

        db.push(body);
        return res.json(body);
    
})

routes.delete('/:id', (req, res) => { 
    const bid = req.params.id;
    let newDb = db.filter(item => {
        if (!item[id]) {
            return item
        }
    });
    db = newDb;
    return res.send(newDb);
})


        module.exports = routes;


