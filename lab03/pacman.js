

let pacmanIndex;
let ghostIndex;
let fruitIndex;
let n;
let input = window.prompt("Entrerla taille du jeu (au moins 3):");
n = parseInt(input);

function createGame(n) {
    // Vérifiez que n est au moins égal à 3
    if (n < 3) {
        console.log("La taille du jeu doit être d'au moins 3.");
        return;
    }

    // Initialisez le tableau avec des pastilles
    let gameArray = Array(n).fill(".");

    // Placez le Pacman, le fantôme et le fruit a des positions arbitraires
    pacmanIndex = n-1;
    ghostIndex = parseInt(n/2);
    fruitIndex = 1;

    gameArray[pacmanIndex] = "C";
    gameArray[ghostIndex] = "^.";
    gameArray[fruitIndex] = "@";

    return gameArray;
}
// Essai 1
let pacmanGame = createGame(n);
console.log(pacmanGame);

function moveLeft(game){
    if(pacmanIndex - 1 >= 0){ // verifie si le prochain emplacement n'est pas hors du tableau
        game[pacmanIndex] ="."; // remplace par '.' la position que vien de quitter pacman 
        game[--pacmanIndex] = "C";
    }
    else{
        game[pacmanIndex] ="."; 
        game[n-1] = "C";// ramene pacman a la fin du tableau
    }
    return game;
}
function moveRight(game){
    if(pacmanIndex +1 <n){ // verifie si le prochain emplacement n'est pas hors du tableau
        game[pacmanIndex] =".";  
        game[++pacmanIndex] = "C";
    }
    else{
        game[pacmanIndex] ="."
        game[0] = "C";// ramene pacman au debut du tableau
    }
    return game;
}
// Essaie 2
pacmanGame = moveLeft(pacmanGame);
console.log(pacmanGame);
// Essaie 3
pacmanGame = moveRight(pacmanGame);
console.log(pacmanGame);
// Essaie 4
pacmanGame = moveRight(pacmanGame);
console.log(pacmanGame);