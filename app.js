// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Agregar el nombre al array
    listaAmigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    inputAmigo.value = '';

    // Actualizar la lista visual
    actualizarListaAmigos();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ''; // Limpiar la lista

    // Agregar cada amigo como un elemento de lista
    listaAmigos.forEach(amigo => {
        const item = document.createElement('li');
        item.textContent = amigo;
        item.className = 'name-item';
        listaHTML.appendChild(item);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista
    if (listaAmigos.length === 0) {
        alert('Por favor, agrega al menos un amigo a la lista.');
        return;
    }

    // Seleccionar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[indiceAleatorio];

    // Mostrar el resultado
    const resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = '';

    const resultadoItem = document.createElement('li');
    resultadoItem.textContent = `¡El amigo secreto es: ${amigoSeleccionado}!`;
    resultadoItem.className = 'result-item';
    resultadoHTML.appendChild(resultadoItem);

    //Eliminar el amigo sorteado de la lista
    listaAmigos.splice(indiceAleatorio, 1);
    actualizarListaAmigos();
}

//Permitir agregar nombres presionando Enter
document.getElementById('amigo').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});