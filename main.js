/*h2 tenga una salida con una velocidad  */

const app =document.getElementById('typewriter');

const typewriter = new Typewriter(app,{
    loop: true,
    delay:75
});

typewriter
    .typeString('ubicado en centro de lima')
    .pauseFor(200)
    .start();