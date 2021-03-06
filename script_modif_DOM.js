
//1) Modification changeTitle

function changeTitles(){

	let title = document.getElementsByClassName("jumbotron-heading")[0];
	console.log(title.innerHTML);
	title.innerHTML = "Ce que j'ai appris à THP";

    let subtitle = document.getElementsByClassName("lead text-muted")[0];
    console.log(subtitle.innerHTML)
    subtitle.innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines,les principaux langages et outils du web n'auront plus de secret pour vous !"

}

//2) Modification Boutons


function changeCallToActions(){
	let buttons = document.querySelectorAll("div.container")[2].querySelectorAll("p>a");
	console.log(buttons[0].innerHTML);
	buttons[0].innerHTML = "OK je veux tester!"
	buttons[0].href = "http://www.thehackingproject.org";
	buttons[1].innerHTML = "Non Merci"
	buttons[1].href = "https://www.pole-emploi.fr/accueil/";

}



//3) Modification Navbar

function changeLogoName(){
	let navbar = document.getElementsByTagName("strong");
	console.log(navbar[0].innerHTML);
	navbar[0].innerHTML = "The THP Experience";
	navbar[0].style.fontSize = "2em";
}


//4) Modification URL Image

function populateImages(){
	let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
	let cardImages = document.getElementsByClassName("card-img-top");
	for (i = 0 ; i < cardImages.length ; i = i+1){
		cardImages[i].src = imagesArray[i];
	}
}


//5) Suppression des dernières cards

function deleteLastCards(){
	let lastCards = document.getElementsByClassName("col-md-4");
	let lastItem = lastCards.length;
	console.log(lastItem);
    for (i = 0; i < 3 ; i++) {
        lastCards[lastCards.length - 1 ].remove();
	}
}

//6) Modification 3 premières cards

function changeCardsText(){
	let textsArray = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];
	let cardTexts = document.getElementsByClassName("card-text");
	console.log(cardTexts[0].innerHTML);
	for (i = 0; i < 3 ; i++){
		cardTexts[i].innerHTML = textsArray[i]
	}
}

//7) Modification buttons

function changeViewButtons(){
	let cardsButtons = document.getElementsByClassName("col-md-4");
	for (i = 0; i < cardsButtons.length; i++){
		cardsButtons[i].getElementsByTagName("button")[0].attributes[1].value = "btn btn-sm btn-success";
	}
}

//8) AJout Pyramide inversée

function pyramid(){
	let newDiv = document.createElement("div")
	newDiv.classList.add("row")

	let row = document.getElementsByClassName('row')[1].parentNode;
	row.appendChild(newDiv);

	let jsRow = document.getElementsByClassName('col-md-4')[2];
	row.appendChild(jsRow);
}


changeTitles()
changeCallToActions()
changeLogoName()
populateImages()
deleteLastCards()
changeCardsText()
changeViewButtons()
pyramid()