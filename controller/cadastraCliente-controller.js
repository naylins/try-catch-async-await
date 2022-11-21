import { clienteService } from '../service/cliente-service.js';

const formulario = document.querySelector('[data-form]')

try {
    formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault()
    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value

   await clienteService.criarCliente(nome,email)
    window.location.href = '../telas/cadastro_concluido.html'
    
})
}

catch(erro){
    console.log(erro)
    window.location.href = '../tela/erro.html'
} 
  