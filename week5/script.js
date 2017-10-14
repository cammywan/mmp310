submit.onclick = function() {
    var keyword = document.getElementById("keyword").value;
    var length = document.getElementById("length").value;
    var chars = "abcdefghijklmnopqrstuvwxyz1234567890";
    var suffix="";
    var str="";
    
    var a = Math.floor(Math.random() * 28);
   
    for (var i = 0; i<= keyword.length-1; i++){
        if (i%2 == 0){
           str += keyword.charAt(i).toUpperCase(); // change odd numbers characters of keyword to upper case
        
        }
        else {
           str +=  keyword.charAt(i).toLowerCase(); // change even numbers characters of keyword to lower case
           
        }
    }
    

    for (var i = 0; i<= Number(length) - keyword.length-1; i++){
        suffix += chars[a+i];
    }
 // suffix is starting from a random char of chars and with a certain number of characters in a row
    console.log(keyword);
    console.log(length);
    password.innerText =str + suffix;
    
     
    
};