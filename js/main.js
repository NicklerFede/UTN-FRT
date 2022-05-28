const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});

typewriter
.typeString('Encontranos en..')
.pauseFor(200) /* antes de empezar tiene una pausa de 200 milisegundos */
.start(); /* metodo para arrancar */

