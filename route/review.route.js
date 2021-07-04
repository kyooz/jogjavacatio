module.exports=(app)=>{
    const reviews = require('../controller/review.controller')

    //retrieve data reviews
    app.get('/reviews', reviews.findAll)
    //create reviews
    app.post('/reviews', reviews.create)
}