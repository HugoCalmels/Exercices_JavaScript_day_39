// 2.2. Opérations & boucles //  
// 2.2.1 Calculs rapides //

let nbr = "";
nbr = prompt("De quel nombre veux-tu calculer la factorielle ?");
function fact(nbr){
  var i, nbr, f = 1;
  for(i = 1; i <= nbr; i++)  
  {
    f = f * i;   // ou f *= i;
  }  
  return f;
}
console.log(fact(nbr));

// 2.2.2 Pyramide de Mario //
let str = '';
nbr2 = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

for(i = 0; i <= nbr2 ; i++) {
    for(j = 1; j <= i; j++) {
       str += '*';
    }
    str += '\n';
}
console.log(str);


