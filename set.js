function back()
{
    window.location="suzuki.html";
}

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = user_name + "<span><img id='tick' src = 'tick.png'></span>"
