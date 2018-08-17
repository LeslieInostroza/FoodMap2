const renderInfo = (explorer) => {
  containerRenderMap.innerHTML += `<p>${JSON.stringify(explorer.results.items[0].title)}
  direccion: ${JSON.stringify(explorer.results.items[0].vicinity)}</p> <p>${JSON.stringify(explorer.results.items[1].title)}
  direccion: ${JSON.stringify(explorer.results.items[1].vicinity)}</p>
  <p>${JSON.stringify(explorer.results.items[2].title)}
  direccion: ${JSON.stringify(explorer.results.items[2].vicinity)}</p>`;
}
const cleanDescription = () => {
  containerRenderMap.innerHTML = '';
}