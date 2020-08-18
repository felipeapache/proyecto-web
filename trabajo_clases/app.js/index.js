//var nombre=Document.getElementById("usuario")
//var contraseña=Document.getElementById("contraseña")

//function enviar (){
//       alert(FELICIDADES)
//return false  console.log("enviar")
 //   return false//
//}


function login (){
    var mensaje = document.getElementById('mensaje')
    var usuario= document.getElementById('usuario');
    var contraseña= document.getElementById('contraseña')
    console.log(usuario.value + "  " + contraseña.value)

    if(usuario.value == "admin" && contraseña.value == "admin")
    {
        //mensaje.innerHTML=" LOGUEADO "
        location.href="principal.html"
           
            
    }
    else
    {
        if(usuario < "admin" && "contraseña")
        alert("USUARIO Y CONTRASEÑA INCORRECTOS")
        return  false

        //mensaje.innerHTML=" NO LOGUEADO " 
       // alert(USUARIO Y CONTRASEÑA INCORRECTOS);
    }
}