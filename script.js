let estrellasDescubiertas = 0;

const estrellas = [];

const estrellasFinal = [];


const sky = document.getElementById("sky");

const popup = document.getElementById("popup");
const titulo = document.getElementById("titulo");
const mensaje = document.getElementById("mensaje");
const cerrar = document.getElementById("cerrar");

const foto = document.getElementById("foto");

const posicionesFinal = [

    // ===== T =====
    {x:28,y:20},
    {x:32,y:20},
    {x:36,y:20},
    {x:40,y:20},
    {x:44,y:20},

    {x:36,y:24},
    {x:36,y:28},
    {x:36,y:32},
    {x:36,y:36},

    // ===== E =====
    {x:56,y:20},
    {x:60,y:20},
    {x:64,y:20},

    {x:56,y:24},

    {x:56,y:28},
    {x:60,y:28},
    {x:64,y:28},

    {x:56,y:32},

    {x:56,y:36},
    {x:60,y:36},
    {x:64,y:36},

    // ===== A =====
{x:22,y:60},

{x:20,y:56},
{x:24,y:56},

{x:18,y:52},
{x:26,y:52},

{x:16,y:48},
{x:28,y:48},

{x:18,y:44},
{x:26,y:44},

{x:20,y:52},
{x:22,y:52},
{x:24,y:52},

    // ===== M =====
    {x:42,y:56},
    {x:42,y:52},
    {x:42,y:48},
    {x:42,y:44},

    {x:46,y:48},
    {x:50,y:52},
    {x:54,y:48},

    {x:58,y:44},
    {x:58,y:48},
    {x:58,y:52},
    {x:58,y:56},

    // ===== O =====
    {x:74,y:46},
    {x:78,y:44},
    {x:82,y:44},
    {x:86,y:46},

    {x:74,y:52},
    {x:86,y:52},

    {x:74,y:58},
    {x:78,y:60},
    {x:82,y:60},
    {x:86,y:58},

];

function crearEstrella(nombre, x, y, tituloRecuerdo, textoRecuerdo){

    const estrella = document.createElement("div");

    estrella.classList.add("star");

    estrella.style.left = x + "%";
    estrella.style.top = y + "%";

    estrella.title = nombre;

    estrella.addEventListener("click", function(){

    foto.style.display = "none";

titulo.textContent = tituloRecuerdo;
mensaje.textContent = textoRecuerdo;

if (nombre === "Acrab") {
    console.log(nombre);

    foto.src = "imagenes/acrab.jpg";
    console.log(foto.src);

    foto.style.display = "block";
    mensaje.textContent = "";
}

popup.classList.remove("oculto");

estrellasDescubiertas++;

console.log(estrellasDescubiertas);

if(estrellasDescubiertas == 6){

    crearAntares();

}

estrellas.push(estrella);

});

 sky.appendChild(estrella);

}

crearEstrella(
    "Shaula",
    15,
    20,
    "Cuando te conocí",
    "Fuiste la primera persona en ser importante para mí. Cada día es un bonito recuerdo y una experiencia inolvidable."
);

crearEstrella(
    "Sargas",
    30,
    40,
    "Odisea",
    "Ese día que vimos juntos ese musical de la Odisea fue mágico para mí. No solo por esa historia, sino porque estaba compartiendo algo contigo que me gusta muchísimo."
);

crearEstrella(
    "Dschubba",
    45,
    25,
    "Nuestro mundo",
    "Siempre que jugamos es encantador. Me fascina divertirme contigo; incluso cuando perdemos, terminamos riéndonos. 💕"
);

crearEstrella(
    "Jabbah",
    60,
    55,
    "Nuestras llamadas",
    "Siempre que hablo contigo, o incluso cuando te escucho dormir, siento una melodía hermosa. Compartir mi tiempo contigo es una de las cosas que más disfruto, preciosa. 💕"
);

crearEstrella(
    "Acrab",
    75,
    30,
    "La dueña de mi corazón",
    ""
);

crearEstrella(
    "Lesath",
    85,
    60,
    "Nuestro futuro",
    "Deseo una vida contigo y acompañarte siempre. 💕"
);

cerrar.addEventListener("click", function () {
    popup.classList.add("oculto");
});

function crearAntares(){

    const antares = document.createElement("div");

    antares.classList.add("star");

    antares.style.left = "50%";

    antares.style.top = "50%";

    antares.style.background = "red";

    antares.style.boxShadow =
    "0 0 20px red, 0 0 40px orange";

    antares.addEventListener("click", function(){

    console.log(estrellas);
    console.log(estrellas.length);

    antares.remove();

  crearEstrellasFinal(posicionesFinal.length);

estrellas[0].style.left = "35%";
estrellas[0].style.top = "20%";

estrellas[1].style.left = "35%";
estrellas[1].style.top = "30%";

estrellas[2].style.left = "35%";
estrellas[2].style.top = "40%";

estrellas[3].style.left = "30%";
estrellas[3].style.top = "20%";

estrellas[4].style.left = "40%";
estrellas[4].style.top = "20%";

estrellas[5].style.left = "50%";
estrellas[5].style.top = "50%";

    alert("Comienza el final...");

    for(let i = 0; i < estrellasFinal.length; i++){

    setTimeout(function(){

        estrellasFinal[i].style.left = posicionesFinal[i].x + "%";
        estrellasFinal[i].style.top = posicionesFinal[i].y + "%";

    }, i * 120);



}

});


sky.appendChild(antares);

}

function crearEstrellasFinal(cantidad){

    for(let i = 0; i < cantidad; i++){

        const estrella = document.createElement("div");

        estrella.classList.add("star");

        estrella.style.width = "4px";
        estrella.style.height = "4px";

        estrella.style.left = Math.random() * 100 + "%";
        estrella.style.top = Math.random() * 100 + "%";

        estrella.style.opacity = "0";

        estrellasFinal.push(estrella);

        sky.appendChild(estrella);

        setTimeout(function(){

            estrella.style.opacity = "1";

        }, i * 80);

    }console.log(estrellasFinal.length);

}