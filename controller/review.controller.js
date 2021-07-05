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

exports.update=(req,res)=>{
    Review.findByIdAndUpdate(req.params.reviewId,{
        nama:req.body.nama,
        email:req.body.email,
        review:req.body.review
    },{new:true})
    .then(review=>{
        res.send(review)
    })
    .catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(400).send({
                message:"review not found "+req.params.reviewId
            })
        }
        return res.status(500).send({
            message:"error update review with review id "+req.params.reviewId
        })
    })
}

exports.delete=(req,res)=>{
    Review.findByIdAndRemove(req.params.reviewId)
    .then(review=>{
        res.send({message:"Review deleted successfully"})
    })
    .catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(400).send({
                message:"review not found "+req.params.reviewId
            })
        }
        return res.status(500).send({
            message:"error delete review with review id "+req.params.reviewId
        })
    })
}