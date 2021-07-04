const Review = require('../model/review')

exports.findAll=(req,res)=>{
    Review.find()
    .then(review=>{
        res.send(review)
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "some error occured while retrieving review data"
        })
    })

}

exports.create=(req,res)=>{
    //create review
    const review = new Review ({
        nama:req.body.nama,
        email:req.body.email,
        review:req.body.review
    })
    // review1.save().then((review)
    review.save()
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || "error create review"
        })
    })
}