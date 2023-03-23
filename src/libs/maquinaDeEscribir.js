function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function miFuncion() {
  await esperar(2000);
}

export const maquinaEscribir = (text1 = "", setText, tiempo) => {
  let arrayCaracteres = text1.split("");
  let textReturned = "";
  let i = 0;
  let j = text1.length;
  let flag = true;
  return setInterval(async function () {
    if (i === arrayCaracteres.length) {
      if (flag) {
        await miFuncion();
        flag = false;
      }
      textReturned = text1.substring(0, j);
      j--;
      if (j === 0) {
        textReturned = "";
        i = 0;
        j = text1.length;
        flag = true;
      }
      setText(textReturned);
    } else {
      textReturned += arrayCaracteres[i];
      i++;
      setText(textReturned);
    }
  }, tiempo);
};
