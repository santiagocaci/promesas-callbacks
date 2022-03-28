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

export const searchHero = (id, callback) => {
  const hero = heroes[id];
  if(hero){
    callback(null, hero);
  }else{
    callback(`No existe un hero con el id ${id}`)
  }
}