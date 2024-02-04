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
const btnMenuResponsive = document.querySelectorAll('.menu-icon');
const btnMenuClose = document.querySelector('.open');
const btnMenuOpen = document.querySelector('.close');
const menuDeslizador = document.querySelector('.menu-deslizador');
let activo = true;
btnMenuResponsive.forEach((btn) => {
  btn.addEventListener('click', () => {
    if(activo) {
      menuDeslizador.style.height = '100%'
      btnMenuClose.style.display = 'none';
      btnMenuOpen.style.display = 'flex';
      activo = false;
    } else {
      btnMenuOpen.style.display = 'none';
      btnMenuClose.style.display = 'flex';
      menuDeslizador.style.height = '0'
      activo = true;
    }
  });
});