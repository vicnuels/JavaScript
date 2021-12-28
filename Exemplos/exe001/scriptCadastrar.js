window.onload = function () {
    const [form] = document.getElementsByTagName('form')
    form.addEventListener('submit', function (event) {
        event.preventDefault()

        const contato = {
            nome: event.target.nome.value.trim(),
            email: event.target.email.value.trim(),
            whatsapp: event.target.whatsapp.value.trim()
        }
        let contatos = localStorage.getItem('contatos')
        if (contatos) {
            contatos = JSON.parse(contatos)
        } else {
            contatos = []
        }

        contatos.push(contato)
        localStorage.setItem('contatos', JSON.stringify(contatos))

        event.target.nome.value = ''
        event.target.email.value = ''
        event.target.whatsapp.value = ''

        const divAlert = document.querySelector('.alert')
        divAlert.style = "display: block"
        divAlert.firstElementChild.textContent = `Contato ${contato.nome} adicionado com sucesso!`

        divAlert.addEventListener('click', function (event) {
            if (event.target.classList.contains('close-alert')) {
                divAlert.style = "display: none"
            }
        })
    })
}