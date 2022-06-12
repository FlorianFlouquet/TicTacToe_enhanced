// DOM elements

const gamemodeButtons = document.querySelectorAll('.gamemode-button-placeholder > button');
const gameboardButtons = document.querySelectorAll('.gameboard-button-placeholder > button');
const gameboard = document.querySelectorAll('.gamemode-board');
const editUsername = document.querySelectorAll('.scoreboard > h2 > span');
const gamemodeSelectionMenu = document.querySelector('.gamemode-selection');
const grid = document.querySelector('.grid');
const scores = document.querySelectorAll('.scoreboard > h3');

// Variables
let scoreJoueur1 = 0;
let scoreJoueur2 = 0;

// Fonctions 

const changeUsername = (span) => {
    let newPseudo = prompt('Entrez votre pseudo');
    span.parentNode.textContent = newPseudo;
}

/**
 * Réinitialise les scores des joueurs
 */
const resetScoreboard = () => {
    console.log('reset');
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
            ligne.appendChild(cellule);
        }
        grid.appendChild(ligne);
    }
}

/**
 * Cache le menu pour choisir le mode de jeu.
 * Fait apparaître le plateau de jeu qui correspond au mode de 
 * jeu choisi (défini par le paramétre 'index').
 * @param {*} index 
 */
const initializeGame = (index) => {
    // On cache le menu de séléction des modes de jeu
    gamemodeSelectionMenu.style.display = "none";
    // On fait apparaître le plateau de jeu qui correspond au mode de jeu choisi
    gameboard[index].style.display = "flex";
}

// EventListeners

// Pour chaque bouton dans le menu de selection des modes de jeu,
// on lui prend son index et on lui met un eventListener qui appelle
// la fonction initializeGame avec en paramètre l'index du bouton
gamemodeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        initializeGame(index);
    });
});

gameboardButtons[1].addEventListener('click', resetScoreboard);

editUsername.forEach((span) => {
    span.addEventListener('click', (event) => {
        changeUsername(event.target);
    })
})


// Fonction Déclaré Temporairement

generateGrid();