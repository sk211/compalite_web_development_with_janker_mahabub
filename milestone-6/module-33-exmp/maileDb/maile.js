document.getElementById("error-message").style.display = "none"

const searchFood = () => {
    const serchField = document.getElementById("search-field")
    const searchText = serchField.value
    document.getElementById("error-message").style.display = "none"
    console.log(searchText);
    if (searchText == '') {
        const searchResult = document.getElementById("search-result")

        searchResult.innerText = " Type some food name"
    } else {


        serchField.value = ''
        const url = `https://www.themealdb.com/api/json/v91/1/search.php?s=${searchText}`

        fetch(url)
            .then(res => res.json())
            .then(data => displayResult(data.meals))
            .catch(error => displayError(error))
    }



}
const displayError = () => {
    document.getElementById("error-message").style.display = "block"
}

const displayResult = maels => {
    // console.log(maels);
    const searchResult = document.getElementById("search-result")
    searchResult.textContent = ''
    maels.forEach(meal => {
        console.log(meal);
        const div = document.createElement("div")
        div.classList.add('col')
        div.innerHTML = `
                    <div class="card" onclick="loadDetailes(${meal.idMeal})" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                         <div class="card-body">
                             <h5 class="card-title">${meal.strMeal}</h5>
                            <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
                        </div>
                    </div>
        `;
        searchResult.appendChild(div)
    })
}
const loadDetailes = mealId => {
    console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealsData(data.meals[0]))

}

const displayMealsData = meal => {
    const modelContent = document.getElementById("modal_contain");
    const div = document.createElement('div')
    modelContent.textContent = ''
    div.innerHTML = `
          <div class="col-lg-6">
                            <img src="${meal.strMealThumb}" class="img-fluid">
                 </div>
                            <div class="col-lg-6">
                                <h3>${meal.strMeal}</h3>
                                <p>${meal.strInstructions.slice(0, 50)}</p>
                         </div>
                     
                    
                   
    `
    modelContent.appendChild(div)
}