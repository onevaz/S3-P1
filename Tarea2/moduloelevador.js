//PuertaE=0 es que esta abierta
var PisosT=7,PisoA=7,PisoD=5,Puerta=0;
        //Bajar Piso
        function BajarP() {
            PisoA--;
        }
        //Subir Piso
        function SubirP() {
            PisoA++;
        }
        //CerrarPuerta 
        function CerrarP() {
            Puerta=1;
            console.log("Puerta Cerrada");
        }  
        //AbrirPuerta 
        function AbrirP() {
            Puerta=0;
            console.log("Se llego al Piso Destino",PisoA);
            console.log("Puerta Abierta");
            Puerta=1;
        }
const DPiso = function () {          
if (PisoD<=PisosT && PisoD>=0){
    if (PisoA>PisoD){
        CerrarP();
            while(PisoA>PisoD){ 
                console.log("Piso Actual",PisoA);  
                BajarP();
            }
        }
        return AbrirP();
    }

    if (PisoA<PisoD){
        CerrarP();
            while(PisoA<PisoD){  
                console.log("Piso Actual",PisoA) 
                SubirP();
            }
        return AbrirP();
    }
}
module.exports = DPiso;
   