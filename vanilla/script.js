var bicicletta = [
  {
    'nome': 'Fulmine',
    'peso': 28
  },
  {
    'nome': 'Saetta',
    'peso': 43
  },
  {
    'nome': 'Lampo',
    'peso': 50
  },
  {
    'nome': 'Scheggia',
    'peso': 53
  },
  {
    'nome': 'Luce',
    'peso': 10
  }
];

for(var i=0; i < bicicletta.length; i++){
  var pesoMinore = Math.min(bicicletta[i].peso)
}
console.log('la bicicletta piú leggera é' + bicicletta[bicicletta.indexOf(pesoMinore)].nome + pesoMinore)
