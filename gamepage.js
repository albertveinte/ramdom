//obtener el nombre del jugador
player_name = localStorage.getItem("player_name");

// valor aleatorio generado
var y = Math.floor(Math.random() * 10 + 1);

  
// contar el número de intentos
var guess = 1;
// crear para el intento correcto

  
// función para el número adivinado por el usuario 
function submit(){
    var x = document.getElementById("guessField").value
    if( x == y){
        alert("feicitaciones "+player_name +"lo adivinaste bien" + guess + " intento");
        guess = 1;
    }
    else if(x > y){
        guess++;
        alert("eso es mucho ¡menos!");
    }
    else{
        guess++
        alert("muy pequeño¡mas!");
    }
}
function playAgain(){
    document.getElementById("guessField").value = "";
    y = Math.floor(Math.random() * 10 +1);
}    
