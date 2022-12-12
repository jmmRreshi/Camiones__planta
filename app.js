const container = document.querySelector("main");

let htmlDivs = "";

let mandigo = [
    {
        hola: "hdads",
        dominio: "htmld3",
        semi: "1",
        planta: "dasd",
        pesoSalida: "113kg",
        difPesada: "90",
        id: "1"
    },
    {
        hola: "segundo valor",
        dominio: "tu",
        semi: "dasd",
        planta: "dasd",
        pesoSalida: "113kg",
        difPesada: "90",
        id: "2"
    }
];

//let mandigoFiltrado = mandigo.filter(e => e.id=="dasd" );

/*let filtrado = document.addEventListener("keyup", e => {
    if (e.target.matches("#buscador")) {
        document.querySelectorAll(".formulario__planta").forEach(camion => {
            camion.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?camion.classList.remove("filtro")
                :camion.classList.add("filtro");
        })
    }

    console.log(e.target.value)
})*/

const buscador = document.querySelector("#buscador");
const arrayFiltrado = document.querySelector(".formulario__planta");

const filtrar = () => {
    arrayFiltrado.innerHTML = "";
    const texto = buscador.value.toLowerCase();
    for (let mandigos of mandigo) {
        let nombre = mandigos.hola.toLowerCase();
        if (nombre.indexOf(texto) !== -1) {
            arrayFiltrado.innerHTML += `
            <form class="formulario">
            <div class="formulario__planta" id="formulario__carga">
                <label for="">Plan de carga:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span">${mandigo.hola}</span>
                </div>
            </div>

            <div class="formulario__planta" id="formulario__tractor">
                <label for="">Dominio tractor:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span">${mandigo.dominio}</span>
                </div>
            </div>

            <div class="formulario__planta" id="formulario__semi">
                <label for="">Dominio Semi:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span">${mandigo.semi}</span>
                </div>
            </div>

            <div class="formulario__planta" id="formulario__peso__ingreso">
                <label for="">Peso Ingreso:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span">${mandigo.planta}</span>
                </div>
            </div>

            <div class="formulario__planta" id="formulario__peso__salida">
                <label for="">Peso Salida:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span">${mandigo.pesoSalida}</span>
                </div>
            </div>

            <div class="formulario__planta" id="formulario__dif__pesada">
                <label for="">Dif Pesada:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span">${mandigo.difPesada}</span>
                </div>
            </div>
        </form>
            `
        }
    }

    if(arrayFiltrado.innerHTML === ""){
        arrayFiltrado.innerHTML += `
        <li>No esta en planta....</li>
        `
    }
}

document.addEventListener("keyup", filtrar);

buscador.addEventListener("keyup", filtrar)

filtrar();


for (let i = 0; i < mandigo.length; i++) {
    htmlDivs += `
    <form class="formulario">
            <div class="formulario__planta" id="formulario__carga">
                <label for="">Plan de carga:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span">${mandigo[i].hola}</span>
                </div>
            </div>

            <div class="formulario__planta" id="formulario__tractor">
                <label for="">Dominio tractor:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span">${mandigo[i].dominio}</span>
                </div>
            </div>

            <div class="formulario__planta" id="formulario__semi">
                <label for="">Dominio Semi:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span">${mandigo[i].semi}</span>
                </div>
            </div>

            <div class="formulario__planta" id="formulario__peso__ingreso">
                <label for="">Peso Ingreso:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span">${mandigo[i].planta}</span>
                </div>
            </div>

            <div class="formulario__planta" id="formulario__peso__salida">
                <label for="">Peso Salida:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span">${mandigo[i].pesoSalida}</span>
                </div>
            </div>

            <div class="formulario__planta" id="formulario__dif__pesada">
                <label for="">Dif Pesada:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span">${mandigo[i].difPesada}</span>
                </div>
            </div>
        </form>


        <form class="formulario" id="formulario">
            <div class="formulario__planta">
                <label for="">Cliente:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span">asdads</span>
                </div>
            </div>

            <div class="formulario__planta">
                <label for="">Orden:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span"> asdasdasda</span>
                </div>
            </div>

            <div class="formulario__planta">
                <label for="">Transporte:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span"> adsasdasdasd</span>
                </div>
            </div>

            <div class="formulario__planta">
                <label for="">Chofer:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span">asdasd</span>
                </div>
            </div>

            <div class="formulario__planta">
                <label for="">DNI:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span">asdadasdasd</span>
                </div>
            </div>

            <div class="formulario__planta">
                <label for="">Camion:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span">asdda</span>
                </div>
            </div>

            <div class="formulario__planta">
                <label for="">Año:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span"></span>
                </div>
            </div>

            <div class="formulario__planta">
                <label for="">Semi:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span"></span>
                </div>
            </div>

            <div class="formulario__planta">
                <label for="">Año:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span"></span>
                </div>
            </div>
        </form>

        <form class="formulario" id="formulario">
            <div class="formulario__planta">
                <label for="">Llegada Porteria:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span"></span>
                </div>
            </div>

            <div class="formulario__planta">
                <label for="">Ingreso Planta:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span"></span>
                </div>
            </div>

            <div class="formulario__planta">
                <label for="">Pesada Ingreso:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span"></span>
                </div>
            </div>

            <div class="formulario__planta">
                <label for="">Pesada Salida:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span"></span>
                </div>
            </div>

            <div class="formulario__planta">
                <label for="">Salida Planta:</label>
                <div class="formulario__span">
                    <span type="text" class="formulario__span" name="span"></span>
                </div>
            </div>
        </form>
        
        <div style=" font-family: 'Courier New', Courier, monospace;
        background: linear-gradient(120deg, #6c3483, #58d68D);
        height: 1vh";>
        <br>
        </div>
    `
    container.innerHTML = htmlDivs;
}


