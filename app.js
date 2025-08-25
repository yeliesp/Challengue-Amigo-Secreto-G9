//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// 1. Declarando uma variável do tipo array para armazenar os nomes dos amigos
let amigos = [];

// 2. Função para adicionar amigo
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    let entrada = document.getElementById('amigo');
    let nomeAmigo = entrada.value;
    
    // Validar a entrada - verificar se não está vazio
    if (nomeAmigo == '') {
        alert('Por favor, insira um nome.');
        return;
    }
    
    // Atualizar o array de amigos - adicionar nome válido
    amigos.push(nomeAmigo);
    
    // Limpar o campo de entrada
    entrada.value = '';
    
    // Atualizar a exibição da lista
    mostrarAmigos();
}

// 3. Função para mostrar a lista de amigos
function mostrarAmigos() {
    // Obter o elemento da lista
    let lista = document.getElementById('listaAmigos');
    
    // Limpar a lista existente para evitar duplicados
    lista.innerHTML = "";
    
    // Percorrer o array amigos usando loop for
    for (let i = 0; i < amigos.length; i++) {
        // Criar um novo elemento de lista para cada amigo
        let item = document.createElement('li');
        item.textContent = amigos[i];
        
        // Adicionar o elemento à lista
        lista.appendChild(item);
    }
}

// 4. Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Validar que há amigos disponíveis
    if (amigos.length == 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }
    
    // Gerar um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obter o nome sorteado usando o índice aleatório
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Remover o amigo sorteado da lista para não sortear novamente
    amigos.splice(indiceAleatorio, 1);
    
    // Atualizar a exibição da lista após remoção
    mostrarAmigos();
    
    // Mostrar o resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = 'O amigo sorteado é: ' + amigoSorteado;
    
    // Verificar se ainda há amigos na lista
    if (amigos.length == 0) {
        resultado.innerHTML += '<br><br>🎉 Todos os amigos foram sorteados!';
    }
}
