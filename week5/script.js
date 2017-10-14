submit.onclick = function() {
    var keyword = document.getElementById("keyword").value;
    var length = document.getElementById("length").value;
    var chars = "abcdefghijklmnopqrstuvwxyz1234567890";
    var suffix="";
    
    
    var a = Math.floor(Math.random() * 28);
   
    for (var i = 0; i<= keyword.length-1; i++){
        if (i%2 == 0){
            keyword[i] = keyword[i].toUpperCase(); // change odd numbers characters of keyword to upper case
            console.log(keyword[i]);
        }
        else {
            keyword[i] = keyword[i].toLowerCase();; // change even numbers characters of keyword to lower case
            console.log(keyword[i]);
        }
    }
    

    for (var i = 0; i<= Number(length) - keyword.length; i++){
        suffix += chars[a+i];
    }
 // suffix is starting from a random char of chars and with a certain number of characters in a row
    console.log(keyword);
    console.log(length);
    password.innerText =keyword + suffix;
    
     
    
};