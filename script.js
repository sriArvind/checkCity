document.body.addEventListener('mousemove', function (e) {
    document.body.style.backgroundColor =
        "rgb(" + e.offsetX + "," + e.offsetY + ", 63)";
})

var newCity = document.getElementById('newCity');

var cities = document.querySelector('#cities');

var message = document.querySelector('p');

var validate = document.querySelector('form');
validate.addEventListener('submit', validCheck);

function validCheck(e) {
    e.preventDefault();
    
    if (newCity.value === "") {
        message.className = 'error';
        message.innerText = "Please enter a valid city";
    }

    else if (checkCities()) {
        message.className = 'warn';
        message.innerText = "City already exists";
    }
    else {
        var addCity = document.createElement('option');
        addCity.value = newCity.value;
        addCity.innerText = newCity.value;
        cities.appendChild(addCity);

        message.className = 'success';
        message.innerText = "City added successfully";
    }
}

function checkCities() {
    for (var city of cities) {
        if (newCity.value.trim().toLowerCase() === city.value.trim().toLowerCase()) {
            return true;
        }
    }
    return false;
}