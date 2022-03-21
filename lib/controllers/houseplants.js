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
  
  .get('/genus', (req, res) => {
    res.send('<p>genus: (plural: genera) A group of closely related species.</p> <p>Since the first printing of Carl Linnaeus&apos;s Species Plantarum in 1753, plants have been assigned one epithet or names for their species and names for their genus, a grouping of related species. Many of these genera (genuses) are listed in Stear&apos;s Dictionary of Plant Names for Gardeners.*</p> <footer>*From Wikipedia, the free encyclopedia.</footer>');
  })
  
  //GET api/v1/houseplants
  .get('/name/:name', (req, res) => {
    res.send(`A plant with the name ${req.params.name}`);
  })
  
  //GET api/v1/houseplants/:id
  .get('/:id', (req, res) => {
    const foundHousePlant = houseplants.find((houseplant) => houseplant.id === Number(req.params.id)); 
    res.send(foundHousePlant);
  })

  //PATCH (update) api/v1/houseplants/:id
  // id: 1 = pothos id: 2 = monstera
  .patch('/:id', (req, res) => {
    console.log('req.params', req.params);
    const updatedHousePlants = houseplants.map((houseplant) => {
      if (houseplant.id === Number(req.params.id)) {
        const updateHousePlant = { ...houseplant, ...req.body };
        return updateHousePlant;
      } else {
        return houseplant;
      }
    });
    console.log('updatedHousePlants', updatedHousePlants);
    res.send(updatedHousePlants);

  })

  //DELETE api/v1/houseplants/:id
  .delete('/:id', (req, res) => {
    res.send('Houseplant has been deleted. Jk you did NOT delete it. The plant is still there!');
  });
