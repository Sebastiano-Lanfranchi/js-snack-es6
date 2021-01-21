const gattini = [{
  "nome": 'Pigolo',
  "age": 10,
  "colore": 'orange',
  "sesso": 'M'
},
{
  "nome": 'Merlina',
  "age": 8,
  "colore": 'black',
  "sesso": 'F'
},
{
  "nome": 'Giegia',
  "age": 7,
  "colore": 'grey',
  "sesso": 'F'
}
{
  "nome": 'Tom',
  "age": 7,
  "colore": 'brown',
  "sesso": 'F'
}
];

gattini.forEach( (element) => {
  console.log(`il gatto di nome ${element.nome} ha il pelo di colore ${element.colore} `)
});
