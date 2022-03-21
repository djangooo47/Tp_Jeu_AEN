
// Déclaration des objets et des variables et permettre la récupération d'infos.

var personnages = localStorage.getItem('tabPerso');
if (personnages) {
    personnages = JSON.parse(personnages, 'UTF-8');
} else { 
    personnages = [];
}

for (let i=0;i < personnages.length;i++){
    affichePerso(personnages[i]);

}[

    // {

    //     "nom": "Barracuda",
    //     "classe": "guerrier",
    //     "arme" : "épée",
    //     "endurance": "45",
    //     "force": "90",
    //     "agilité": "24",
    //     "intelligence": "68",

    // },
    // {
    //     "nom": "Hawkeye" ,
    //     "classe": "archer",
    //     "arme": "arc",
    //     "endurance": "56",
    //     "force": "24",
    //     "agilité": "58",
    //     "intelligence": "80",

    // },
    // {
    //     "nom": "Marabout",
    //     "classe": "sorcier",
    //     "arme": "baton",
    //     "endurance": "38",
    //     "force": "45",
    //     "agilité": "56",
    //     "intelligence": "90",

    // }  
]



var tabPersos = JSON.stringify(personnages);
localStorage.setItem('tabPerso',tabPersos);

