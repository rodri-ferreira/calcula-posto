function calcular(){
    var combustivel = document.getElementById("combustivel");
    var litros = document.getElementById("litros");
    var pagar = document.getElementById("pagar");
    
    var combustivelValor = combustivel.value;
    var litrosValor = litros.value;
    var pagarValor = pagar.value;

    if(combustivelValor == "A" || combustivelValor == "a"){
        setTipoCombustivel.value = "Álcool";

        if (litrosValor == 0) {

            if (pagarValor <= 46.55) {

                var litrosAbastecidosDesc = (0.02 * pagarValor) / 1.90;
                var litrosAbastecidos = (pagarValor / 1.90) + litrosAbastecidosDesc;

                setLitros.value = litrosAbastecidos.toFixed(2);
                setValorPagar.value = pagarValor;
                
            }else {

                var litrosAbastecidosDesc = (0.04 * pagarValor) / 1.90;
                var litrosAbastecidos = (pagarValor / 1.90) + litrosAbastecidosDesc;

                setLitros.value = litrosAbastecidos.toFixed(2);
                setValorPagar.value = pagarValor;

            }

        } else {
        
            if (litrosValor <= 25) {

                var valorSemDesconto = litrosValor * 1.90;
                var valorApagar = valorSemDesconto - ((2/100) * valorSemDesconto);
                
                setValorPagar.value = valorApagar.toFixed(2);
                setLitros.value = litrosValor;

            }else {

                var valorSemDesconto = litrosValor * 1.90;
                var valorApagar = valorSemDesconto - ((4/100) * valorSemDesconto);
                
                setValorPagar.value = valorApagar.toFixed(2);
                setLitros.value = litrosValor;
            }
        }

    }else{
        setTipoCombustivel.value = "Gasolina";

        if (litrosValor == 0) {

            if (pagarValor <= 65.475) {

                var litrosAbastecidosDesc = (0.03 * pagarValor) / 2.70;
                var litrosAbastecidos = (pagarValor / 2.70) + litrosAbastecidosDesc;

                setLitros.value = litrosAbastecidos.toFixed(2);
                setValorPagar.value = pagarValor;
                
            }else {

                var litrosAbastecidosDesc = (0.05 * pagarValor) / 2.70;
                var litrosAbastecidos = (pagarValor / 2.70) + litrosAbastecidosDesc;

                setLitros.value = litrosAbastecidos.toFixed(2);
                setValorPagar.value = pagarValor;

            }

        } else {
        

            if (litrosValor <= 25) {

                var valorSemDesconto = litrosValor * 2.70;
                var valorApagar = valorSemDesconto - ((3/100) * valorSemDesconto);
                
                setValorPagar.value = valorApagar.toFixed(2);
                setLitros.value = litrosValor;
                
            }else {

                var valorSemDesconto = litrosValor * 2.70;
                var valorApagar = valorSemDesconto - ((5/100) * valorSemDesconto);
                
                setValorPagar.value = valorApagar.toFixed(2);
                setLitros.value = litrosValor;
            }
        }
        
    }

}

 