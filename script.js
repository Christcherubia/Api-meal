const seachInput = document.getElementById("searchInput");
const randomMeal = document.getElementById("randomMea");
const results = document.getElementById("results");

let urlSearch = "";

const fetchSearch = async (url) => {
  meals = await fetch(`https://www.themealdb.com/api/json/v1/1/${url}`)
    .then((res) => res.json())
    .then((res) => res.meals);
};

//********* SEARCH ************ */
const searchDisplay = async () => {
  await fetchSearch(search);

  if (meals == null) {
    results.innerHTML = '<span class="noResult">Aucun resultats</span>';
  }

  results.innerHTML = meals.map(
    (meal) =>
      '<div class="searchContainer"><h2>${meal.strMeal}</h2><div class="infos"></div><div>origine : ${meal.strArea}</div><div>categorie : ${meal.steCategory}</div><img src="${meal.strMealThumb}" /></br><a href="${meal.strYoutube}" target="_blank"><i class="fab fa-youtube"></i></a></div>'
  ).join();
};

searchInput.addEventListerner('input', (event) => {
    search = `search.php?s=${event.target.value}`;
    searchDisplay();
})

//*********** RANDOM HEAL ************ */
