//----------------------------------------------------app.js
 var express = require('express');
 var app = express();

 app.set('views', './views');//  répertoire avec fichiers .jade
 app.set('view engine', 'jade');        //  on utilise jade pour 'render'

 var oui = 0, non = 0;

 app.get('/', function(req,res){
     res.render("acceuil.jade");     //  utilisez 'acceuil.jade' pour
 });                                 //  pour générer HTML

 app.get('/oui', function(req,res){
     oui++;
     res.render("resultats.jade",  // utilisez 'resultats.jade' pour générer HTML
    {oui:oui, non:non});            // avec paramètre, e.g., {oui:2, non:11}
 });

 app.get('/non', function(req,res){
     non++;
     res.render("resultats.jade",        // la même chose ...
         {oui:oui, non:non});
 });

 app.get('/*', function(req,res){
     res.redirect("/");
 });

 app.listen(3000);
 console.log("Le serveur de vote: <http://localhost:3000>");
 //----------------------------------------------------------------*/end
