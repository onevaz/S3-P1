document.getElementById("btnIniciar").addEventListener("click",()=>{
    var itelefono=document.getElementById("itelefono").value;
    var icontraseña=document.getElementById("icontraseña").value;
    bd = JSON.parse(localStorage.getItem("miBDf"));
    
    if(itelefono==null || icontraseña==null){
        console.log("necesita ingresar los datos completos");
     }
     else{
    for(var i=0;i<bd.registros.lenght;i++)
        if(itelefono == bd.registros[i][2])
            if(icontraseña == bd.registros[i][3])
            {
                function exportar(){
                    itelefono;
                }
                module.exports = exportar;
                bd.login.is = true;
                localStorage["bd"] = JSON.stringify(bd);
                bd.login.userindex = i;
                bd.login.type=bd.usuarios[i].tipo;
                location.replace("vistadeudor.html");
            }
            if(itelefono == "admin")
                if(icontraseña == "admin"){
                location.replace("vistaadmin.html")
            }
            localStorage["miBDf"] = JSON.stringify(bd);
        if(bd.login==false)
            alert("Usuario y/o clave invalida, revise sus datos.");
    }
});