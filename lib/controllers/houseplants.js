const { Router } = require('express');

// houseplants hardcoded for example

const houseplants = [
  { id: 1, name: 'pothos', genus: 'Araceae' },
  { id: 2, name: 'monstera', genus: 'Araceae' },
];
 
module.exports = Router()
  .post('/', (req, res) => {
    console.log('req-body=', req.body);
    const newPlant = { ...req.body };
    houseplants.push(newPlant);

    res.send('Successfully created a new plant!');
    res.send(newPlant);
  })
  
  //GET api/v1/houseplants
  .get('/', (req, res) => {
    res.send(houseplants);
  })

//GET api/v1/houseplants
  .get('/:id', (req, res) => {
    const foundPlant = houseplants.find((houseplant) => houseplant.id === Number(req.params.id)); 
    res.send(foundPlant);
  });
