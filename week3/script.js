submit.onclick = function() {
    var answer1 = document.getElementById("a1");
    var answer2 = document.getElementById("a2");
    var answer3 = document.getElementById("a3");
    var rights=0;
    var wrongs=0;
    
    if (answer1.value=="Logan") { 
        rights = rights + 1; q1.innerText = "You are correct!";}
    else{
    wrongs= wrongs +1; q1.innerText= "Sorry, you are wrong.";}
    
    if (answer2.value=="It") { 
        rights = rights + 1;q2.innerText = "You are correct!";}
    else{
    wrongs= wrongs +1; q2.innerText= "Sorry, you are wrong.";}
    
    if (answer3.value=="Groot") { 
        rights = rights + 1;q3.innerText = "You are correct!";}
    else{
    wrongs= wrongs +1; q3.innerText= "Sorry, you are wrong.";}
    
    message.innerText = "You got " + rights +" question(s) right, and " + wrongs + " question(s) wrong."
};