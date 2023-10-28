let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #fb4993;">Te ayudo a que tu dinero trabaje para ti, usando de diferentes herramientas, te enseño a crear tu portafolio de inversión, programación web básica y además hago contenido de tecnología y finanzas.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
