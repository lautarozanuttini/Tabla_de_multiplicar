function tabla() {
    var nro_input = parseInt(document.getElementById("input").value);
    var resultado = document.getElementById("resultado");

    var por_uno = nro_input * 1;
    var por_dos = nro_input * 2;
    var por_tres = nro_input * 3;
    var por_cuatro = nro_input * 4;
    var por_cinco = nro_input * 5;
    var por_seis = nro_input * 6;
    var por_siete = nro_input * 7;
    var por_ocho = nro_input * 8;
    var por_nueve = nro_input * 9;
    var por_diez = nro_input * 10;

    resultado.innerHTML = 
    `1 x ${nro_input} = ${por_uno} <br>
    2 x ${nro_input} = ${por_dos} <br>
    3 x ${nro_input} = ${por_tres} <br>
    4 x ${nro_input} = ${por_cuatro} <br>
    5 x ${nro_input} = ${por_cinco} <br>
    6 x ${nro_input} = ${por_seis} <br>
    7 x ${nro_input} = ${por_siete} <br>
    8 x ${nro_input} = ${por_ocho} <br>
    9 x ${nro_input} = ${por_nueve} <br>
    10 x ${nro_input} = ${por_diez} <br>`;
    }
    