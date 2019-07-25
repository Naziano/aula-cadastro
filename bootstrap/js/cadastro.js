
function cadastrar() {

   
    // let nome = document.getElementById('nome').value;
    let nome = validaNome(document.getElementById('nome').value);
    if (nome == false) {
        alert('Insira um nome válido!');
        document.getElementById('nome').focus();
        return;
    }

    
    let fone = document.getElementById('fone').value;
    

    let cidade = document.getElementById('cidade').value;
    

    let sexo = '';
    if (document.getElementById('masc').checked) {
        sexo = 'Masculino';
    } else if (document.getElementById('feme').checked) {
        sexo = 'Feminino';
    } else {
        sexo = 'Prefiro não comentar';
    }
   

    insereNaTabela(nome, fone, sexo, cidade);

    limparFormulario();

}

function limparFormulario() {

    document.getElementById('nome').value = '';
    document.getElementById('fone').value = '';
    document.getElementById('cidade').value = 'Selecione';
    document.getElementById('masc').checked = true;
    document.getElementById('nome').focus();

}


function validaNome(nome) {

    let texto = nome.trim().toUpperCase();
    for (let i = 0; i < texto.length; i++) {
        if (ehNumero(texto[i])) {
            return false;
        }
    }
    return texto;
}

function ehNumero(numero) {
    return !isNaN(numero);
}

function insereNaTabela(nome, fone, sexo, cidade) {
    let tabela = document.getElementById('lista-contatos')
                .getElementsByTagName('tbody')[0];

    let ultimaLinha = tabela.rows.length;

    let linha = tabela.insertRow(ultimaLinha);

    let campoId = linha.insertCell(0);
    let campoNome = linha.insertCell(1);
    let campoFone = linha.insertCell(2);
    let campoSexo = linha.insertCell(3);
    let campoCidade = linha.insertCell(4);
    let editar = linha.insertCell(5);

    campoId.innerHTML = ultimaLinha + 1;
    campoNome.innerHTML = nome;
    campoFone.innerHTML = fone;
    campoSexo.innerHTML = sexo;
    campoCidade.innerHTML = cidade;
    editar.innerHTML = insereBotoesAcoes(ultimaLinha + 1);
}

function insereBotoesAcoes(id) {
    let botaoEditar = '<button type="button" onclick="buscaContatoPeloId(' + id + ')" class="btn btn-info btn-sm">';
    botaoEditar += '<i class="fas fa-user-edit"></i>';
    botaoEditar += '</button>';

    let botaoRemover = '<button type="button" class="btn btn-danger btn-sm">';
    botaoRemover += '<i class="fas fa-trash-alt"></i>';
    botaoRemover += ' </button>';

    return botaoEditar + botaoRemover;
}

function buscaContatoPeloId(id) {
    let body = document.getElementById('lista-contatos').getElementsByTagName('tbody')[0];
    let qtdLinhas = body.rows.length;
    for (let i = 0; i < qtdLinhas; i++) {
        if (body.rows[i].cells[0].innerHTML == id) {
            let inputNome = document.getElementById('nome');
            inputNome.value = body.rows[i].cells[1].innerHTML;
            return;
        }
    }
}