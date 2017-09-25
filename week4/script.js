submit.onclick = function() {
    var answerAll = ["It is certain.","It is decidedly so.","Without a doubt.","Yes definitely","You may rely on it.","As I see it, yes.","Most likely.","Outlook good.","Hell yeah.","I think so.","Of course, yes.","Wake me up later.","My processor is not funtioning now.","Stop bothering me, I am busy!","Better not tell you now.","I can tell you later.","I am having a brain freeze.","Have a guess.","What do you think?","Don't count on it.","I don't think so.","My processor says no.","No.","Not really.","Highly doubtful.","Hell no."];
    var noInput = ["That is a blank, not a question.","Don't miss the input box.","You didn't type in anything, did you?","You can't think of a question right now?","I am not a mind reader, so pease type in your question."];
    var question = document.getElementById("question");
    var a = Math.floor(Math.random()*answerAll.length);
    var b = Math.floor(Math.random()*noInput.length);
    
    if (question.value=="") { 
        answer.innerText = noInput[b];}
    else{
    answer.innerText = answerAll[a];}
    
    
};