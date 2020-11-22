//let bd = JSON.parse(localStorage.getItem("miBDf"));
 
//if(!bd || bd == undefined){
    let bd={ registros: [] }
//}
 
document.getElementById("btnRegistrar").addEventListener("click",()=>{
    let nombre=document.getElementById("nombre").value;
    let correo=document.getElementById("correo").value;
    let telefono=document.getElementById("telefono").value;
    let contraseña=document.getElementById("contraseña").value;
    let deudatotal=0;
    let pagadototal=0;
    let deudarestante=0;
    let deudor=new Usuario(nombre,correo,telefono,contraseña,deudatotal,pagadototal,deudarestante);
    
    bd.registros.push(deudor);
 
    localStorage.setItem("miBDf",JSON.stringify(bd));
    console.log("guardado" + bd);
})

