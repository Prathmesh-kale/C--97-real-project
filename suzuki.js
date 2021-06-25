var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();



user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "You are honourly welcome in Car-Choose dear " + user_name + "!!";

function logout()
{
    localStorage.removeItem("user_name");

    window.location.replace("index.html");
}

function NextH()
{
    window.location = "hyundai.html";
}

function set()
{
    window.location = "set.html";
}

speak();


function speak() 
{
    var synth = window.speechSynthesis;

    speak_data = "Hello you are welcome dear" + user_name + "in car choose here you can find the best cars from best companies";
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    
    
}

