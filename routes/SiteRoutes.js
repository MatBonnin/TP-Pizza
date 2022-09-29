

// création du routeur Express pour ce module
const { Router } = require('express');
const express = require('express');
const routeur = express.Router();

const Controle = require('../controllers/SiteController');
routeur.get('/',Controle.home);

 

module.exports = routeur;