
const formularioProductos = document.getElementById('formularioProductos');

function validarProductos() {
    var CodigoProducto, ReferenciaProducto, DescripcionProducto, Tipo, PrecioProducto;

    CodigoProducto = document.getElementById('CodigoProducto').value;
    ReferenciaProducto = document.getElementById('ReferenciaProducto').value;
    DescripcionProducto = document.getElementById('DescripcionProducto').value;
    PrecioProducto = document.getElementById('PrecioProducto').value;
    Tipo = document.getElementById('Tipo').selected;
   
    
    var errores = [];
    
    if(CodigoProducto.trim() == ""){
        errores.push("Debe ingresar codigo de producto");
    }
        
    if(DescripcionProducto.trim() == ""){
        errores.push("Debe ingresar una descripcion del producto");
    }
    
    if(PrecioProducto.trim() == "" || PrecioProducto <0){
        errores.push("Debe ingresar un precio mayor o igual que 0")
    }
    
    if(Tipo == "Tipo.."){
        errores.push("Debe seleccionar un tipo")
    }
    
    //mensaje de confirmacion o error
    if (errores.length == 0){
        Swal.fire(
            'Producto añadido!',
            'Se ha guardado el producto en su base de datos',
            'success'
            
        )
        //formularioProductos.submit();
    }else{
        var mensaje = errores.join("<br/>");
        Swal.fire(
            'Errores de validación', 
            mensaje, 
            'warning');
    }
    
    
    }

    function eliminarProducto() {

        Swal.fire({
            title: 'Desea eliminar este Producto?',
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
                'Su Producto ha sido eliminado.',
                'success'
              )
            }
          })
    }