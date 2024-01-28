
   
///<reference types ="../@types/jquery"/>


async function display(){
    const dataCategories = await getCategory();
    displayCategory(dataCategories)

}



async function getCategory() {
    const res = await (await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')).json();
    console.log(res)
    return res;
}
display()


function displayCategory(CategoryData) {
   
    let categoriesBox = '';

    for (let i = 0; i < CategoryData.categories.length; i++) {
        
        categoriesBox += `
            <div class="col-md-3 border-0">
             <div data-id="${CategoryData.categories[i].idCategory}" class='card' id="${CategoryData.categories[i].strCategory}" >
                <figcaption class="position-relative overflow-hidden ">
                    <img src="${CategoryData.categories[i].strCategoryThumb}" alt="" class="w-100">
                    <div class="layer position-absolute ">
                          <h3 class="text-center">${CategoryData.categories[i].strCategory}</h3>
                         <p>${CategoryData.categories[i].strCategoryDescription}</p>
        
                    </div>
                </figcaption>
           
               </div> 
            </div>
        `;
    }

    
    $('#resultDisplay').html(categoriesBox);


    $('.card').each(function() {
        $(this).on('click',async function() {
            

            const dataFilterCategories = await getFilterCategory($(this).attr('id'));
            displayFilterCategory(dataFilterCategories)
         
        });
    });
};
async function getFilterCategory(filter) {
    const resp = await (await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${filter}`)).json();
    console.log(resp)
    return resp;
}

function displayFilterCategory(CategoryFilterData) {
   
    let categoriesFilterBox = '';

    for (let i = 0; i < CategoryFilterData.meals.length; i++) {
        
        categoriesFilterBox += `
            <div class="card col-md-3 border-0"  id="${CategoryFilterData.meals[i].idMeal}">
             
                <figcaption class="position-relative overflow-hidden ">
                    <img src="${CategoryFilterData.meals[i].strMealThumb}" alt="" class="w-100">
                    <div class="layer position-absolute ">
                         
                         <p class="position-absolute top-50 start-50 translate-middle text-white fs-3">${CategoryFilterData.meals[i].strMeal}</p>
        
                    </div>
                </figcaption>
           
               
            </div>
        `;
    }
        $('#resultDisplay').html(categoriesFilterBox);
        

        $('.card').each(function() {
            $(this).on('click', async function() {
                console.log($(this).attr('id'));


                  const dataDetails = await getDetails($(this).attr('id'));
            displayDetails(dataDetails);

            });
    });

}

async function getDetails(idNum) {
    const response = await (await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idNum}`)).json();
    console.log(response)
    return response;
}

async function displayDetails(DetailsData) {
   let RecipesBox =''
   for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}`;
    console.log(DetailsData.meals[0][ingredientKey]);
    const measureKey = `strMeasure${i}`

    if (DetailsData.meals[0][ingredientKey] != '') {
        RecipesBox +=`
        <span><li class="alert alert-info m-2 p-1">${DetailsData.meals[0][measureKey]} ${DetailsData.meals[0][ingredientKey]}</li></span>`
    }
    
  }
  DetailsBox = `
  <div class=" col-md-4 border-0 mt-5"  >
   
      <figcaption class="position-relative overflow-hidden mb-2 ">
          <img src="${DetailsData.meals[0].strMealThumb}" alt="" class="w-100">
      </figcaption>
      <p class='fw-5 fs-3'>${DetailsData.meals[0].strMeal}</p>
 
     
  </div>
  <div class=" col-md-8 border-0 mt-5"  >
    <h2>Instructions</h2>
    <p>${DetailsData.meals[0].strInstructions} </p>
    <h3>Area: <span>${DetailsData.meals[0].strArea}</span></h3>
    <h3>Category:<span>${DetailsData.meals[0].strCategory}</span></h3>
    <h3>Recipes:</h3>
    ${RecipesBox}
   
  </div>
`;  
    
      
        $('#resultDisplay').html(DetailsBox);


}