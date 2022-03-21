
function affichePerso(perso, indice) {
 var main = document.querySelector("#main");
 var card = document.createElement("div");
card.classList.add("card");
card.style.width = "18rem";

   
 var p = document.createElement("div");
        p.classList.add("card-text");
        p.innerHTML = '<h5 class="card-title">' + personnage.nom + '</h5>';
        p.innerHTML += '<p class="card-text">Classe : ' + personnage.classe + '</p>';
        p.innerHTML += '<p class="card-text">Arme : ' + personnage.arme + '</p>';
        p.innerHTML += '<p class="card-text">Endurance : ' + personnage.endurance + '</p>';
        p.innerHTML += '<p class="card-text">Force : ' + personnage.force + '</p>';
        p.innerHTML += '<p class="card-text">Agilité : ' + personnage.agilite + '</p>';
        p.innerHTML += '<p class="card-text">Intelligence : ' + personnage.intelligence + '</p>';

    
    var cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer", "text-muted", 'd-flex', 'justify-content-between'); 

    // Création des boutons
    var btn = document.createElement("button");
    btn1.classList.add("btn", "btn-primary");
    btn1.innerHTML = "Sélectionner";

    var btn1 = document.createElement("button");
    btn2.classList.add("btn", "btn-danger");
    btn2.innerHTML = "Supprimer";
    btn2.setAttribute("onclick", "supPerso("+indice+")");

    card.appendChild(cardBody);

    cardFooter.appendChild(btn1);
    cardFooter.appendChild(btn2);
    card.appendChild(cardFooter);
    main.appendChild(card);
}

// Fonction de sauvegarde du tableau personnages
function savePersos(personnages) {
    // On transforme le tableau en chaine de caractères pour le stockage
    var tabPersos = JSON.stringify(personnages);
    // Stockage des infos dans le localStorage
    localStorage.setItem('tabPerso', tabPersos);
}

// Fonction de création d'un personnage
function createPerso() {
    var personnage = {};

    personnage.nom = document.getElementById("nom").value;
    personnage.classe = document.getElementById("classe").value;
    personnage.arme = document.getElementById("arme").value;
    personnage.endurance = document.getElementById("end").value;
    personnage.force = document.getElementById("for").value;
    personnage.agilite = document.getElementById("agi").value;
    personnage.intelligence = document.getElementById("int").value;

    // Récupération des infos stockées
    var personnages = recupListePersos();

    // Stockage du nouveau personnage dans le tableau
    personnages.push(personnage);

    savePersos(personnages);
}

// Fonction permetant la suppression d'un personnage
function supPerso(i) {
    // Récupération des infos stockées
    var personnages = recupListePersos();

    // Suppression d'un élément à partir de l'indice i 
    personnages.splice(i, 1);

    savePersos(personnages);
    // Rechargement de la page pour voir les changements
    document.location.reload(); 
}

function recupListePersos() {
    // Récupération des infos stockées
    var personnages = localStorage.getItem('tabPerso');
    // S'il y a des infos, on transforme la chaine de caractères stockée en tableau
    if (personnages) {
        personnages = JSON.parse(personnages, 'UTF-8');
    } else { // Si non, on déclare un tableau vide pour évité les plantages
        personnages = [];
    }

    return personnages;
}