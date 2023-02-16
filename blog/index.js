const express = require('express');
const path = require('path');
const app = new express();

// EJS Template engine
const ejs = require('ejs');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.listen(4000, ()=>{
    console.log('App listening on port 4000')
})

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'views/index.html'))
})

app.get('/contact', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'views/contact.html'))
})
app.get('/about', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'views/about.html'))
})

app.get('/post', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'views/post.html'))
})