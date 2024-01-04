const contenedor = document.getElementById('contenedor');
let imagenes = ['Myriorama1.jpg', 'Myriorama2.jpg', 'Myriorama3.jpg', 'Myriorama4.jpg', 'Myriorama5.jpg', 'Myriorama6.jpg', 'Myriorama7.jpg', 'Myriorama8.jpg'];

// Función para cargar las imágenes dinámicamente
function cargarImagenes() {
    contenedor.innerHTML = '';
    imagenes.forEach((imagen, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = imagen;
        imgElement.classList.add('imagen');
        imgElement.setAttribute('draggable', 'true');
        imgElement.setAttribute('data-index', index);
        imgElement.addEventListener('dragstart', dragStart);
        contenedor.appendChild(imgElement);
    });
}

// Funciones para el comportamiento de arrastrar y soltar
function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.index);
}

contenedor.addEventListener('dragover', dragOver);
contenedor.addEventListener('drop', drop);

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const fromIndex = parseInt(e.dataTransfer.getData('text/plain'));
    const toIndex = parseInt(e.target.dataset.index);

    // Intercambia las posiciones de las imágenes en el array
    [imagenes[fromIndex], imagenes[toIndex]] = [imagenes[toIndex], imagenes[fromIndex]];

    // Vuelve a cargar las imágenes
    cargarImagenes();
}

// Cargar las imágenes al iniciar la página
cargarImagenes();
