$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"

	$('.js-back').hide();


	renderHighlightedRecipes(recipesArray);

});

/*función para agregar texto a clase callout-news"*/
function printNews(){
        $(".callout-news").children('p').text("Nuevas recetas");
       
    };

    printNews();

    function renderHighlightedRecipes() {
    	
    }



    //function renderHighlightedRecipes() {
    //for (var item in recipesArray){
    	//console.log(recipesArray[item]);
    //}
   
//};





/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes() {
	$(recipesArray).each( function (index ,value){
             if(value.highlighted==true){
            console.log(value);
        };
    });
    	
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


