const express = require('express');
const path = require('path');
const app = new express();
// EJS Template engine
const ejs = require('ejs');
const BlogPost= require('./models/BlogPost.js')

const MongoClient= require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017/mydb';
const client = new MongoClient(uri, {useNewUrlParser: true});

client.connect()
    .then(()=>{
        console.log('Connected to MongoDB');
    })
    .catch((err)=>{
        console.log(err);
    });

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:
true});

const db = client.db('mydb');
const collection = db.collection('users');


app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json());


app.listen(4000, ()=>{
    console.log('App listening on port 4000')
})

app.get('/', (req,res)=>{
    res.render('index');
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

