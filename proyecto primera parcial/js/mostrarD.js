document.getElementById("btnMostrarD").addEventListener("click", ()=>{
    let basem= JSON.parse(localStorage.getItem("miBDf"));
    let texto= "";
    let itelefono=require('./exportar');
    for(var i=0;i<bd.registros.lenght;i++)
        if(itelefono == bd.registros[i][2])
    basem.registros[i](element => {
        texto+=`
            <div class="card">
            <p> <em> Nombre: </em> ${element.nombre}</p>
            <p> <em> Email: </em> ${element.correo}</p>
            <p> <strong> Telefono: </strong>  ${element.telefono}</p>
            <p> <em> Deuda Total: </em> ${element.deudatotal}</p>
            <p> <em> Total Pagado: </em> ${element.pagadototal}</p>
            <p> <em> Deuda Restante: </em> ${element.deudarestante}</p>
            </div>
        `
    });
    document.getElementById("detalles").innerHTML = texto;
    console.log(texto);
    console.log(basem);
})