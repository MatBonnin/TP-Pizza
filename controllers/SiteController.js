var myModel=require('../models/MyModel');

var db = require('../bddCon');
const { text } = require('express');
const res = require('express/lib/response');


const home = async(req,res)=>{

    myModel.getIngrédients()
    res.render('index')
}

const ingredients = async(req,res)=>{
    let Ingrédients = await myModel.getIngrédients()
    console.log("Ingredients",Ingrédients[1]);
    res.render('ingredients',{ingredients : Ingrédients})
}

const like = async(req,res)=>{
    let id = req.params.id;
    myModel.like(id);
    res.redirect('/ingredients');
}

const supprimer = (req,res)=>{
    myModel.supprimer(req.params.id);
    res.redirect('/ingredients');

}

const ajoutIngredient = (req,res)=>{
    let nom = req.body.nom
    let prix = req.body.prix
    let stock = req.body.stock
    myModel.ajoutIngredient(nom,prix,stock)
    res.redirect('/ingredients');
}


const afficherModifierIngredient = async(req,res)=>{
    let id = req.params.id
    let ingredient = await myModel.getIngredient(id);
    console.log(ingredient[0].id)
    res.render('modifierIngredient',{ingredient:ingredient})
}

const modfierIngredient = (req,res)=>{
    let id = req.body.id
    let nom = req.body.nom
    let prix = req.body.prix
    let stock = req.body.stock
    let likes = req.body.likes
    console.log(id,nom,prix,stock,likes)
    myModel.modifierIngredient(id,nom,prix,stock,likes)
    res.redirect('/ingredients')
}


module.exports = {
   home,
   ingredients,
   like,
   supprimer,
   ajoutIngredient,
   afficherModifierIngredient,
   modfierIngredient
}