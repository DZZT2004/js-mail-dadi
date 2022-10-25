// Accesso Email
var listaEmail = ["marcofabbiani@gmail.com", "benitomarra@gmail.com", "mattoventura@gmail.com", "manuelgiacomelli@gmail.com"];
var email = prompt("Inserisci la tua email ");
var accesso = false;
for (let i = 0; i < listaEmail.length; i++) {
	if(email == listaEmail[i]){
        accesso = true;
        break;
    }
}

if (accesso){
    console.log("Accesso effettuato");
}else{
    console.log("Accesso negato");
}

// Gioco dei dadi

var giocatore = Math.round(Math.random() * 5) +1;
var computer = Math.round(Math.random() * 5) +1;
console.log(giocatore);
console.log(computer);
if(giocatore > computer){
    console.log("Il giocatore vince");
}else if(giocatore < computer){
    console.log("Il computer vince");
}else{
    console.log("Pareggio");
}