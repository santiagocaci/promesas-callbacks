const heroes = {
  capi: {
    nombre: 'Capitan America',
    poder: 'Aguantar inyecciones sin morir',
  },
  iron: {
    nombre: 'Ironman',
    poder: 'Absurda cantidad de dinero',
  },
  spider: {
    nombre: 'Spiderman',
    poder: 'La mejor reaccion alergica a las picaduras de arañas',
  },
};

export const buscarHeroes = (id) => {

  const heroe = heroes[id];

  return new Promise( (resolve, reject)=> {
    if(heroe){
      resolve(heroe);
    }else{
      reject(`No existe un hero con el id ${id}`);
    }
  });
}