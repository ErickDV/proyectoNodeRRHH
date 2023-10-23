window.onload = init;
var headers = {};
var url = "http://localhost:3000/employee/";
var id = 1;

function init() {
    if(localStorage.getItem("token")){
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }

        document.querySelector('.exit').addEventListener('click', function() {
            window.location.href = "allEmployees.html"
        });
        
        document.querySelector('.send').addEventListener('click',updateEmployee);   

        loadUpdateEmployee();
    }else{
        window.location.href = "login.html";
    }
}

function loadUpdateEmployee() {
    axios.get(url + id, headers)
    .then(function(res){
        console.log(res);
        displayEmployee(res.data.message);

    }).catch(function(err){
        console.log(err);
    })
}

function displayEmployee(employee){
    console.log(employee)
    document.getElementById('input-id').value = employee[0].employee_id;
    document.getElementById('input-name').value = employee[0].employee_name;
    document.getElementById('input-lastname').value = employee[0].employee_surnames;
    document.getElementById('input-phone').value = employee[0].employee_phone;
    document.getElementById('input-email').value = employee[0].employee_email;
    document.getElementById('input-address').value = employee[0].employee_address;
}


function updateEmployee() {
    var id = document.getElementById('input-id').value;
    id = parseInt(id);
    var name = document.getElementById('input-name').value;
    var lastname = document.getElementById('input-lastname').value;
    var phone = document.getElementById('input-phone').value;
    var email = document.getElementById('input-email').value;
    var address = document.getElementById('input-address').value;

    console.log(id, name, lastname, phone, email, address);

    axios({
        method: 'patch',
        url: 'http://localhost:3000/employee/modificar',
        data: {
            mply_id: id,
            mply_name: name,
            mply_lastname: lastname,
            mply_phone: phone,
            mply_mail: email,
            mply_address: address
        },
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    }).then(function(res) {
        console.log(res);
        alert("Modificación exitosa");
        window.location.href = "allEmployees.html";
    }).catch(function(err){
        console.log(err);
    })
}