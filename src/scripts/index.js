import '../css/reset.css'
import '../css/style.css'

document.querySelector('body')
  .appendChild(Object
    .assign(document
      .createElement('h1'),
    { textContent: '¡Hola!, puedes modificar todo lo que hay aquí en ./src/script/index.js. Ese es tu archivo de entrada.' }
    )
  )
console.log('estoy conectado')
