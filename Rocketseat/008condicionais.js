//Condicionais e controle de fluxo (control flow)
// if e else

let temperature = 36.9

if (temperature >= 37) {
    console.log('Febre alta')
} else if (temperature < 37.5 && temperature >= 37) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}

// switch

switch (temperature) {
    case temperature >= 37:
        console.log('Febre alta')
        break
    case temperature < 37.5 && temperature >= 37:
        console.log('Febre moderada')
        break
    default:
        console.log('Saudável')
        break
}

// throw

function sayMyName(name = '') {
    if (name === '') {
        throw new Error('Nome é obrigatório')
    }

    console.log(`Bom dia ${name}`)
}

// try...catch
try {
    sayMyName()
} catch (e) {
    console.log(e)
}