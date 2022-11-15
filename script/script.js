function calcular(){
    var jurosTempo = document.getElementsByName('radjuros')
    var anoMes = document.getElementsByName('radtempo')
    var res = document.getElementById('resultado')

    if(jurosTempo[1].checked && anoMes[1].checked){
        var empre = document.getElementById('emprestimo')
        var tempoJuros = document.getElementById('tempoJuros')
        var tempParcela = document.getElementById('tempoPagamento')

        var vlEmpre = Number(empre.value)

        var percJuros = Number(tempoJuros.value)

        var vlParcela = Number(tempParcela.value)

        var jurosDecimal = ((1 + (percJuros/100))**vlParcela).toFixed(4)
        var montante = (vlEmpre*jurosDecimal).toFixed(2)
        var vlPago = (montante/vlParcela).toFixed(2)

        res.innerHTML = `<p>Você deseja R$ ${vlEmpre} de emprestimo`
        res.innerHTML += `<p>O valor a ser pago será de R$ ${montante}`
        res.innerHTML += `<p>O emprestimo será pago em <strong>${vlParcela}x</strong> de <strong>R$ ${vlPago}</strong></p>`
        
    
    } else if (jurosTempo[2].checked && anoMes[2].checked) {
        var empre = document.getElementById('emprestimo')
        var tempoJuros = document.getElementById('tempoJuros')
        var tempParcela = document.getElementById('tempoPagamento')

        res.innerHTML = 'Você irá pagar o emprestimo em anos'

       var vlEmpre = Number(empre.value)

        var percJuros = Number(tempoJuros.value)

        var vlParcela = Number(tempParcela.value)
        var mesemAno = vlParcela*12

        var jurosDecimal = ((1 + (percJuros/100))**vlParcela).toFixed(4)
        var montante = (vlEmpre*jurosDecimal).toFixed(2)
        var vlPago = (montante/mesemAno).toFixed(2)

        res.innerHTML += `<p>Você deseja R$ ${vlEmpre} de emprestimo`
        res.innerHTML += `<p>O valor a ser pago será de R$ ${montante}`
        res.innerHTML += `<p>O emprestimo será pag em <strong>${mesemAno}x</strong> de <strong>R$ ${vlPago}</strong></p>`
    
    } else {
        window.alert('O tempo de aplicação do juros e de pagamento devem ser iguais')
    }

}



/*function calcular() {
    

    resp.innerHTML = `30% de sua renda é R$ ${percRenda}`
    resp.innerHTML += `<p>Você deseja R$ ${vlEmpre} de empréstimo</p>`
    resp.innerHTML += `<p>A porcentagem de juros é ${percJuros}%</p>`
    resp.innerHTML += `<p>Você gostaria de pagar em ${vlParcela}</p>`
    resp.innerHTML += `<p>O juros decimal é de ${jurosDecimal}</p>`
    resp.innerHTML += `<p>O valor a ser pago será de R$ ${montante}`
    resp.innerHTML += `<p> O empréstimo será pago em <strong>${vlParcela}x</strong> de <strong> R$ ${vlPago}</strong></p>

}*/
