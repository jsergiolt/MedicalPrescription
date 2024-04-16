
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

    updateTable();
}

// remove linha selecionada da matriz - TESTAR
function excluiMedicamento(n){
    for (var i=0; i< _matrizMedicamentos.length; i++){
        var item = i+1
        if(item==n){
            // deletar linha
            _matrizMedicamentos.splice(i, 1);
            
        }
    }


    /*var index = _matrizMedicamentos.indexOf(n);
    if (index > -1) {

        _matrizMedicamentos = _matrizMedicamentos.splice(index, 1);
    }else{
        console.log("Não encontrou elemento indice" +n)

    }*/

    console.log(_matrizMedicamentos)
    updateTable()
}

// limpa matriz
function limpaMatrizMedicamento(){
    _matrizMedicamentos = [] 
    //alert(_matrizMedicamentos)

    updateTable();
}




function updateTable(){
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
                    "<td width=100><div class='col-lg-2 col-md-4'>"+item+"</div><div class='col-lg-2 col-md-4'><a href='#' style='color:#f00;' onclick='excluiMedicamento("+item+")'>X</a></div></td>"+
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

    document.getElementById('medicamentoTxt').value = ""
    document.getElementById('qtdTxt').value = ""
    document.getElementById('posologiaTxt').value =""

}



