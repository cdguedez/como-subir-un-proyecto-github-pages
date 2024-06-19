const formulario = document.getElementById('form')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(formulario)
    const data = {
        message: formData.get('message')
    }
    console.log(data)
    formulario.reset()
})