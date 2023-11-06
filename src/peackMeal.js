document.getElementById("get_meal").addEventListener("click", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => displayMeal(data.meals[0]));
});

function displayMeal(meal) {
  const mealDiv = document.getElementById("meal_display");
  mealDiv.innerHTML = `
        <h2>${meal.strMeal}</h2>
        <img src="${meal.strMealThumb}" alt="Meal Image" width="300px">
        <p>${meal.strInstructions}</p>
    `;
}
