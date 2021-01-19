const bicicletta = [
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

let biciLeggera = bicicletta[0]

for(let x = 1; x < bicicletta.length; x++) {
  if(bicicletta[x].peso < biciLeggera.peso) {
    biciLeggera = bicicletta[x]
  }
}

console.log(biciLeggera);
