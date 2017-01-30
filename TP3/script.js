function longueur(mot) {
  return mot.length;
}

function effacer (lettre,mot) {
  var res = "";
  for(var i=0; i<mot.length;i++) {
    if(mot.charAt(i) != lettre) {
      res += mot.charAt(i);
    }
  }
  return res;
}

function second (tab) {
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
}

function compose (f,g) {
  return function() {
    return f(g.apply(null,arguments));
  }
}

function map (func, tableau) {
  var res = [];
  for(var i=0; i < tableau.length; i++) {
    res.push(func(tableau[i]));
  }
  return res;
}

function fmap (tab, x) {
  var res = [];
  for(var i=0; i < tab.length; i++) {
    res.push(tab[i](x));
  }
  return res;
}

var v = "Bonjour";
console.log("Longueur du mot "+v+" : "+longueur(v));
console.log("Mot "+v+" sans le o : "+effacer("o",v))

console.log("Le second plus petit chiffre est : "+second([110, 100, 30, 1 , 70]));
console.log("Resultat composition Math.sqrt Math.sqrt de 16 : "+(compose(Math.sqrt,Math.sqrt))(16));
console.log("Fonction qui associe a x -> x+1 : "+ map( function(x){ return x + 1; }, [1,2,3,4,5,6] ));
//fmap( [Math.sqrt,  function(x){ return x + 1; }], 4 );
