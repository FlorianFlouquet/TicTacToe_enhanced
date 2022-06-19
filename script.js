// DOM elements

const gameboardButton = document.querySelector('.gameboard-button-placeholder > button');
const gameboard = document.querySelector('.gamemode-board');
const editUsername = document.querySelectorAll('.change-pseudo');
const username = document.querySelectorAll('.username');
const grid = document.querySelector('.grid');
const scores = document.querySelectorAll('.scoreboard > h3');

// Variables

let scoreJoueur1 = 0;
let scoreJoueur2 = 0;
let symbol = "X";

// Fonctions 

/**
 * Vide le textContent de chaque cellules de la grille de jeu.
 * Remet la valeur de symbol à 'X'
 * 
 */
const resetSettings = () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(div => {
        div.textContent = "";
        div.classList.remove('cell-clicked');
    })
    symbol = 'X';
}

/**
 * Vérifie s'il y a une ligne d'un même symbole.
 * Si oui renvoit true, sinon renvoit false
 * @returns 
 */
const joueurAGagne = () => {
    const lines = document.querySelectorAll('.line');
    let cellContent = '';
    // Vérifie les lignes
    for (let i = 0; i < lines.length; i++) {
        cellContent = lines[i].childNodes[0].textContent;
        if ( cellContent != '' && cellContent == lines[i].childNodes[1].textContent && cellContent == lines[i].childNodes[2].textContent) {
            return true;
        }
    }
    // Vérifie les colonnes
    for (let j = 0; j < lines.length; j++) {
        cellContent = lines[0].childNodes[j].textContent;
        if ( cellContent != '' && cellContent == lines[1].childNodes[j].textContent && cellContent == lines[2].childNodes[j].textContent ) {
            return true;
        }
    }
    // Vérifie les diagonales
    if (lines[0].childNodes[0].textContent != '' && lines[0].childNodes[0].textContent == lines[1].childNodes[1].textContent && lines[0].childNodes[0].textContent == lines[2].childNodes[2].textContent) {
        return true;
    }
    else if (lines[0].childNodes[2].textContent != '' && lines[0].childNodes[2].textContent == lines[1].childNodes[1].textContent && lines[0].childNodes[2].textContent == lines[2].childNodes[0].textContent) {
        return true;
    }
    else {
        return false;
    }
}

/**
 * Affiche le bon symbole dans la cellule qui a été cliqué. 
 * @param {*} div 
 */
const cellGotClicked = (div) => {
    div.textContent = symbol;
    // Ajoute une classe à la cellule pour la rendre incliquable 
    div.classList.add("cell-clicked");
    const cellClicked = document.querySelectorAll('.cell-clicked');
    
    const result = joueurAGagne();
    if (result) {
        if (symbol == "X") {
            scoreJoueur1 += 1;
            scores[0].textContent = scoreJoueur1;
        }
        else {
            scoreJoueur2 += 1;
            scores[1].textContent = scoreJoueur2;
        }
        resetSettings();
    }
    else if (cellClicked.length == 9) {
        resetSettings();
    }
    else {
        if (symbol == "X") {
            symbol = "O";
        }
        else {
            symbol = "X";
        }
    }
}

/**
 * Permet aux utilisateurs de changer leurs pseudos
 * @param {*} span 
 */
const changeUsername = (index) => {
    let newPseudo = prompt('Entrez votre pseudo');
    username[index].textContent = newPseudo;
}

/**
 * Réinitialise les scores des joueurs
 */
const resetScoreboardAndGrid = () => {
    scoreJoueur1 = 0;
    scoreJoueur2 = 0;

    scores[0].textContent = scoreJoueur1;
    scores[1].textContent = scoreJoueur2;

    resetSettings();
}

/**
 * Génére le grille du morpion
 */
const generateGrid = () => {
    for (let i = 0; i < 3; i++) {
        const ligne = document.createElement('div');
        ligne.className = "line";
        for (let j = 0; j < 3; j++) {
            const cellule = document.createElement('div');
            cellule.className = "cell";
            cellule.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                cellGotClicked(event.target);
            })
            ligne.appendChild(cellule);
        }
        grid.appendChild(ligne);
    }
}

gameboardButton.addEventListener('click', resetScoreboardAndGrid);

editUsername.forEach((span, index) => {
    span.addEventListener('click', () => {
        changeUsername(index);
    })
})


// Fonction Déclaré Temporairement

generateGrid();

// Commentaires 
/*
Fonction verification ligne présente ou non:
    Regarde toutes les .line. Si tous les div à l'interieur ont le même symbol c'est win.
    Sinon regarde .line[index] (chaque colonne). Si même symbole c'est win.
    Regarde en diagonale
*/