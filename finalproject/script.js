
var animalApp = {};

animalApp.key = "560db1374341bd3400ea5ad76c1fa7a0";
animalApp.chooseAnimal= 'barnyard, bird, cat, dog, horse, reptile, smallfurry';
animalApp.chooseSex= 'Male, Female';
animalApp.location="";



animalApp.init = function(){

	animalApp.chooseAnimal = $('#pet').val();
	$('#pet').on('change', function(){
		animalApp.chooseAnimal = $(this).val();
		// animalApp.getPet(animalApp.chooseAnimal);

	});

	animalApp.chooseSize = $('#size').val();
	// animalApp.getPet(animalApp.chooseSize);
	$('#size').on('change', function(){
		animalApp.chooseSize = $(this).val();
		// console.log(pet);
		// animalApp.getPet(animalApp.chooseSize);
	});

    animalApp.chooseSex = $('#sex').val();
	// animalApp.getPet(animalApp.chooseSize);
	$('#sex').on('change', function(){
		animalApp.chooseSex = $(this).val();
		// console.log(pet);
		// animalApp.getPet(animalApp.chooseSize);
	});
    
    animalApp.location = $('#location').val();
	// animalApp.getPet(animalApp.chooseSize);
	$('#location').on('change', function(){
		animalApp.location = $(this).val();
		// console.log(pet);
		// animalApp.getPet(animalApp.chooseSize);
	});
    
 	$('#discoveranimal').on('click', function() {
 		animalApp.getPet();

	});

	// Init function to initialize ids

}



// Using smooth scroll to reach each new div 

$("#selectpet").on("change", function( e ) {
    
    e.preventDefault();

    $("html, body").animate({ 
        scrollTop: $('#selectsex').offset().top 
    }, 800);

	//$("html, body").animate({scrollTop: "1500px"});
    
});

$("#selectsex").on("change", function( e ) {
    
    e.preventDefault();

    $("html, body").animate({ 
        scrollTop: $('#selectsize').offset().top 
    }, 800);

	//$("html, body").animate({scrollTop: "1500px"});
    
});

$("#selectsize").on("change", function( e ) {
    
    e.preventDefault();

    $("html, body").animate({ 
        scrollTop: $('#inputlocation').offset().top 
    }, 800);

	//$("html, body").animate({scrollTop: "1500px"});
    
});

$("#inputlocation").on("change", function( e ) {
    
    e.preventDefault();

    $("html, body").animate({ 
        scrollTop: $('#petcontainer').offset().top 
    }, 800);

	//$("html, body").animate({scrollTop: "1500px"});
    
});

// contact ajax for the API info 

animalApp.getPet = function(){

	$.ajax({
		url:'http://api.petfinder.com/pet.getRandom',
		type: 'GET',
		data: {
			key: animalApp.key,
			format: "json",
			animal: animalApp.chooseAnimal,  
			size: animalApp.chooseSize,
            sex: animalApp.chooseSex,
            location: animalApp.location,
			output: "full"
		},
		dataType: 'jsonp',
		success: function(result){
			console.log(result.petfinder.pet);
			animalApp.displayPet(result.petfinder.pet);
		}

	});

}


	// Displaying the pet information 


animalApp.displayPet = function(data){

	$('#petcontainer').empty();

	var name = $('<h2>').text(data.name["$t"]);
	var image = $('<img>').attr('src', data.media.photos.photo[2].$t);
	var breed = $('<h3>').text(data.breeds.breed.$t);
	var sex = $('<h3>').text(data.sex["$t"]);
	var age = $('<h3>').text(data.age["$t"]);
	var description = $('<h3>').text(data.description["$t"]);
	var contact = $('<h4>').text(data.contact.email["$t"]);



	$('#petcontainer').append(name, image, breed, sex, age, description, contact);


}



$(function(){

	animalApp.init();

});