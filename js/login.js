
$(document).ready(function(){
    let win;
    $(".login_button").on("click",function(){
        document.getElementById("shade").classList.remove("hide");
        document.getElementById("page").classList.remove("hide");
    })
    

})

let login_status = sessionStorage.getItem("log_status");
if (login_status==null){
    sessionStorage.setItem("log_status","0");
    login_status = "0"
}
console.log(login_status)
if(login_status!="0"){
    document.getElementById("login_name").innerText  = login_status;
}

