

var alumno = null;
let horaLogin = "";
var respuesta = 0;


function login() {

    var email = document.getElementById('Email').value;
    var pass = document.getElementById('Password').value;
    var datos;
    datos = $.ajax({
        type: "GET",
        url: "https://www.codigo-alfa.cl/api/setLogin/",
        data: { "mail": email, "pass": pass },
        dataType: "json",
        success: function (data) {

            console.log(data)

            if (data.respuesta) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'tu usuario o contraseña son incorrectos',

                })
            } else {
                
                Swal.fire(
                    'Bienvenido!"',
                    'Ha ingresado con exito',
                    'success'
                )


            }
        }


    });




}



