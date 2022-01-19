const button = document.querySelector('button')
const div = document.querySelector('div')

function toggleInvisible() {
    div.classList.toggle('invisible')
}

button.onclick = toggleInvisible

document.onkeydown = function (event) {
    if (event.key === 'Escape' && !div.classList.contains('invisible')) {
        toggleInvisible()
    }
}