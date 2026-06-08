let datos = [];

document.getElementById('ing').addEventListener('click', () => {

    let presup = {
        marc: document.getElementById('m').value,
        pre: parseFloat(document.getElementById('p').value),
        cli: document.getElementById('c').value,
        iva: 0,
        cont: 0,
        inter: 0,
        pre_inter: 0,
        cuotas_veinticuato: 0,
        cuotas_treintayseis: 0
    };

    datos.push(presup);

    presup.iva = presup.pre * 0.21;

    presup.cont = presup.pre + presup.iva;

    presup.inter = presup.cont * 0.10;

    presup.pre_inter = presup.cont + presup.inter;

    presup.cuotas_veinticuato = presup.pre_inter / 24;

    presup.cuotas_treintayseis = presup.pre_inter / 36;

    console.log(presup);
    
    salida.innerHTML = '';
    
    function mostrarPresupuesto() {
        let tabla = document.createElement('table');
        let h2 = document.createElement('h2');
        h2.textContent = `Lista de Presupuestos`;
        tabla.innerHTML = `
        <tr>
            <th>MARCA</th>
            <th>PRECIO</th>
            <th>CLIENTE</th>
            <th>IVA 21%</th>
            <th>PRECIO CONTADO</th>
            <th>INTERÉS 10%</th>
            <th>PRECIO CON INTERÉS</th>
            <th>VALOR EN 24 CUOTAS</th>
            <th>VALOR EN 36 CUOTAS</th>
        </tr>`;
        
        datos.forEach(presup => {
            let fila = document.createElement('tr');
            fila.innerHTML = `
            <td>${presup.marc}</td>
            <td>$${presup.pre}</td>
            <td>${presup.cli} años</td>
            <td>$${presup.iva.toFixed(2)}</td>
            <td>$${presup.cont.toFixed(2)}</td>
            <td>$${presup.inter.toFixed(2)}</td>
            <td>$${presup.pre_inter.toFixed(2)}</td>
            <td>$${presup.cuotas_veinticuato.toFixed(2)}</td>
            <td>$${presup.cuotas_treintayseis.toFixed(2)}</td>
            `;
            tabla.appendChild(fila);
        });
        salida.appendChild(h2);
        salida.appendChild(tabla);
    }
    mostrarPresupuesto();
});