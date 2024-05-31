function searchCity(city) {
  let apiKey = "4108a6e3f140d4b07bc38ef3f66c2t5";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric";
  console.log(apiUrl);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let SearchFormElement = document.querySelector("#search-form");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let SearchFormElement = document.querySelector("#search-form");
SearchFormElement.addEventListener("submit", handleSearchSubmit);
