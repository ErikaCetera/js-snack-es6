const bikes = [
    bike1 = { nome: "A001", peso: 5 },
    bike2 = { nome: "A002", peso: 1 },
    bike3 = { nome: "A003", peso: 8 },
    bike4 = { nome: "A004", peso: 7 },
    bike5 = { nome: "A005", peso: 11 },
]


let lightBike = bikes[0];
for(let i = 0; i < bikes.length; i++){
    curBike = bikes[i];
    if(curBike.peso < lightBike.peso ){
        lightBike = curBike
    }

    console.log("la bici più leggera è " + lightBike.nome);
    
}