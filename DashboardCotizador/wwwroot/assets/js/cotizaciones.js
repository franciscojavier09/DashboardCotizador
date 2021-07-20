function agregarFila() {

    var item = document.getElementById("item").textContent;
    var nuevoid = 1 + parseInt(item,Int32Array)

    document.getElementById("tablaCotizaciones").insertRow(-1).innerHTML += 

    `<th scope="row" id="item">${nuevoid}</th>
    <td>
        <div class="form-group row">
          <div class="col-sm-12 mb-3 mb-sm-0">
              <input type="number" class="form-control form-control-user" id="Nombre"
                 placeholder="Codigo Producto">
          </div>
        </div>    
    </td>
    <td>
        <div class="form-group row">
            <div class="col-sm-12 mb-3 mb-sm-0">
               <input type="text" class="form-control form-control-user" id="Nombre"
                  placeholder="Producto o servicio">
         </div>
        </div>
    </td>
    <td>
       <div class="form-group row">
          <div class="col-sm-12 mb-3 mb-sm-0">
               <input type="number" class="form-control form-control-user" id="Nombre"
                    placeholder="Precio">
            </div>
        </div>    


    </td>
    <td>
        <div class="form-group row">
            <div class="col-sm-12 mb-3 mb-sm-0">
                <input type="number" class="form-control form-control-user" id="Nombre"
                    placeholder="Cantidad">
            </div>
        </div>
    </td>
    <td>
        <div class="form-group row">
            <div class="col-sm-12 mb-3 mb-sm-0">
                <input type="number" class="form-control form-control-user" id="Nombre"
                    placeholder="Cantidad">
            </div>
        </div>
    </td>
    <td>
        <div class="form-group row">
            <div class="col-sm-12 mb-3 mb-sm-0">
                <input type="number" class="form-control form-control-user" id="Nombre"
                    placeholder="Cantidad">
            </div>
        </div>
    </td>
    <td style="text-align: center;">
    <div style="padding-top: 12px;">
        <button type="button" class="btn btn-outline-danger btn-circle btn-sm" onclick="eliminarFila()" ><i class="fas fa-trash"></i></button>

        </div>
    </td>`;
}


function eliminarFila() {
    var table = document.getElementById("tablaCotizaciones");
    var rowCount = table.rows.length;
    //console.log(rowCount);

    if (rowCount <= 1)
        alert('No se puede eliminar el encabezado');
    else
        table.deleteRow(rowCount - 1);
}

function eliminarCoti() {

    Swal.fire({
        title: 'Desea eliminar esta cotizacion?',
        text: "No podra volver a recuperarla!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, Eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Eliminado!',
            'Su Cotizacion ha sido eliminada.',
            'success'
          )
        }
      })
}