var current_turn = "X";

function square_clicked(num){
    document.getElementById("square" + num).innerHTML = current_turn;
}