

//validaciones con expresiones regulares
const expresiones = {
    RazonSocialClient: /^[a-zA-Z0-9\ \-]{4,50}$/, // Letras, numeros, guion y guion_bajo
    NombreContacto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    direccion: /^[a-zA-ZÀ-ÿ0-9\s]{1,100}$/, // Letras y espacios, pueden llevar acentos.
    telefono: /^\d{11,14}$/, // 7 a 14 numeros.
    rut: /^[0-9]+-[0-9kK]{1}$/ //rut
}


const formulario = document.getElementById('formularioClientes');
const inputs = document.querySelectorAll('#formularioClientes input');
const validarFormulario = (e) => {
    switch (e.target.name) {
        case 'RazonSocialClient':
            validarCampo(expresiones.RazonSocialClient, e.target, 'RazonSocialClient', 'RazonSocialCliente');

            break;
        case 'RutClient':

            validarCampo(expresiones.rut, e.target, 'RutClient', 'RutCliente');

            break;
        case 'DireccionClient':
            validarCampo(expresiones.direccion, e.target, 'DireccionClient','DireccionCliente');

            break;
        case 'EmailClient':
            validarCampo(expresiones.correo, e.target, 'EmailClient','EmailCliente');

            break;
        case 'NumberClient':
            validarCampo(expresiones.telefono, e.target, 'NumberClient', 'NumberCliente');

            break;
        case 'NameContact':
            validarCampo(expresiones.RazonSocialClient, e.target, 'NameContact', 'NameContacto');

            break;
        case 'RutContact':
            validarCampo(expresiones.rut, e.target, 'RutContact', 'RutContacto');

            break;
        case 'DireccionContact':
            validarCampo(expresiones.direccion, e.target, 'DireccionContact','DireccionContacto');

            break;
        case 'EmailContact':
            validarCampo(expresiones.correo, e.target, 'EmailContact','EmailContacto');

            break;
        case 'NumberContact':
            validarCampo(expresiones.telefono, e.target, 'NumberContact', 'NumberContacto');

            break;

    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
});

formularioClientes.addEventListener('submit', (e) => {
    e.preventDefault();
});


const validarCampo = (expresion, input, campo, id) => {
    if (expresion.test(input.value)) {
        document.querySelector(`#${campo} i`).classList.remove('validacion-estado-incorrecto');
        document.querySelector(`#${campo} i`).classList.remove('validacion-estado-inactivo');
        document.querySelector(`#${campo} i`).classList.remove('fa-times-circle');
        document.getElementById(`${id}`).classList.remove('border-danger');
        document.getElementById(`${id}`).classList.add('border-success');
        document.querySelector(`#${campo} i`).classList.add('validacion-estado-correcto');
        document.querySelector(`#${campo} i`).classList.add('fa-check-circle');
    } else {
        document.querySelector(`#${campo} i`).classList.remove('validacion-estado-inactivo');
        document.getElementById(`${id}`).classList.add('border-danger');
        document.querySelector(`#${campo} i`).classList.remove('validacion-estado-correcto');
        document.querySelector(`#${campo} i`).classList.add('validacion-estado-incorrecto');
        document.querySelector(`#${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#${campo} i`).classList.add('fa-times-circle');
    }
}

//validaciones con js
function validarCliente() {
var razonSocial, rutCliente, direccionCliente, emailCliente, numeroCliente, nombreContacto, rutContacto, direccionContacto, emailContacto, numeroContacto;
razonSocial = document.getElementById('RazonSocialCliente').value;
rutCliente = document.getElementById('RutCliente').value;
direccionCliente = document.getElementById('DireccionCliente').value;
emailCliente = document.getElementById('EmailCliente').value;
numeroCliente = document.getElementById('NumberCliente').value;
nombreContacto = document.getElementById('NameContacto').value;
rutContacto = document.getElementById('RutContacto').value;
direccionContacto = document.getElementById('DireccionContacto').value;
emailContacto = document.getElementById('EmailContacto').value;
numeroContacto = document.getElementById('NumberContacto').value;

var errores = [];

if(razonSocial.trim() == ""){
    errores.push("Debe ingresar un Nombre para el cliente");
}

if(rutCliente.trim() == ""){
    errores.push("Debe ingresar un Rut para el cliente");
}

if(direccionCliente.trim() == ""){
    errores.push("Debe ingresar una direccion para el cliente");
}

if(emailCliente.trim() == ""){
    errores.push("Debe ingresar un email para el cliente")
}

if(numeroCliente.trim() == ""){
    errores.push("Debe ingresar un numero para el cliente");
}

if(nombreContacto.trim() == ""){
    errores.push("Debe ingresar un Nombre para el contacto");
}

if(rutContacto.trim() == ""){
    errores.push("Debe ingresar un Rut para el contacto");
}

if(direccionContacto.trim() == ""){
    errores.push("Debe ingresar una direccion para el contacto");
}

if(emailContacto.trim() == ""){
    errores.push("Debe ingresar un email para el contacto")
}

if(numeroContacto.trim() == ""){
    errores.push("Debe ingresar un numero para el contacto");
}

//mensaje de confirmacion o error
if (errores.length == 0){
    Swal.fire(
        'Cliente Añadido!',
        'Se ha guardado su cliente en su base de datos!',
        'success'
    )
}else{
    var mensaje = errores.join("<br/>");
    Swal.fire(
        'Errores de validación', 
        mensaje, 
        'warning');
}


}

