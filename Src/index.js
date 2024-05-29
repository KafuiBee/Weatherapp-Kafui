function handleSearchSubmit(event) {
  let SearchFormElement = document.querySelector("#search-form");
  console.log(SearchFormElement);
  SearchFormElement.addEventListener("submit", handleSearchSubmit);
}
