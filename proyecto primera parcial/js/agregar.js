document.getElementById("btnAgregar").addEventListener("click",()=>{
    let itelefono=document.getElementById("itelefono").value;
    let fecha=document.getElementById("fecha").value;
    let basem= JSON.parse(localStorage.getItem("miBDf"));
    basem.registros.forEach(element => {
        if(element.telefono==itelefono){
        element.nombre=nombre;
        element.correo=correo;
        element.telefono=telefono;
        element.contraseña=contraseña;
        element.deudatotal=deudatotal+document.getElementById("deuda").value;
        element.pagadototal=pagadototal+document.getElementById("pago").value;
        element.deudarestante=deudatotal-pagadototal;
        
     
        localStorage.setItem("miBDf",JSON.stringify(bd));
        console.log("guardado" + bd);
        }  
    })
})
