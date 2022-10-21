

// création du routeur Express pour ce module
const { Router } = require('express');
const express = require('express');
const routeur = express.Router();

const Controle = require('../controllers/SiteController');
routeur.get('/',Controle.home);
routeur.get('/ingredients',Controle.ingredients);
routeur.get('/like/:id',Controle.like);
routeur.get('/ingredients/supprimer/:id',Controle.supprimer)
routeur.get('/modifierIngredient/:id',Controle.afficherModifierIngredient)


routeur.post('/ajoutIngredient',Controle.ajoutIngredient)
routeur.post('/modifierIngredient',Controle.modfierIngredient)
 

module.exports = routeur;