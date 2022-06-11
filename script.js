// DOM elements

const buttons = document.querySelectorAll('#buttonPlaceholder > button');
const gameboard = document.querySelectorAll('.gameboard');
const gamemodeSelectionMenu = document.querySelector('.gamemode-selection');

// Fonctions 

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
    gameboard[index].style.display = "block";
}

// EventListeners

// Pour chaque bouton dans le menu de selection des modes de jeu,
// on lui prend son index et on lui met un eventListener qui appelle
// la fonction initializeGame avec en paramètre l'index du bouton
buttons.forEach((button, index) => {
    button.addEventListener('mouseup', () => {
        initializeGame(index);
    });
});