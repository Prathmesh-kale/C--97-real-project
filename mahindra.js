

function BackT()
{
    window.location = "tata.html";
}

function logout()
    {
        localStorage.removeItem("user_name");

        window.location.replace("index.html");
    }