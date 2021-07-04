const mongoose = require('mongoose');
const Review = mongoose.model('Review', {
    nama: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    review: {
        type: String,
    },
});

// const review1 = new Review({
//     nama: "Saya2",
//     email: "Saya2@gmail.com",
//     review: "Mantab!!!"
// })

// review1.save().then((review) => console.log(review));


module.exports = Review;