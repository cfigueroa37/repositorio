document.addEventListener("DOMContentLoaded", function() {
  // Buscar el botón de transferir y añadirle un evento de 'click'
  document.getElementById("depositBtn").addEventListener("click", function(e) {
      e.preventDefault(); // Evita que el formulario se envíe y recargue la página

      // Obtiene los valores seleccionados para las cuentas y el monto
      var fromAccount = document.getElementById("fromAccount").value;
      var toAccount = document.getElementById("toAccount").value;
      var amount = parseFloat(document.getElementById("amount").value);

      if (fromAccount === toAccount) {
          alert("La cuenta de origen y destino no pueden ser la misma.");
          return;
      }

      if (isNaN(amount) || amount <= 0) {
          alert("Por favor, ingrese un monto válido.");
          return;
      }

      // Simplificamos la lógica asumiendo saldos iniciales directamente en el código para efectos demostrativos
      var saldoCuentaCorriente = 1500000;
      var saldoCuentaAhorros = 500000;
      var saldoCuentaVista = 220000;

      // Aplicar la transferencia según los casos
      if (fromAccount === "Corriente") {
          if (amount > saldoCuentaCorriente) {
              alert("Fondos insuficientes en la Cuenta Corriente.");
              return;
          }
          saldoCuentaCorriente -= amount; // Resta el monto de la cuenta de origen
      } else if (fromAccount === "Ahorros") {
          if (amount > saldoCuentaAhorros) {
              alert("Fondos insuficientes en la Cuenta de Ahorros.");
              return;
          }
          saldoCuentaAhorros -= amount; // Resta el monto de la cuenta de origen
      } else if (fromAccount === "Vista") {
          if (amount > saldoCuentaVista) {
              alert("Fondos insuficientes en la Cuenta Vista.");
              return;
          }
          saldoCuentaVista -= amount; // Resta el monto de la cuenta de origen
      }

      if (toAccount === "Corriente") {
          saldoCuentaCorriente += amount; // Añade el monto a la cuenta de destino
      } else if (toAccount === "Ahorros") {
          saldoCuentaAhorros += amount; // Añade el monto a la cuenta de destino
      } else if (toAccount === "Vista") {
          saldoCuentaVista += amount; // Añade el monto a la cuenta de destino
      }

      // Aquí deberías actualizar el HTML con los nuevos saldos
      // Este paso se omite ya que depende de cómo esté estructurado tu HTML.
      // Necesitarías seleccionar los elementos que muestran los saldos y actualizar su texto.

      alert("Transferencia realizada con éxito.");

      // Limpiar formulario
      document.getElementById("transferForm").reset();
  });
});




