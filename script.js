let datos = [];

document.getElementById('ing').addEventListener('click', () => {

    let presup = {
        marc: document.getElementById('m').value,
        pre: parseInt(document.getElementById('p').value),
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
});