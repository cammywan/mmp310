submit.onclick = function() {
    var submit = document.getElementById("submit");
    var name = document.getElementById("name");
    var adj1 = document.getElementById("adj1");
    var adj2 = document.getElementById("adj2");
    var color = document.getElementById("color");
    var clothes = document.getElementById("clothes");
    var country = document.getElementById("country");
    var noun = document.getElementById("noun");
    var adj3 = document.getElementById("adj3");
    var verb = document.getElementById("verb");
    var location = document.getElementById("location");
    var animal = document.getElementById("animal");
    message.innerText = "Disney is planning on making a brand new and modern Snow White movie, with a new Prince, named " + name.value + ". He is a " + adj1.value + " and " + adj2.value + " man, with " + color.value + " hair. He always wears " + clothes.value + ". And he is from " + country.value + " and loves " + noun.value + ". His motto is that life is too " + adj3.value + " to " + verb.value + " away. He met Snow White at " + location.value+ ". His spiritual animal is " + animal.value + "."; 
};
