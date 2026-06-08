let datos = [];

document.getElementById('ing').addEventListener('click', () => {

    let presup = {
        marc: document.getElementById('m').value,
        prec: parseInt(document.getElementById('p').value),
        cli: document.getElementById('c').value,
        iva: 0,
        cont: 0,
        inter: 0,
        prec_inter: 0,
        cuotas_veinticuato: 0,
        cuotas_treintayseis: 0
    };

    datos.push(presup);

    presup.iva = presup.prec * 21;

    presup.cont = presup.prec + presup.iva;

    console.log(presup);
});