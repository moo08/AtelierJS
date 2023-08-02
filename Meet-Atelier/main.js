/*
// Element à selectionner
const main = document.getElementById("main");

// Function pour afficher les éléments 

function affichageMain(element1, element2, element3, element4){
    
    //pour la section

const section = document.createElement("section");

const textSection = document.createTextNode(element1);

section.append(textSection);

main.append(section);

    //pour la div 

const div = document.createElement("div");

const textDiv = document.createTextNode(element2);
    
div.append(textDiv);
    
main.append(div);

    //pour le paragraphe

    const para = document.createElement("p");

    const textPara = document.createTextNode(element3);
    
    para.append(textPara);
    
    main.append(para);
    
    //pour la liste

    const list = document.createElement("li");

    const liText = document.createTextNode(element4);

    list.append(liText);

    main.append(list);
}

affichageMain(
"Ceci est une section",
"Ceci est une div",
"Ceci est un paragraphe",
"Ceci est une liste"
)
*/


const element = document.getElementById("main")
function insererNode(balise,contenu) {
    const baliser = document.createElement(balise)
    const texte = document.createTextNode(contenu)
    baliser.append(texte)
    return element.appendChild(baliser)
}

// p
insererNode("p" ,"On fait un meet 1") 
// div
insererNode("div" ,"On fait un meet 2")
// li
insererNode("li" ,"On fait un meet 3")
// section
insererNode("section" ,"On fait un meet 4")