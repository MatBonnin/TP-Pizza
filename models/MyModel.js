const res = require('express/lib/response');
const Logger = require('nodemon/lib/utils/log');
var db = require('../bddCon');


const getIngrédients = () =>{
    return new Promise((resolve,reject)=>{
    db.query("SELECT * FROM ingrédients", (err, resultat) => {
        resolve((resultat))
    })
})

}

const like = (id) =>{
    db.query("UPDATE ingrédients SET likes = likes+1 WHERE id = ?",[id])
   
}

const supprimer =(id)=>{
    db.query("DELETE FROM ingrédients WHERE id = ?",[id])
}

const ajoutIngredient=(nom,prix,stock)=>{
    console.log(nom,prix,stock)
    db.query("INSERT INTO ingrédients(nom,prix,unité) VALUES (?,?,?)",[nom,prix,stock])
}

const getIngredient=(id)=>{
    return new Promise((resolve,reject)=>{
    db.query("SELECT * FROM ingrédients WHERE id = ?",[id], function(error, results, fields){
         resolve(results)
        })
    })
}

const modifierIngredient=(id,nom,prix,stock,likes)=>{
    console.log(nom)
    db.query("UPDATE ingrédients SET nom = ? , prix = ? , unité = ? , likes = ? WHERE id = ?",[nom,prix,stock,likes,id])
}



module.exports={
   getIngrédients
   ,like,
   supprimer,
   ajoutIngredient,
   getIngredient,
   modifierIngredient
}
 


