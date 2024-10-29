// Get the selected car from local storage 
const selectedCar = JSON.parse(localStorage.getItem('selectedCar'))

const carDetailsContainer = document .getElementById('carDetails')

carDetailsContainer.innerHTML = `
<img src="${selectedCar.image}" alt="${selectedCar.name}" class="car-image" >
<div class="car-info">
    <h1>${selectedCar.name}</h1>
    <h3>${selectedCar.model}</h3>
</div>
`

// Go back to the gallery page
function goBack() {
    window.location.href = 'index.html';
}