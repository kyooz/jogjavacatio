module.exports=(app)=>{
    const reviews = require('../controller/review.controller')

    //retrieve data reviews
    app.get('/reviews', reviews.findAll)
    //create reviews
    app.post('/reviews', reviews.create)
    //update
    app.put('/reviews/:reviewId', reviews.update)
    //delete
    app.delete('/reviews/:reviewId', reviews.delete)
}