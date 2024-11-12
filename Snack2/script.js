const squadre = [
    {nome:"Juventus", punti: 0, falli:0},
    {nome:"Milan", punti: 0, falli:0},
    {nome:"Inter", punti: 0, falli:0},
    {nome:"Atalanta", punti: 0, falli:0}
    
];
console.log(squadre);


const randomNum = (min, max) => Math.floor(Math.random()* (max - min +1)+ min);

    for(let i= 0; i < squadre.length; i++){
        curSquadra = squadre[i];
        curSquadra.punti = randomNum(0,30);
        curSquadra.falli = randomNum(0,10);
    }

 const squadre2 = [];
 

 const nuovoArray=[];
 for(let i= 0; i < squadre.length; i++){
    curSquadra = squadre[i];
    nuovoArray.push({nome: squadre[i].nome, fali:squadre[i].falli});
   
 }
 console.log(nuovoArray);

    