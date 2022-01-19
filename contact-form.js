const form = document.getElementById('form')
const clientName = document.getElementById('client-name')
const clientLocation = document.getElementById('client-location')
const clientEmail = document.getElementById('exampleInputEmail1')
const nameError = document.getElementById('name-error')
const locationError = document.getElementById('location-error')
const emailError = document.getElementById('email-error')


form.addEventListener('submit', (e) => {
    e.preventDefault()
})
