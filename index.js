var items = [];

document.querySelector('input[type=submit]')
.addEventListener('click', function(){
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=valor_produto]');

    items.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    });

    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0;
    listaProdutos.innerHTML = '';
    items.map((val)=>{
        listaProdutos.innerHTML += `
        <div class="lista-produto-single">
        <h3>`+val.nome+`</h3>
        <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
        </div>
        `;
        soma = soma + parseFloat(val.valor);
    });

    soma = soma.toFixed(2);
    nomeProduto.value = '';
    precoProduto.value = '';
    var elementoSoma = document.querySelector('.soma-produto h2');
    elementoSoma.innerHTML = "Total: R$ "+soma;
});

document.querySelector('button[name=limpar]').addEventListener('click', function(){
    items = [];
    document.querySelector('.lista-produtos').innerHTML = '';
    document.querySelector('.soma-produto h2').innerHTML = 'Total: R$ 0';
})