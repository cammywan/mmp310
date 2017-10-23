submit.onclick = function() {
    var answer = {
        one:"Logan",
        two:"It",
        three:"Groot",
        correct: "You are correct!",
        wrong: "Sorry, you are wrong."
    };
    var userAnsewer = {
        one: document.getElementById("a1"),
        two: document.getElementById("a2"),
        three: document.getElementById("a3")
    };
    
    var rights=0;
    var wrongs=0;
    
    if (userAnsewer.one.value==answer.one) { 
        rights = rights + 1; q1.innerText = answer.correct;}
    else{
    wrongs= wrongs +1; q1.innerText= answer.wrong;}
    
    if (userAnsewer.two.value==answer.two) { 
        rights = rights + 1;q2.innerText = answer.correct;}
    else{
    wrongs= wrongs +1; q2.innerText= answer.wrong;}
    
    if (userAnsewer.three.value==answer.three) { 
        rights = rights + 1;q3.innerText = answer.correct;}
    else{
    wrongs= wrongs +1; q3.innerText= answer.wrong;}
    
    message.innerText = "You got " + rights +" question(s) right, and " + wrongs + " question(s) wrong."
};