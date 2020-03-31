var turn = 1;

var square_status = [null, null, null, null, null, null, null, null, null, ]

function square_clicked(num){
    //console.log("square " + num + " clicked.");
    
    if (square_status[num] != null){
        console.log("square has already been clicked.");
    }
    else {
        if (turn % 2 != 0){ //odd
            document.getElementById("square" + num).innerHTML = "X";
            document.getElementById("status").innerHTML = "O's turn.";
            square_status[num] = "X";
            turn++;
            check_victory()
        }
        else {
            document.getElementById("square" + num).innerHTML = "O";
            document.getElementById("status").innerHTML = "X's turn.";
            square_status[num] = "O";
            turn++;
            check_victory()
        }
    }
    
}

function check_victory(){
    if ((square_status[0] == "X" && square_status[1] == "X" && square_status[2] == "X") || 
        (square_status[3] == "X" && square_status[4] == "X" && square_status[5] == "X") || 
        (square_status[6] == "X" && square_status[7] == "X" && square_status[8] == "X") || 
        (square_status[0] == "X" && square_status[3] == "X" && square_status[6] == "X") || 
        (square_status[1] == "X" && square_status[4] == "X" && square_status[7] == "X") || 
        (square_status[2] == "X" && square_status[5] == "X" && square_status[8] == "X") || 
        (square_status[0] == "X" && square_status[4] == "X" && square_status[8] == "X") || 
        (square_status[2] == "X" && square_status[4] == "X" && square_status[6] == "X"))

        {document.getElementById("status").innerHTML = "X wins!";}

    else if ((square_status[0] == "O" && square_status[1] == "O" && square_status[2] == "O") || 
        (square_status[3] == "O" && square_status[4] == "O" && square_status[5] == "O") || 
        (square_status[6] == "O" && square_status[7] == "O" && square_status[8] == "O") || 
        (square_status[0] == "O" && square_status[3] == "O" && square_status[6] == "O") || 
        (square_status[1] == "O" && square_status[4] == "O" && square_status[7] == "O") || 
        (square_status[2] == "O" && square_status[5] == "O" && square_status[8] == "O") || 
        (square_status[0] == "O" && square_status[4] == "O" && square_status[8] == "O") || 
        (square_status[2] == "O" && square_status[4] == "O" && square_status[6] == "O"))
        
        {document.getElementById("status").innerHTML = "O wins!";}
}