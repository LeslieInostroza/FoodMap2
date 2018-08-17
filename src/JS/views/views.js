btnSearchModal.addEventListener('click', () => {
  const ubication = `https://places.cit.api.here.com/places/v1/discover/search?app_id=fLzneZsZJmJNOTDlBulj&app_code=dWYEJbbiTjECkQ-bI243qQ&at=${HEREHQcoordinates.lat},${HEREHQcoordinates.lng}&q=${inputGroupSelect.value}&pretty`
  fetch(ubication)
  .then(response => response.json())
  .then(explorer => {
    console.log(explorer);
    renderInfo(explorer);
  });
});