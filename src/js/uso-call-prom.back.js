import { searchHero as buscasrHeroesCallback } from './js/callbacks';
import { buscarHeroes } from './js/promesas';
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'spider';

// searchHero(heroId1, (err, heroe1) => {

//   if (err) { return console.error(err); };

//   searchHero(heroId2, (err, heroe2) => {
//     if (err) { return console.error(err); };
//     console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre}`);
//   })
// });

// buscarHeroes( heroeId1 ).then( heroe1 => {
//   // console.log(`Enviando a ${heroe.nombre} a la mision`);
//   buscarHeroes(heroeId2).then(heroe2 => {
//     console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre}`);
//   })
// });


Promise.all([buscarHeroes(heroeId1), buscarHeroes(heroeId2)])
  .then(([heroe1, heroe2]) => {
    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre}`);
  }).catch(err => {
    alert(err);
  }).finally(()=>{
    console.log('Se termino el promise.all');
  })