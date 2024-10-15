/*parte da kakau */
/*funçao para guardar as informaçpes dos input's */
/*a funçao é declarada */
function cadastro_cliente(){
    /*em seguida, declaro o nome da var ( que é uma const) chamo pelo o nome que dei la no html (exemplo: emaill)
    uso o "document.getElementById" para ir procurar la no html o id de cada input e nomeio o id */
    const emaill = document.getElementById('Email').value;
    const cpf_user = document.getElementById('CPF').value;
    const numero_cel = document.getElementById('TEL').value;
    const nome_client = document.getElementById('NOME1').value;
    const ultimonome_client = document.getElementById('NOME2').value;
    const senha = document.getElementById('CONFIRMSENHA').value;
    const verificar_senha = document.getElementById('CONFIRMSENHA2').value;

/**aqui já será onde irá guardar, indo atras do id, e guardando dentro do html */
    document.getElementById('Email1').innerHTML=emaill;
    document.getElementById('CPF1').innerHTML=cpf_user;
    document.getElementById('TEL1').innerHTML=numero_cel;
    document.getElementById('NOME11').innerHTML=nome_client;
    document.getElementById('NOME21').innerHTML=ultimonome_client;
    document.getElementById('CONFIRMSENHA1').innerHTML=senha;
    document.getElementById('CONFIRMSENHA21').innerHTML=verificar_senha;
}
/*parte da kakau fim */

function postar_produto(){

    const novo_produto = document.getElementById('nomeProduto').value;
    const preco_produto = document.getElementById('precoProduto').value;
    const dec_produto = document.getElementById('descricao').value;
    const estoque_produto = document.getElementById('estoquee').value;
    const dimen_produto = document.getElementById('dimensao').value;
    const fabricante_produto = document.getElementById('fabricante').value;
    const categoria_produto = document.getElementById('categoria').value;
    const cod_produto = document.getElementById('IDcodigo').value;

    let tabela =`
    <tr>
    <td> ${novo_produto} </td>
    <td> ${preco_produto} </td>
    <td> ${dec_produto} </td>
    <td> ${estoque_produto} </td> 
    <td> ${dimen_produto} </td> 
    <td> ${fabricante_produto} </td>
    <td> ${categoria_produto} </td> 
    <td> ${cod_produto} </td> 
    </tr>`;


    document.querySelector('#tabela tbody').innerHTML = tabela;
    
        
        
       
    
}