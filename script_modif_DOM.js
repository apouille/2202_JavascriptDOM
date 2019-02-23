
//1) Modification changeTitle


function changeTitles(){

	let title = document.getElementsByClassName("jumbotron-heading")[0];
	console.log(title.innerHTML);
	title.innerHTML = "Ce que j'ai appris à THP";
	document.getElementsByTagName("h1")[0].parentNode.childNodes[3].textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"

}

function changeCallToActions(){
	document.getElementsByTagName("h1")[0].parentNode.childNodes[5].getElementsByTagName("a")[0].textContent = "OK je veux tester !"
	document.getElementsByTagName("h1")[0].parentNode.childNodes[5].getElementsByTagName("a")[0].setAttribute("href", "http://www.thehackingproject.org")
	document.getElementsByTagName("h1")[0].parentNode.childNodes[5].getElementsByTagName("a")[1].textContent = "Non merci"
	document.getElementsByTagName("h1")[0].parentNode.childNodes[5].getElementsByTagName("a")[1].setAttribute("href", "https://www.pole-emploi.fr/accueil/")
}



changeTitles()
changeCallToActions()