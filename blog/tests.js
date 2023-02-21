const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true});


// BlogPost.create({
// title: 'The Mythbuster Guide to Saving Money on Energy Bills',
// body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energybills. Energy-saving is one of my favourite money topics, because onceyou get past the boring bullet-point lists, a whole new world of thriftynerdery opens up. You know those bullet-point lists. You start spotting them everything at this time of year. They go like this:'
// }, (error, blogpost) =>{
// console.log(error,blogpost)
// });
// //Find a blogpost
// BlogPost.find({
//     title:/The/}, (error, blogpost) =>{
//     console.log(error,blogpost);
// });

// //Updating a blog post
// var id = "63f432d2a2a08fe17fd7d6bb";

// BlogPost.findByIdAndUpdate(id,{
//     title:'Updated title'
// }, (error, blogspot) =>{
//     console.log(error, blogspot);
// });

var id= '63f42dc4acd07d811c3740ae'

//Delete a post
BlogPost.findByIdAndDelete(id, (error,blogspot) =>{
    console.log(error,blogspot);
});
