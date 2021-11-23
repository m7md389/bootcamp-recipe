const express = require('express')
const urllib = require("urllib")
const router = express.Router()





router.get('/sanity', function(req, res) {
    res.send("ok")
})

router.get('/recipes/:ingredient', async function(req, res) {
    const ingredient = req.params.ingredient
    let results
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function(err, data, ress) {
        if (err)
            throw err
        results = JSON.parse(data.toString()).results.map(recipe => {
            return {
                ingredients: recipe.ingredients,
                title: recipe.title,
                thumbnail: recipe.thumbnail,
                href: recipe.href
            }
        })

        res.send(results)
    })
})



module.exports = router