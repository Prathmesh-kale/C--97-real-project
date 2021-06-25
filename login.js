function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name" , user_name);

    if(user_name == "")
    {
        document.getElementById("user_name").innerHTML = "Password is necessary";
    }
    else{
        window.location = "suzuki.html";
    }
}



