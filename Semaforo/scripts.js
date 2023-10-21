let hola = prompt("Escribe hola");
if (hola === "hola") {
  const intervalID = setInterval(semaforo, 2000)
}

let bombillos = ['rojo', 'amarillo', 'verde']
const semaforoImg = document.querySelector('#semaforo-img')

function semaforo() {
  const color = bombillos.pop()
  console.log(color)
  if (!bombillos.length)
  bombillos = ['rojo', 'amarillo', 'verde']
  semaforoImg.src = "img/" + color + ".png"
  return color
}