var imagen;
function cambioFoto(color){
    //se llama cuando paso el mouse por arriba de cada miniatura
    //color es el parametro del alt de cada imagen sobre
    //la cual paso el mouse
    imagen = document.getElementById('foto');
    //guardamos en la variable imagen
    //el elemento cuyo id es foto
    imagen.src = 'imagenes/' + color + '.jpg';
    //pongo como valor del src de la imagen grande
    //imagenes/color.jpg
    imagen.alt= 'imagen en ' + color;
    //cambio el valor del alt de la imagen en grande
    //pasando el parametro de cada miniatura
    //en cuanto a su valor de alt
    imagen.title= 'imagen en ' + color;

}