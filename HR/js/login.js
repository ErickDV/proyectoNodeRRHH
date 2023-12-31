window.onload = init;

function init() {
    document.querySelector('.btn-primary').addEventListener('click',login);
}

function login() {
    var mail = document.getElementById('input-mail').value;
    var pass = document.getElementById('input-password').value;

    axios({
        method: 'post',
        url: 'http://localhost:3000/user/login',
        data: {
            user_mail: mail,
            user_password: pass
        }
    }).then(function(res) {
        if(res.data.code === 200){
            //alert("Inicio exitoso.")
            localStorage.setItem("token", res.data.message);
            window.location.href = "allEmployees.html";
        }
        else{
            alert("Usuario y/o contraseña incorrectos.")
        }
    }).catch(function(err){
        console.log(err);
    })
}