let create=document.querySelector(".createacc");
let signin=document.querySelector(".signin");
let login=document.querySelector(".login");
let overlay=document.querySelector(".overlay");
let close=document.querySelector(".close");
let loginbutton=document.querySelector("#logInButton");
signin.addEventListener("click",function(){
    login.classList.remove("hidden");
    overlay.classList.remove("hidden");
});

overlay.addEventListener("click",function(){
    login.classList.add("hidden");
    overlay.classList.add("hidden");
});


close.addEventListener("click",function(){
    login.classList.add("hidden");
    overlay.classList.add("hidden");
});

loginbutton.addEventListener("click",()=>{
    let email=document.querySelector("#text");
    let password=document.querySelector("#password");
    if(email.value=="himmu" && password.value=="abc")
    {
        window.location.assign("about.html");
        alert("LOGIN SUCCESSFULL");
    }
    else{
        alert("Invalid login!!!");
    }
});