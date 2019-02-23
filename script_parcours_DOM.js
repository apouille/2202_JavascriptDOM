
//1) Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.

console.log("1) Nombre de tag <p> : ")
console.log(document.getElementsByTagName("p").length);

//2) Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.
console.log("************************")
console.log("2) Le contenu de coucou : ")
console.log(document.getElementById("coucou").innerHTML);

//3) Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.
console.log("************************")
console.log("3) L'URL vers laquelle pointe le 3ème élément :")
console.log(document.getElementsByTagName("a")[2].getAttribute("href"));

//4) Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.
console.log("************************")
console.log("4) Nombre d'éléments portant la classe compte-moi")
console.log(document.getElementsByClassName("compte-moi").length);


//5) Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.
console.log("************************")
console.log("5) Nombre d'éléments <li> portant la classe compte-moi")
console.log(document.querySelectorAll("li.compte-moi").length);

//6) Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.
console.log("************************")
console.log("6) Nombre d'éléments <li> et situés dans une liste ordonnée portant la classe compte-moi")
console.log(document.querySelectorAll("ol li.compte-moi").length);

//7) Jeu de piste
console.log("************************")
console.log("7) Trouvons le noeud caché : ")
console.log(document.querySelectorAll("div ul")[1].getElementsByTagName("li")[0].innerHTML);
