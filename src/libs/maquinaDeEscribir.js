const maquinaEscribir3 = (text = "", tiempo = 200, etiqueta = "") => {
  let $etiqueta = document.createElement("p");
  let arrayCaracteres = text.split("");
  etiqueta.innerHTML = "";
  let i = 0;
  let j = text.length;
  let escribir = setInterval(function () {
    if (i === arrayCaracteres.length) {
      etiqueta.innerHTML = text.substring(0, j);
      j--;
      if (j === 0) {
        etiqueta.innerHTML = "";
        i = 0;
        j = text.length;
      }
    } else {
      etiqueta.innerHTML += arrayCaracteres[i];
      i++;
    }
  }, tiempo);
};
