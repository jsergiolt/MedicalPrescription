
_matrizMedicamentos = []
// adiciona novo medicamento a matriz
function adicionaMedicamento(){
    var leng = _matrizMedicamentos.length

    _matrizMedicamentos[leng] = [
        document.getElementById('medicamentoTxt').value,
        document.getElementById('qtdTxt').value,
        document.getElementById('posologiaTxt').value
    ]
    //alert(_matrizMedicamentos + "Lenght = " + leng)

    geraHtmlTabela();
}

// limpa matriz
function limpaMatrizMedicamento(){
    _matrizMedicamentos = [] 
    //alert(_matrizMedicamentos)

    geraHtmlTabela();
}

// remove linha selecionada da matriz - TESTAR
function removeIndiceMatrizMedicamento(n){
    numeros.indexOf(n);
    if (index > -1) {
        _matrizMedicamentos = _matrizMedicamentos.splice(index, 1) 
        //alert(_matrizMedicamentos)
    }
}


function geraHtmlTabela(){
    var headTabela = ""+
    
        "<h5>Resumo da Prescrição</h5>"+

        "<table class='table table-striped table-bordered table-hover'>"+
            "<thead>"+
                "<tr>"+
                    "<th>#</th>"+
                    "<th>Princípio Ativo</th>"+
                    "<th>Quantidade</th>"+
                    "<th>Posologia</th>"+
                "</tr>"+
            "</thead>"

    var linhaTabela= ""        
    for (var i=0; i< _matrizMedicamentos.length; i++){
        var item = i+1
        linhaTabela += ""+
                "<tr>"+
                    "<td>"+item+"</td>"+
                    "<td>"+_matrizMedicamentos[i][0]+"</td>"+
                    "<td>"+_matrizMedicamentos[i][1]+"</td>"+
                    "<td>"+_matrizMedicamentos[i][2]+"</td>"+
                "</tr>"
    }

    var bodyTabela = ""+
            "<tbody>"+
                linhaTabela+
            "</tbody>"+
        "</table>"  
        
    var htmlTabela = headTabela + bodyTabela

    document.getElementById("medTable").innerHTML = htmlTabela;

}

function getListaMedicamentos(){
 

    var jsonList = $.getJSON("assets/js/listaMedicamentos.json", function(json) {
        console.log(json); // this will show the info it in firebug console
        
    });

    alert(jsonList[0].ID + "")

}

