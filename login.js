class User {
    constructor(username,password){
        this.user=username;
        this.pw=password;
    }
}

var userList=[]

function isUsername(username){
    var len=userList.length;
    for (i=0;i<len;i++){
        if (userList[i].user==username){
            return true;
        }
    }
    return false;
}

function test(){
    var username=document.getElementById("user");
    var pw=document.getElementById("pw");
    var pw2=document.getElementById("pw2");
    var par=document.getElementById("p");
    if (!isUsername(username.value)){
        if (pw.value!="" && username.value!=""){
            if(pw.value==pw2.value){
                par.innerHTML="o user " + username.value + " foi criado!!!";
                var user= new User(username.value,pw.value);
                userList=addUser(user)
            }
            else{
                par.innerHTML="passwords nao correspondem";
            }
        }
        else if(pw.value=="") 
            par.innerHTML="introduza uma password";
        else
            par.innerHTML="introduza um username";
    }
    else{
        par.innerHTML="username ja existe";
    }
}

function addUser(user){ 
    userList.push(user);
    return userList
}

function isUser(user){
    var len=userList.length;
    for (i=0;i<len;i++){
        if (user.pw==userList[i].pw && user.user==userList[i].user){
            return true;
        }
    return false;
    }
}

function login(){
    var par= document.getElementById("p2");
    if (userList.length==0)
        par.innerHTML="Nao existem users criados"
    else{
        var username = document.getElementById("userl");
        var pw = document.getElementById("pwl");   
        var user = new User(username.value,pw.value);
        if (isUser(user)){
            par.innerHTML="Login sucedido";
            var captcha=document.getElementById("item3");
            captcha.style.display="unset";
        }
        else{
            par.innerHTML="Dados incorretos";
            var captcha=document.getElementById("item3");
            captcha.style.display="none";
        }
    }
}

function captcha(){
    var inp=document.getElementById("captcha");
    var par=document.getElementById("p3");
    var link=document.getElementById("link");
    if (inp.value!=100){
        par.innerHTML="Bot identificado"
    }
    else{
        par.innerHTML="Ir para pagina principal:"
        link.href="index.html";
        link.innerHTML="main page";
    }
}