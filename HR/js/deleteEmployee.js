window.onload = init;
var headers = {};
var url = "http://localhost:3000/employee/";
var id = localStorage.getItem('employeeId');

function init() {
    if(localStorage.getItem("token")){
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }

        document.querySelector('.exit').addEventListener('click', function() {
            localStorage.removeItem('employeeId');
            window.location.href = "allEmployees.html"
        });
        
        document.querySelector('.send').addEventListener('click',deleteEmployee);   

        loadDeleteEmployee();
    }else{
        window.location.href = "login.html";
    }
}

function loadDeleteEmployee() {
    axios.get(url + id, headers)
    .then(function(res){
        console.log(res);
        displayEmployee(res.data.message);

    }).catch(function(err){
        console.log(err);
    })
}

function displayEmployee(employee){
    document.getElementById('input-id').value = employee[0].employee_id;
    document.getElementById('input-name').value = employee[0].employee_name;
    document.getElementById('input-lastname').value = employee[0].employee_surnames;
    document.getElementById('input-phone').value = employee[0].employee_phone;
    document.getElementById('input-email').value = employee[0].employee_email;
    document.getElementById('input-address').value = employee[0].employee_address;
}


function deleteEmployee() {
    var id = document.getElementById('input-id').value;
    id = parseInt(id);
    var name = document.getElementById('input-name').value;
    var lastname = document.getElementById('input-lastname').value;
    var phone = document.getElementById('input-phone').value;
    var email = document.getElementById('input-email').value;
    var address = document.getElementById('input-address').value;

    axios({
        method: 'delete',
        url: 'http://localhost:3000/employee/eliminar',
        data: {
            mply_id: id
        },
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    }).then(function(res) {
        console.log(res);
        localStorage.removeItem('employeeId');
        alert("Empleado eliminado.");
        window.location.href = "allEmployees.html";
    }).catch(function(err){
        console.log(err);
    })
}