$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"

	$('.js-back').hide();


	renderHighlightedRecipes(recipesArray);

   renderActivities(activities);

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
            renderRecipe(value);
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
    var enlace=$("<a></a>");
    enlace.addClass("item-recipe");
    console.log(enlace);

    var span=$("<span></span>");
    span.addClass("attribution");

    var span2=$("<span></span>");
    span2.addClass("title-recipe");
    span2.attr("title" , recipe.title);
    span2.text(recipe.title);

    var span3=$("<span></span>");
    span3.addClass("metadata-recipe");

    var span4=$("<span></span>");
    span4.addClass("author-recipe");
    span4.text(recipe.name);

    var span5=$("<span></span>");
    span5.addClass("bookmarks-recipe");

    var span6=$("<span></span>");
    span6.addClass("icon-bookmark");
    span6.text(recipe.cookTime);

    var imagen=$("<img/>");
    imagen.attr( "src" , recipe.source.url); //nombre del objeto.atributo;

    $(".list-recipes").append(enlace);
    enlace.append(span);
    span.append(span2);
    span.append(span3);
    span3.append(span4);
    span3.append(span5);
    span5.append(span6);
    enlace.append(imagen);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
   

    if(activitiesArray.length > 0){
        $('.wrapper-message').hide();
    }

     _.each(activitiesArray, renderActivity);
    
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/





