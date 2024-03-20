
const area = document.querySelector(".text-area");
const mensaje = document.querySelector(".text-mensaje");

function btnEncriptar()
  {
    const textoEncriptado = encriptar(area.value);
    mensaje.value = textoEncriptado;
    area.value = "";
    mensaje.style.backgroundImage = "none"
    limpiarCaja();
  }

function encriptar(stringEncriptado)
{
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];
  stringEncriptado = stringEncriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0]))
    {
      stringEncriptado = stringEncriptado.replaceAll
      (
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptado;
}

function btnDesencriptar()
{
  const textoDesencriptado = desencriptar(area.value);
  mensaje.value = textoDesencriptado;
  area.value = "";
}

function desencriptar(stringDesencriptado)
{
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];
  stringDesencriptado = stringDesencriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++)
  {
    if (stringDesencriptado.includes(matrizCodigo[i][1]))
    {
        stringDesencriptado = stringDesencriptado.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      )
    }
  }
  return stringDesencriptado;
}

function btnCopiar()
{
  const textoCopia = document.getElementById("idMensaje").value;
  navigator.clipboard.writeText(textoCopia);
  mensaje.value = "";
}

function limpiarCaja()
{
  document.getElementById("idCuadros").style.display= "none";
  document.getElementById("idCopiar").style.display = "block";
  document.getElementById("idReset").style.display = "block";
}

function btnReset()
{
  location.reload();
}