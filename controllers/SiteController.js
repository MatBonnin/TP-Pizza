var myModel=require('../models/MyModel');

var db = require('../bddCon');
const { text } = require('express');
const res = require('express/lib/response');


const home =(req,res)=>{
    res.render('index')
}


module.exports = {
   home
}