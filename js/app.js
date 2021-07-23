// Varibles 
const resultado = document.querySelector("#resultado");

const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color")


const MaxYear = new Date().getFullYear();
const MinYear = MaxYear - 10;


const SelectBusqueda = {
    marca:"",
    year:"",
    minimo:"",
    maximo:"",
    puertas:"",
    transmision:"",
    color:""
}
// Eventos 

document.addEventListener("DOMContentLoaded", ()=> {
    // Muestra en el HTML los Autos desde un simulador de bases de datos
    MostrarAutos(autos);

    //Llena el select

    LLenarSelect();
});

marca.addEventListener("change", e => {
    SelectBusqueda.marca = e.target.value;
    FiltrarAuto();
});
year.addEventListener("change", e => {
    SelectBusqueda.year = parseInt(e.target.value);
    FiltrarAuto();
});
minimo.addEventListener("change", e => {
    SelectBusqueda.minimo = e.target.value;
    FiltrarAuto();
});
maximo.addEventListener("change", e => {
    SelectBusqueda.maximo = e.target.value;
    FiltrarAuto();
});
puertas.addEventListener("change", e => {
    SelectBusqueda.puertas = parseInt(e.target.value);
    FiltrarAuto();
});
transmision.addEventListener("change", e => {
    SelectBusqueda.transmision = e.target.value;
    FiltrarAuto();
});
color.addEventListener("change", e => {
    SelectBusqueda.color = e.target.value;
    FiltrarAuto();
});


// Funciones

function MostrarAutos (autos) {

    LimpiarHTML();

    autos.forEach( auto => {
        const autosHTML = document.createElement("p");
        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        autosHTML.textContent = `
            Auto: ${marca} - Modelo: ${modelo} - Año: ${year} - Precio: ${precio} - Puertas: ${puertas} - Color: ${color} - Transmision: ${transmision}
        `;
        resultado.appendChild(autosHTML);
    })
}
// Limpia el HTML

function LimpiarHTML () {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

// llena los años del Select

function LLenarSelect() {
    for (let i = MaxYear  ; i >= MinYear - 1 ; i-- ){
        const option = document.createElement("option");
        option.value = i;
        option.textContent= i;
        year.appendChild(option);
    }
}


//Filtrado

function FiltrarAuto() {
    const resultado = autos.filter( FiltrarMarca).filter(FiltrarYear).filter(FiltrarMinimo).filter(FiltrarMaximo).filter(FiltrarPuertas).filter(FiltrarTransmision).filter(FiltrarColor);
    if (resultado.length) {
        MostrarAutos(resultado);
    } else {
        SinResultado();
    }
}
function SinResultado () {
    LimpiarHTML();
    const mensaje = document.createElement("DIV");
    mensaje.classList.add("alerta","error");
    mensaje.textContent="Sin Resultados";
    resultado.appendChild(mensaje);
}

function FiltrarMarca (auto) {
    const {marca} = SelectBusqueda;
    if (marca){
        return auto.marca === marca;
    }
    return auto;

}

function FiltrarYear ( auto ) {
    const {year} = SelectBusqueda;
    if (year) {
        return auto.year === year;
    }
    return auto;
}

function FiltrarMinimo ( auto ) {
    const {minimo} = SelectBusqueda;
    if (minimo) {
        return auto.precio >= minimo;
    }
    return auto;
}

function FiltrarMinimo ( auto ) {
    const {minimo} = SelectBusqueda;
    if (minimo) {
        return auto.precio >= minimo;
    }
    return auto;
}

function FiltrarMaximo ( auto ) {
    const {maximo} = SelectBusqueda;
    if (maximo) {
        return auto.precio <= maximo;
    }
    return auto;
}

function FiltrarPuertas ( auto ) {
    const {puertas} = SelectBusqueda;
    if (puertas) {
        return auto.puertas === puertas;
    }
    return auto;
}

function FiltrarTransmision ( auto ) {
    const {transmision} = SelectBusqueda;
    if (transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}

function FiltrarColor ( auto ) {
    const {color} = SelectBusqueda;
    if (color) {
        return auto.color === color;
    }
    return auto;
}