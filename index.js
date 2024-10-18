// store all cars globally for filtering
let allCars = []

// define an asynchronous function to fetch car data from a json file 
const fetchCarData = async () => {
    try{
        // fetch the json file containing car data 
    const response = await fetch('cars.json')

    // Parse the JSON response into a JavaScript object.
    const data = await response.json()

    // store the array of cars in the global variable 
    // 'allCars' for future filtering
    allCars = data.cars

    // initially display all cars when the page load 
    displayCars(allCars)

    // handle any errors that occur during the fetch process 
    }catch(error){
        // log the error message to the console 
        console.error('Error fetch car data:', error)
    }
    
}

// Define a function to display the car cards on the webpage.
const displayCars = (cars) => {
    const carContainer = document.getElementById('carContainer')

    // Clear any existing content inside the car container.
    carContainer.innerHTML = '';

    // Loop through each car object in the `cars` array.
    cars.forEach((car) => {

        // create a new <div> element for each car card 
        const carCard = document.createElement('div')

        // Add a CSS class 'card' to the `<div>` for styling purposes.
        carCard.classList.add('card')

        // Add HTML content to the car card, including 
        // an image, name, and model of the car.

        carCard.innerHTML = `
        <img src="${car.image}" alt="${car.name} ${car.model}" width="300" >
        <h2>${car.name}</h2>
        <p>Model: ${car.model}</p>
        `
        // Append the car card to the car container on the webpage.
        carContainer.appendChild(carCard)
    })
}


// Fetch and display car data when the page loads
window.onload = fetchCarData