// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here
router.get("/movies/create", (req, res, next) => {
    res.render("./movies/new-movie");
  });

  router.post("/movies/create", (req, res, next) => {
    console.log('req body pls', req.body)
    const { name, occupation, catchPhrase } = req.body;

    Celebrity.create({ name, occupation, catchPhrase })
    .then(response => {
        console.log('response create celebrity', response)

        res.redirect("/movies")
    })
    .catch(err => {
        console.log(err)

        res.render("movies/new-movies.hbs");

    }

        )
    res.render("movies/new-movies");
  });

  router.get("/movies/movies", (req, res, next) => {
    Celebrity.find()
    .then((results) => {
      const celebrityResults= {results}
      return celebrityResults
      
    })

    .then(celebResults => {
      res.render("movies/movies", { results: celebResults.results })
    })
    
   
  });



module.exports = router;


