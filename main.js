
  let creditos = [];

  function calcular() {
    let monto = parseInt(document.getElementById("monto").value);
    let tasa = parseFloat(document.getElementById("tasa").value);
    let plazo = parseInt(document.getElementById("plazo").value);

    let intereses = (monto * tasa) / 100;
    let total = monto + intereses;
    let cuotaMensual = total / plazo;

    let credito = {
      monto: monto,
      tasa: tasa,
      plazo: plazo,
      total: total,
      cuotaMensual: cuotaMensual
    };

    creditos.push(credito);
    mostrarResultado(credito);
  }

  function mostrarResultado(credito) {
    let resultado = "Crédito: $" + credito.monto.toFixed(2) + "<br>";
    resultado += "Tasa de interés: " + credito.tasa.toFixed(2) + "%<br>";
    resultado += "Plazo: " + credito.plazo + " meses<br>";
    resultado += "Total a pagar: $" + credito.total.toFixed(2) + "<br>";
    resultado += "Cuota mensual: $" + credito.cuotaMensual.toFixed(2);

    document.getElementById("resultado").innerHTML = resultado;
  }