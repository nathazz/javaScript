const cliente = {
    nome: "João",
    idade: 18,
    email: "joão@firma.com",
    telefone: ["1155645165", "114550"]
};

//criando um novo objeto para o const cliente(guardando um objeto dentro de outro)
cliente.endereco = [
{
    rua: "R. Joseph Climber",
    numero: 137,
    apartamento: true,
    complemento: "ap 934"
}
];

function ligarParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`)
}


ligarParaCliente(...cliente.telefone)
//o ... foi usado aqui pra copiar o elemento que está dentro do array

const encomenda = {
    destinatario: cliente.nome,
    //mudamos o nome para destinatario
    ...cliente.endereco[0]
}

console.log(encomenda)
