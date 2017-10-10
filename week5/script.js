submit.onclick = function() {
    var keyword = document.getElementById("keyword");
    var length = document.getElementById("length");
    var chars = "abcdefghijklmnopqrstuvwxyz1234567890";
    var suffix="";
    
    var a = Math.floor(Math.random() * chars.length);
   
    for (var i = 0; i<= keyword.length; i++){
        if (i%2 == 0){
            keyword[i]=keyword.toUpperCase[i];
        }
        else {
            keyword[i]=keyword.toLowerCase[i]; 
        }
    }
    return keyword;
    

    for (var i = 0; i<= Number(length) - keyword.length; i++){
        suffix += chars[a+i];
    }
    return suffix;
    
    password.innerText =keyword + suffix;
    
     
    
};