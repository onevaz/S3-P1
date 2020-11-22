document.getElementById("btnMostrar").addEventListener("click", ()=>{
    let basem= JSON.parse(localStorage.getItem("miBDf"));
    let texto= "";
    basem.registros.forEach(element => {
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