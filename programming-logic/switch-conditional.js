let diaSemana = 5;
let dia = '';

switch (diaSemana) {
    case 0:
        dia = 'segunda'
        break;
    case 1:
        dia = 'terça'
        break;
    case 2:
        dia = 'quarta'
        break;
    case 3:
        dia = 'quinta'
        break;
    case 4:
        dia = 'sexta'
        break;
    case 5:
        dia = 'sábado'
        break;
    case 6:
        dia = 'domingo'
        break;
    default:
        break;
}
// compara valor e tipo

console.log(`Hoje é ${dia}`);