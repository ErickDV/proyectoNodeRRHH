window.onload = init;
var headers = {};
var url = "http://localhost:3000/employee/";

function init(){
    if(localStorage.getItem("token")){
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }

        document.querySelector('.add').addEventListener('click', function() {
            window.location.href = "addEmployee.html"
        });

        document.querySelector('.exit').addEventListener('click', function() {
            window.location.href = "index.html"
        });

        document.getElementById('search-button').addEventListener('click', function() {
            var name = document.getElementById('search-name').value;
            axios({
                method: 'get',
                url: url + 'buscar',
                params: {
                    mply_name: name
                },
                headers: {
                    'Authorization': "Bearer " + localStorage.getItem("token")
                }
            }).then(function(res) {
                console.log(res);
                displayEmployees(res.data.message);
            }).catch(function(err){
                console.log(err);
            })
        });
        

        loadEmployees();
    }else{
        window.location.href = "index.html";
    }
}

function loadEmployees() {
    axios.get(url, headers)
    .then(function(res) {
        console.log(res);
        displayEmployees(res.data.message);
    }).catch(function(err) {
        console.log(err);
    })
}

function displayEmployees(mply){
    var table = document.querySelector("table");
    table.innerHTML = ""; // Borra el contenido de la tabla
    console.log(mply);
    for(var i = 0; i < mply.length; i++){
        table.innerHTML += `
        <tr>
            <td>${mply[i].employee_id}</td>
            <td>${mply[i].employee_name}</td>
            <td>${mply[i].employee_surnames}</td>
            <td>${mply[i].employee_phone}</td>
            <td>${mply[i].employee_email}</td>
            <td>${mply[i].employee_address}</td>
            <td>
                <div class="centerBTN">
                    <div class="btn-block">
                        <button class="update" onclick="localStorage.setItem('employeeId', '${mply[i].employee_id}'); window.location.href='updateEmployee.html'">Editar</button>
                    </div>
                    <div class="btn-block">
                    <button class="delete" onclick="localStorage.setItem('employeeId', '${mply[i].employee_id}'); window.location.href='deleteEmployee.html'">Eliminar</button>
                    </div>
                </div>
            </td>
        </tr>`
    }
}
