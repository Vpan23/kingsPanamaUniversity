const imagenesDelCuadroSec2 = [
    "./Assets/Background/kingspanamauniversityassets/cuadro1.jpg",
    "./Assets/Background/kingspanamauniversityassets/cuadro2.jpg",
    "./Assets/Background/kingspanamauniversityassets/cuadro3.jpg",
    "./Assets/Background/kingspanamauniversityassets/cuadro4.jpg",
  ];
  
  // Obtener todos los elementos con la clase 'cuadro-normal'
  const cuadroContenedorDeImagenes = document.querySelectorAll('.cuadro-normal');
  
  // Verificar si la cantidad de elementos coincide con la cantidad de imágenes
  if (cuadroContenedorDeImagenes.length === imagenesDelCuadroSec2.length) {
    // Iterar sobre cada elemento y asignar la imagen correspondiente
    cuadroContenedorDeImagenes.forEach(function (elemento, indice) {
      elemento.style.backgroundImage = `url('${imagenesDelCuadroSec2[indice]}')`;
    });
  } else {
    console.error("La cantidad de elementos y de imágenes no coincide.");
  }

  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#9F2836'; // Cambia el color de fondo al hacer scroll
    } else {
        navbar.style.backgroundColor = 'transparent'; // Vuelve al color transparente cuando no hay scroll
    }
});
