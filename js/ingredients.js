///<reference types ="../@types/jquery"/>


async function display(){
    const dataAreas = await getArea();
    displayArea(dataAreas)

}



async function getArea() {
    const res = await (await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')).json();
    console.log(res)
    return res;
}
display()


function displayArea(areaData) {
   
    let areasBox = '';

    areaData.meals.forEach(meal => {

        areasBox += `
        <div class="col-md-3 border-0">
         
            <div class='card-area bg-dark' style=" cursor: pointer;" id="${meal.idIngredient}">
           
            <i class="fa-solid fa-drumstick-bite w-100 fa-5x h-100 text-light"></i>
             <h3 class=" text-light">${meal.strIngredient}</h3>
             </div>      
                
            </div>
       
          
        </div>
    `;
        
    });
        
    $('#resultDisplay').html(areasBox);

    $('.card-area').each(function() {
        $(this).on('click', async function() {
            const dataFilterArea = await getFilterArea($(this).attr("id"));
            displayFilterArea(dataFilterArea);
        });
    });
}
    async function getFilterArea(filter) {
        const resp = await (await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${filter}`)).json();
        console.log(resp);
        return resp;
    }
    
    function displayFilterArea(AreaFilterData) {
        let areasFilterBox = '';
    
        AreaFilterData.meals.forEach(meal => {
            areasFilterBox += `
                <div class="card col-md-3 bg-dark" id="${meal.idMeal}">
                    <figcaption class="position-relative overflow-hidden">
                        <img src="${meal.strMealThumb}" class="w-100">
                        <div class="layer position-absolute" style="position: absolute;background: rgba(128, 128, 128, 0.46);width: 100%;
                        height: 100%;transition: 1s; top: 100%;">
                         <p class="position-relative top-50 start-50 translate-middle text-white fs-3">${meal.strMeal}</p>
                        </div>
                    </figcaption>
                </div>
            `;
        });
    
        $('#resultDisplay').html(areasFilterBox);
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
        <div>
        <a href="${DetailsData.meals[0].strYoutube}" class="bg-danger text-white p-2 rounded rounded-2">youtube</a>
        </div>
    
      </div>
    `;  
        
          
            $('#resultDisplay').html(DetailsBox);
    
    
    }
 