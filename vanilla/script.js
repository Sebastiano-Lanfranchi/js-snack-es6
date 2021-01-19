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

parseInt(bicicletta.peso);

for(var i=0; i<6; i++){
  var pesoMinore = Math.min(bicicletta.peso[i])
}
console.log(pesoMinore)
