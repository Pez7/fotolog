function agregaPosteo() {
// Rescatar el contenedor-posteos, el nombre y comentario del usuario
var containerPosteos = document.getElementById("contenedor-posteos");
var nombreFF = document.getElementById("nombre").value;
var contenidoFF= document.getElementById("cajaposteos").value;
// Creamos el nodo elemento donde irá el post
var nuevoPost = document.createElement("div");
//Crearemos elementos donde guardaremos los valores
var contenedorNombre = document.createElement("strong");
var contenedorPost = document.createElement("p");
var separacion = document.createElement("hr");
//Creamos elemento para corazón
var parrafCorazon = document.createElement("p");
var i = document.createElement(i);

// Asignamos padre a icono de corazón
parrafCorazon.appendChild(i);

//Damos atributos a corazón
parrafCorazon.setAttribute("class", "corazon");
i.setAttribute("class", "fa fa-heart");
i.setAttribute("arial-hidden", "true");

//Ahora transformaremos el nombre a noto texto

var nodoNombre = document.createTextNode(nombreFF + " escribió:");
var nodoPosteo = document.createTextNode(contenidoFF);

// Adignaremos padres a nodos creados
contenedorNombre.appendChild(nodoNombre);
contenedorPost.appendChild(nodoPosteo);

//Ahora asignamos padre a nombre y contenido
nuevoPost.appendChild(contenedorNombre);
nuevoPost.appendChild(contenedorPost);
nuevoPost.appendChild(parrafCorazon);
nuevoPost.appendChild(separacion);

//Creamos función click para el corazon y le asignamos la clase rojo de css
i.addEventListener("click", function(){
	i.classList.toggle("rojo");
});

//Finalemente le damos atributos al post y los agregamos al contenedor
nuevoPost.setAttribute("class","posteo");
containerPosteos.appendChild(nuevoPost);

//para resetear los campos y dejarlos nuevamente en blanco
document.getElementById("nombre").value = "";
document.getElementById("cajaposteos").value = "";

}

