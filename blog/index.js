const express = require('express');
const path = require('path');
const app = new express();
// EJS Template engine
const ejs = require('ejs');
const BlogPost= require('./models/BlogPost.js')



const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:
true});



app.set('view engine', 'ejs');

//Middleware
app.use(express.static('public'));
//Body Parsing middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.listen(4000, ()=>{
    console.log('App listening on port 4000')
})

app.get('/',async (req,res)=>{
    const blogposts = await BlogPost.find({})
    res.render('index',{
        blogposts
    });
    console.log(blogposts)
})

app.get('/contact', (req,res)=>{
    res.render('contact');
})
app.get('/about', (req,res)=>{
    res.render('about');
})

app.get('/post', (req,res)=>{
    res.render('post');
})

app.get('/posts/new',(req,res)=>{
    res.render('create')
});

app.post('/posts/store',async (req,res)=>{
    console.log(req.body);
    
    await BlogPost.create(req.body);
    console.log(BlogPost)
    res.redirect('/');
});
