
export const filtroDato = (dato, rol) => {
    const arrayDato = Object.values(dato)
    const resulDato = arrayDato.filter(objetRol => {
        const etiquetasObjets = objetRol.tags
        console.log(rol)
        const valuesDato = etiquetasObjets.includes(rol)
          console.log(valuesDato);
        return valuesDato
      })
      return resulDato
};


export const filtroNombre = (datos,nameSearch) => {
  let usuario = nameSearch.value.toLowerCase();
  const arrayData = Object.values(datos);
  const personajes = Array.from(arrayData);
  const personajeEncontrado = personajes.find(personaje => personaje.name.toLowerCase() === usuario)
  console.log(personajeEncontrado)
  return personajeEncontrado

};
