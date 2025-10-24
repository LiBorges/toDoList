const api = 'http://localhost:3000/tarefas';

function criarTarefaHTML(tarefa) {
    const data = new Date(tarefa.data);
    return `
                <li data-id="${tarefa.id}" class="${tarefa.status ? 'concluida' : ''}">
                <span>
                    <i class="fa-regular fa-circle${tarefa.status ? '-check' : ''}"></i>
                    <strong>${tarefa.titulo}</strong> - ${tarefa.descricao} 
                    <small><i class="fa-regular fa-calendar"></i> ${data.toLocaleDateString('pt-BR')}</small>
                </span>
                <div class="acoes">
                    <button class="concluir" title="Concluir"><i class="fa-solid fa-check"></i></button>
                    <button class="remover" title="Remover"><i class="fa-solid fa-trash"></i></button>
                </div>
                </li>
            `;
}

function carregarTarefas() {
    fetch(api)
        .then(res => res.json())
        .then(tarefas => {
            const ul = document.getElementById('lista-tarefas');
            ul.innerHTML = '';
            tarefas.forEach(tarefa => {
                ul.innerHTML += criarTarefaHTML(tarefa);
            });
        });
}

document.getElementById('form-tarefa').addEventListener('submit', function (e) {
    e.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const data = document.getElementById('data').value;
    fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo, descricao, data, status: 0 })
    }).then(() => {
        carregarTarefas();
        this.reset();
    });
});

document.getElementById('lista-tarefas').addEventListener('click', function (e) {
    const li = e.target.closest('li');
    if (!li) return;
    const id = li.getAttribute('data-id');
    if (e.target.closest('.remover')) {
        fetch(`${api}/${id}`, { method: 'DELETE' }).then(carregarTarefas);
    }
    if (e.target.closest('.concluir')) {
        fetch(`${api}/${id}/concluir`, { method: 'PATCH' }).then(carregarTarefas);
    }
});

carregarTarefas();