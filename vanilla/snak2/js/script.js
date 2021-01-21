var squadre = [
  {
    "nome": 'Juventus',
    "Punti fatti": 0,
    "falli subiti": 0
  },
  {
    "nome": 'Inter',
    "Punti fatti": 0,
    "falli subiti": 0
  },
  {
    "nome": 'Milan',
    "Punti fatti": 0,
    "falli subiti": 0
  },
  {
    "nome": 'Roma',
    "Punti fatti": 0,
    "falli subiti": 0
  }
]

function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

for(var x=0; x<squadre.length; x++){
  squadre[x]['Punti fatti'] = randomNumber(1, 20);
  squadre[x]['falli subiti'] = randomNumber(1, 20);
}

console.log()
