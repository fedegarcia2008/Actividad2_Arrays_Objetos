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
        cuotas_veinticuatro: 0,
        cuotas_treintayseis: 0
    };

    datos.push(presup);

    presup.iva = presup.pre * 0.21;

    presup.cont = presup.pre + presup.iva;

    presup.inter = presup.cont * 0.10;

    presup.pre_inter = presup.cont + presup.inter;

    presup.cuotas_veinticuatro = presup.pre_inter / 24;

    presup.cuotas_treintayseis = presup.pre_inter / 36;
    
    const salida = document.getElementById('salida');
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
            <td>${presup.cli}</td>
            <td>$${presup.iva.toFixed(2)}</td>
            <td>$${presup.cont.toFixed(2)}</td>
            <td>$${presup.inter.toFixed(2)}</td>
            <td>$${presup.pre_inter.toFixed(2)}</td>
            <td>$${presup.cuotas_veinticuatro.toFixed(2)}</td>
            <td>$${presup.cuotas_treintayseis.toFixed(2)}</td>
            `;
            tabla.appendChild(fila);
        });
        salida.appendChild(h2);
        salida.appendChild(tabla);
    }
    mostrarPresupuesto();

    function precioMayor() {
        let tabla = document.createElement('table');
        let h2 = document.createElement('h2');
        h2.textContent = `Lista de Presupuestos mayores a $100000`;
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
            if (presup.pre > 100000) {
                let fila = document.createElement('tr');
                fila.innerHTML = `
                <td>${presup.marc}</td>
                <td>$${presup.pre}</td>
                <td>${presup.cli}</td>
                <td>$${presup.iva.toFixed(2)}</td>
                <td>$${presup.cont.toFixed(2)}</td>
                <td>$${presup.inter.toFixed(2)}</td>
                <td>$${presup.pre_inter.toFixed(2)}</td>
                <td>$${presup.cuotas_veinticuatro.toFixed(2)}</td>
                <td>$${presup.cuotas_treintayseis.toFixed(2)}</td>
                `;
                tabla.appendChild(fila);
            }
        });
        salida.appendChild(h2);
        salida.appendChild(tabla);
    }
    precioMayor();
});

document.getElementById('buscar').addEventListener('click', () => {
    const salida = document.getElementById('salidaBusqueda');
    salida.innerHTML = '';
    function buscar() {
        let buscado = document.getElementById('busCliente').value;
        let presupuesto = datos.filter(pre =>
            pre.cli.toLowerCase() === buscado.toLowerCase()
        );
        if (presupuesto.length > 0) {
            let tabla = document.createElement('table');
            let h2 = document.createElement('h2');
            h2.textContent = `Presupuesto del cliente ${buscado}`;
            tabla.innerHTML = `
            <tr>
                <th>MARCA</th>
                <th>PRECIO</th>
                <th>IVA 21%</th>
                <th>PRECIO CONTADO</th>
                <th>INTERÉS 10%</th>
                <th>PRECIO CON INTERÉS</th>
                <th>VALOR EN 24 CUOTAS</th>
                <th>VALOR EN 36 CUOTAS</th>
            </tr>`;
            presupuesto.forEach(presup => {
                let fila = document.createElement('tr');
                fila.innerHTML = `
                <td>${presup.marc}</td>
                <td>$${presup.pre}</td>
                <td>$${presup.iva.toFixed(2)}</td>
                <td>$${presup.cont.toFixed(2)}</td>
                <td>$${presup.inter.toFixed(2)}</td>
                <td>$${presup.pre_inter.toFixed(2)}</td>
                <td>$${presup.cuotas_veinticuatro.toFixed(2)}</td>
                <td>$${presup.cuotas_treintayseis.toFixed(2)}</td>
                `;
                tabla.appendChild(fila);
            });
            salida.appendChild(h2);
            salida.appendChild(tabla);
        } else {
            salida.innerHTML = '<h3>No se encontraron presupuestos para ese cliente</h3>';
        }
    }
    buscar();
});