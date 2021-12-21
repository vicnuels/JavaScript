const HOJE = new Date()
const DIA = HOJE.getDay()

let SEMANA = new Array(6)

SEMANA[0] = 'Domingo'
SEMANA[1] = 'Segunda-feira'
SEMANA[2] = 'Terça-feira'
SEMANA[3] = 'Quarta-feira'
SEMANA[4] = 'Quinta-feira'
SEMANA[5] = 'Sexta-feira'
SEMANA[6] = 'Sábado'

document.write("Hoje é " + SEMANA[DIA])