function createGame(n) {
    // Vérifiez que n est au moins égal à 3
    if (n < 3) {
        console.log("La taille du jeu doit être d'au moins 3.");
        return;
    }

    // Initialisez le tableau avec des pastilles
    let gameArray = Array(n).fill(".");

    // Placez le Pacman, le fantôme et le fruit aux positions appropriées
    let pacmanIndex = n-1;
    let ghostIndex = n/2;
    let fruitIndex = (pacmanIndex + 2) % n;

    gameArray[pacmanIndex] = "C";
    gameArray[ghostIndex] = "^";
    gameArray[fruitIndex] = "@";

    return gameArray;
}

