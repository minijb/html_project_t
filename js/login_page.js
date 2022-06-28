$(function() {
    $("#close_win").on("click",function(){
        parent.document.getElementById("shade").classList.add("hide");
        parent.document.getElementById("page").classList.add("hide");
    });

    $('#button1').on("click",function(){
        let username = $("#username").val();
        let password = $("#password").val();
        let alert_string ="";
        if(username == ""){
            alert_string += "请输入用户名!";
        }
        if(password==""){
            if(alert_string!="") alert_string += "\n";
            alert_string += "请填写密码!";
        }
        if(alert_string.length!=0){
            window.alert(alert_string);
        }else{
            let user_flag = 0;
            let pass_flag = 0;
            if(username=="jonny") user_flag=1;
            if(password=="1234") pass_flag=1;
            if(user_flag==0 && pass_flag==0){
                window.alert("用户名和密码错误!");
            }else if(user_flag==0){
                window.alert("用户名错误!");
            }else if(pass_flag==0){
                window.alert("密码错误!");
            }else{
                sessionStorage.setItem("log_status",username);
                let item = parent.document.getElementById("login_name");
                item.innerText = username;
                parent.document.getElementById("shade").classList.add("hide");
                parent.document.getElementById("page").classList.add("hide");
            }
        }
        
    });

    $("#button1").mouseover(function(){
        $(this).attr("class","button1_ch");
    });
    $("#button1").mouseout(function(){
        $(this).attr("class","button1");
    });
    $("#button2").mouseover(function(){
        $(this).attr("class","button2_ch");
    });
    $("#button2").mouseout(function(){
        $(this).attr("class","button2");
    });





});
