

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
    pacmanIndex = 0;
    ghostIndex = parseInt(n/2);
    fruitIndex = 1;

    gameArray[pacmanIndex] = "C";
    gameArray[ghostIndex] = "^.";
    gameArray[fruitIndex] = "@";

    return gameArray;
}

function moveLeft(game){
    let prev = pacmanIndex -1; // next position
    if(prev < 0){
        prev = n-1;
    }

    if(prev >= 0){ // verifie si le prochain emplacement n'est pas hors du tableau
        game[pacmanIndex] =" "; // remplace par ' ' la position que vien de quitter pacman 
        

            if(game[prev] == "."){
                eatPastille(pacmanGame, prev);
            }
            game[prev] = "C";
            pacmanIndex = prev;
        
    }
    else{
        game[pacmanIndex] =" "; 
        if(game[n-1] == "."){
            eatPastille(pacmanGame, prev);
        }
        game[n-1] = "C";// ramene pacman a la fin du tableau
        
    }
    
    return game;
}
function moveRight(game){
    let next = pacmanIndex+1; // next position
    if(next < n){ // verifie si le prochain emplacement n'est pas hors du tableau
        game[pacmanIndex] =" ";  
        if(game[next] == "."){
            eatPastille(pacmanGame, prev);
        }
        game[++pacmanIndex] = "C";
    }
    else{
        game[pacmanIndex] =" "
        if(game[0] == "."){
            eatPastille(pacmanGame, 0);
        }
        game[0] = "C";// ramene pacman au debut du tableau
    }
    return game;
}

function eatPastille(gameBoard, nextPos){
    gameBoard[nextPos]="O"; // pacmane se ferme pour avalaer les pastille
    console.log(gameBoard); // display eating
}

function completed(board){
    let done = false;
    if(!board.includes(".")){
        done = true;
    }
    return done;
}

// Essai 1
let pacmanGame = createGame(n);
console.log(pacmanGame);

// Essaie 2
pacmanGame = moveLeft(pacmanGame);
console.log(pacmanGame);
// Essaie 3
pacmanGame = moveLeft(pacmanGame);
console.log(pacmanGame);
// Essaie 4
pacmanGame = moveRight(pacmanGame);
console.log(pacmanGame);

pacmanGame = moveLeft(pacmanGame);
console.log(pacmanGame);

pacmanGame = moveLeft(pacmanGame);
console.log(pacmanGame);

pacmanGame = moveLeft(pacmanGame);
console.log(pacmanGame);

won = completed(pacmanGame);
if(won == true){
    console.log("Congratulations you completed the game... Next level loading");
    console.log(createGame(parseInt(n/2))); // crée un nouveau jeu plus petit
}