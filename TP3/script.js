var longueur = function (mot) {
  return mot.length;
};

var effacer = function (lettre,mot) {
  var res = "";
  for(var i=0; i<mot.length;i++) {
    if(mot.charAt(i) != lettre) {
      res += mot.charAt(i);
    }
  }
  return res;
};

var second = function (tab) {
  console.log("Tableau initial : "+tab);
  var min = Math.min.apply(null,tab);
  var tmp = [];
  for(var i=0; i < tab.length; i++) {
    if (tab[i] > min) {
      tmp.push(tab[i]);
    }
  }
  var min2 = Math.min.apply(null,tmp);
  return min2;
};

var compose = function (f,g) {
  return function() {
    return f(g.apply(null,arguments));
  }
};

var map = function (func, tableau) {
  var res = [];
  for(var i=0; i < tableau.length; i++) {
    res.push(func(tableau[i]));
  }
  return res;
};

var fmap = function (tab, x) {
  var res = [];
  for(var i=0; i < tab.length; i++) {
    res.push(tab[i](x));
  }
  return res;
};

//Correction du prof
var composition = function(f,g) {
  return function(x) {
    return f(g(x));
  }
};
//Nouvelle notation javascript
var c = (f,g) => ((x) => f(g(x)));

//Fonction identité
var identite = function(x) {
  return x;
};

/*Fonction composition qui prend un tableau de Fonction et qui les compose
comp([]) = identite : Quand t.length = 0
comp([f]) = f
comp([f,g,h]) == h°g°f
*/
var comp = function(t) {
  if (t.length == 0) {
    return identite; //On retourne identite si tableau est vide
  }
  var t0 = t.shift();
  return composition(comp(t),t0);
};

//var v = "Bonjour";
//console.log("Longueur du mot "+v+" : "+longueur(v));
//console.log("Mot "+v+" sans le o : "+effacer("o",v))
//console.log("Le second plus petit chiffre est : "+second([110, 100, 30, 1 , 70]));
//console.log("Resultat composition Math.sqrt Math.sqrt de 16 : "+(compose(Math.sqrt,Math.sqrt))(16));
//console.log("Fonction qui associe a x -> x+1 : "+ map( function(x){ return x + 1; }, [1,2,3,4,5,6] ));
//fmap( [Math.sqrt,  function(x){ return x + 1; }], 4 );

//Correction avec le prof appel des fonctions
console.log("Appel des fonctions de la correction faite avec le prof");
console.log("Fonction composition : "+(composition(Math.sqrt,Math.sqrt))(16));
console.log("Fonction composition nouvelle notation js : "+(c(Math.sqrt,Math.sqrt))(16));
console.log("Fonction identite : "+identite(123+4));
console.log("Fonction comp aucune fct en arg: "+comp([])(123+4));
console.log("Fonction comp +sieurs fcts en args : "+comp([Math.sqrt,Math.sqrt])(16));
