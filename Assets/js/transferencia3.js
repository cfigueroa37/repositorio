// Agregar contacto
document.getElementById('agregarContactoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var banco = document.getElementById('banco').value;
    var cuenta = document.getElementById('cuenta').value;
    var contactoHtml = `
        <tr>
            <td>${nombre}</td>
            <td>${cuenta}</td>
            <td><input type="number"></td>
            <td><button type="button" class="btn btn-sm btn-primary" onclick="alert('Transferencia exitosa'); document.querySelectorAll('input[type=number]').forEach(input => input.value = '');">Transferir</button></td>
        </tr>
    `;
    document.getElementById('contactos').innerHTML += contactoHtml;
    document.getElementById('agregarContactoForm').reset();
});
