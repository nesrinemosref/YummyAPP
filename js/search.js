
///<reference types ="../@types/jquery"/>



$('#inputName').on('keyup input', async function () {
    const inputNameValue = $('#inputName').val().trim(); 
    if (inputNameValue === "") {
        $('#resultDisplay').html(" ");  
    } else {
        const dataName = await searchName(inputNameValue);
        displayName(dataName);
    }
});

async function searchName(name) {
    const res = await (await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)).json();
    console.log(res)
    return res;

}

async function displayName(dataName) {
    var box = '';
    console.log(typeof (box));
    for (let i = 0; i < dataName.meals.length; i++) {
        console.log(dataName.meals.length);
       box += `
       <div class=" card col-md-3" id="${dataName.meals[i].idMeal}">
                 
                    <figcaption class="position-relative overflow-hidden">
                        <img src="${dataName.meals[i].strMealThumb}" alt="" class="w-100">
                        <div class="layer position-absolute ">
                              
                             <p class="position-absolute top-50 start-50 translate-middle text-white fs-3">${dataName.meals[i].strMeal}</p>
            
                        
                    </figcaption>
               
                   </div> 
                </div>
            
       `
    }
    $('#resultDisplay').html(box);
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
    ${RecipesBox};
    <div>
    <a href="${DetailsData.meals[0].strYoutube}" class="bg-danger text-white p-2 rounded rounded-2">youtube</a>

    </div>

  </div>
`;  
    
      
        $('#resultDisplay').html(DetailsBox);


}














//search by letter
$('#inputLetter').on('keyup', async function () {
    const dataLetter = await searchLetter($('#inputLetter').val());
    displayName(dataLetter);
});


async function searchLetter(letter) {
    const res = await (await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)).json();
    console.log(res)
    return res;

}
async function displayName(dataLetter) {
    var box = '';
    console.log(typeof (box));
    for (let i = 0; i < dataLetter.meals.length; i++) {
        console.log(dataLetter.meals.length);
       box += `
       <div class="card col-md-3" id="${dataLetter.meals[i].idMeal}">
                 
                    <figcaption class="position-relative overflow-hidden">
                        <img src="${dataLetter.meals[i].strMealThumb}" alt="" class="w-100">
                        <div class="layer position-absolute ">
                              
                             <p class="position-absolute top-50 start-50 translate-middle text-white fs-3">${dataLetter.meals[i].strMeal}</p>
            
                        </div>
                    </figcaption>
               
                  
                </div>
            
       `
    }
    $('#resultDisplay').html(box);
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