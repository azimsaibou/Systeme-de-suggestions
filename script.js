//
let suggestions = [
	"Web Developpeur",
	"Informaticien",
	"Php",
	"Javascript",
	"Css",
	"Laravel",
	"React"
]

//
let input =  document.querySelector(".contenu input")
let contenu = document.querySelector(".contenu")
let ul = document.querySelector(".contenu ul")

//
function filtrer(e){
	let valeurSaisi = e.target.value;
	let resultats = [], listes = "";

	if(valeurSaisi){
		resultats = suggestions.filter(function(element){return element.toLocaleLowerCase().startsWith(valeurSaisi.toLocaleLowerCase())})
	
		resultats = resultats.map(function(element){return `<li>${element}</li>`})
		contenu.classList.add("active")

		if(resultats.length){
			resultats.forEach(function(element){
				listes += element;
			})
			ul.innerHTML = listes;
		}else{
			ul.innerHTML = `<li>${valeurSaisi}</li>`;
		}

		let lis = document.querySelectorAll(".contenu ul li")
		function selectionner(e){
			input.value = e.target.innerText;
			contenu.classList.remove("active")
			input.focus();
		}
		lis.forEach(function(li){
			li.addEventListener("click", selectionner)
		})

	}else{
		contenu.classList.remove("active")
	}
}


input.addEventListener("input", filtrer)