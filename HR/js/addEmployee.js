window.onload = init;
var headers = {};

function init() {
    if(localStorage.getItem("token")){
        document.querySelector('.exit').addEventListener('click', function() {
            window.location.href = "allEmployees.html"
        });
        
        document.querySelector('.send').addEventListener('click',addEmployee);   
        console.log("prueba")
    }else{
        window.location.href = "login.html";
    }
}

function addEmployee() {
    var name = document.getElementById('input-name').value;
    var lastname = document.getElementById('input-lastname').value;
    var phone = document.getElementById('input-phone').value;
    var email = document.getElementById('input-email').value;
    var address = document.getElementById('input-address').value;

    console.log(name, lastname, phone, email, address);

    axios({
        method: 'post',
        url: 'http://localhost:3000/employee/alta',
        data: {
            mply_name: name,
            mply_lastname: lastname,
            mply_phone: phone,
            mply_mail: email,
            mply_address: address
        },headers: {
                'Authorization': "Bearer " + localStorage.getItem("token")
            }
    }).then(function(res) {
        console.log(res);
        alert("Registro exitoso");
        window.location.href = "allEmployees.html";
    }).catch(function(err){
        console.log(err);
    })
}