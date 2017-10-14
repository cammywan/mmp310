submit.onclick = function() {
    var keyword = document.getElementById("keyword").value;
    var length = document.getElementById("length");
    var chars = "abcdefghijklmnopqrstuvwxyz1234567890";
    var suffix="";
    
    var a = Math.floor(Math.random() * 28);
   
    for (var i = 0; i<= keyword.length; i++){
        if (i%2 == 0){
            keyword[i]=keyword.toUpperCase[i]; // change even numbers characters of keyword to upper case
        }
        else {
            keyword[i]=keyword.toLowerCase[i]; // change odd numbers characters of keyword to lower case
        }
    }
    

    for (var i = 0; i<= Number(length) - keyword.length; i++){
        suffix += chars[a+i];
    }
 // suffix is starting from a random char of chars and with a certain number of characters in a row
    
    password.innerText =keyword + suffix;
    
     
    
};
