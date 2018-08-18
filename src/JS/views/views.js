const renderInfo = (explorer) => {
  explorer.results.items.forEach((item)=>{
    let mapInfo = {
      name: item.title,
      direccion: item.vicinity,
      distancia: item.distance
    }
    /*containerRenderMap.innerHTML += `
    <p>${mapInfo.name} esta a: ${mapInfo.distancia} metros, de su posicion actual.</p>
    <p>${mapInfo.direccion}</p>`;*/ //funciona pero muestra los 20 mas cercano
  });
  containerRenderMap.innerHTML += `
  <div class="divModel">
    <p class="pTitle">${JSON.stringify(explorer.results.items[0].title)}</p>
    <p class="pCalif">Calificacion: ${JSON.stringify(explorer.results.items[0].averageRating)}</p>
    <p class="pDirec">Direccion: ${JSON.stringify(explorer.results.items[0].vicinity)}</p>
  </div>
  <div class="divModel">
    <p class="pTitle">${JSON.stringify(explorer.results.items[1].title)}</p>
    <p class="pCalif">Calificacion: ${JSON.stringify(explorer.results.items[1].averageRating)}</p>
    <p class="pDirec">Direccion: ${JSON.stringify(explorer.results.items[1].vicinity)}</p>
  </div>
  <div class="divModel">
    <p class="pTitle">${JSON.stringify(explorer.results.items[2].title)}</p>
    <p class="pCalif">Calificacion: ${JSON.stringify(explorer.results.items[2].averageRating)}</p>
    <p class="pDirec">Direccion: ${JSON.stringify(explorer.results.items[2].vicinity)}</p>
  </div>`;
};
const cleanDescription = () => {
  containerRenderMap.innerHTML = '';
};