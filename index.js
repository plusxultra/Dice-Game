function play() {
    var player1 = Math.floor(Math.random()*6)+1;
    var player2 = Math.floor(Math.random()*6)+1;

    var img1;
    var img2;

    switch (player1) {
        case 1:
            document.querySelector(".img1").setAttribute('src','images/dice1.png');
            break;
        case 2:
            document.querySelector(".img1").setAttribute('src','images/dice2.png');
            break;
        case 3:
            document.querySelector(".img1").setAttribute('src','images/dice3.png');
            break;
        case 4:
            document.querySelector(".img1").setAttribute('src','images/dice4.png');
            break;
        case 5:
            document.querySelector(".img1").setAttribute('src','images/dice5.png');
            break;
        case 6:
            document.querySelector(".img1").setAttribute('src','images/dice6.png');
            break;
    }

    switch (player2) {
        case 1:
            document.querySelector(".img2").setAttribute('src','images/dice1.png');
            break;
        case 2:
            document.querySelector(".img2").setAttribute('src','images/dice2.png');
            break;
        case 3:
            document.querySelector(".img2").setAttribute('src','images/dice3.png');
            break;
        case 4:
            document.querySelector(".img2").setAttribute('src','images/dice4.png');
            break;
        case 5:
            document.querySelector(".img2").setAttribute('src','images/dice5.png');
            break;
        case 6:
            document.querySelector(".img2").setAttribute('src','images/dice6.png');
            break;
    }

    if (player1 > player2){
        document.querySelector("div h1").innerHTML = "Player1 wins.";
    } else if (player1 < player2){
        document.querySelector("div h1").innerHTML = "Player2 wins.";
    } else {
        document.querySelector("div h1").innerHTML = "Players Draws.";
    }
}

