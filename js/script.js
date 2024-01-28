
///<reference types ="../@types/jquery"/>




$('.fa-bars').on('click',function () {

    let offsetLeft = $('.side-bar').offset().left;
 console.log(offsetLeft)
   if (offsetLeft < 0) {
      
    $('.side-bar').css('left', '0px');

    $('.fa-bars').removeClass('fa-bras').addClass('fa-xmark');
   

   }else{
    $('.side-bar').css('left', '-260px');
    $('.fa-xmark').removeClass('fa-xmark').addClass('fa-bras');
   }

   
})
/*async function display() {
   const dataHome = await searchHome($('#inputHome').val());
   displayHome(dataHome);
}

$('.nav').on('click', '.nav-item', async function() {
   console.log(this);
   $('#resultDisplay').html("");

});
async function searchHome() {
   const res = await (await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)).json();
   console.log(res)
   return res;

}
display()
async function displayHome(dataHome) {
   var box = '';
   console.log(typeof (box));
   for (let i = 0; i < dataHome.meals.length; i++) {
       console.log(dataHome.meals.length);
      box += `
      <div class="col-md-3">
                <div data-id="${dataHome.meals[i].idMeal}" class='card'  >
                   <figcaption class="position-relative overflow-hidden">
                       <img src="${dataHome.meals[i].strMealThumb}" alt="" class="w-100">
                       <div class="layer position-absolute ">
                             <h3 class="text-center">${dataHome.meals[i].strMeal}</h3>
                            <p>${dataHome.meals[i].strInstructions}</p>
           
                       </div>
                   </figcaption>
              
                  </div> 
               </div>
           
      `
   }
   $('#resultDisplay').html(box);
}

*/