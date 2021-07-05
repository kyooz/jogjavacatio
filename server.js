const express = require('express');
const mongoose = require('mongoose');
const { body, validationResult, check } = require('express-validator');

const dbConfig = require('./utils/db');
const Review = require('./model/review')


const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,

}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});



app.get('/', (req, res) => {
    res.render('index.html')
})

//testimoni page
app.get('/testimoni', async (req, res) => {
    const reviews = await Review.find()

    res.render('testimoni', {
    reviews
    })
})

//tulis review
app.get('/tulis', (req, res) => {
    res.render('tulis');
})

// proses tulis
app.post('/testimoni', check('email', 'Email tidak valid!').isEmail(), 
    (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.render('tulis', {
            errors: errors.array(),
        })
    } else {
        Review.insertMany(req.body, (error,result) => {
            res.redirect('/testimoni');
        })
        
    }
    
})

// app.get('/reviews', reviews.findAll())


require('./route/review.route')(app)
app.listen(port, () => console.log(`Example app listening on port port!`))


