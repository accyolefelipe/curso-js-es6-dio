const fruit = 'uva';

switch (fruit) {
    case 'uva':
        console.log('R$ 3,00 / kg');
        break;
    case 'mamao':
    case 'pera':
    case 'melancia':
        console.log('R$ 5,00 / kg');
        break;
    default:
        console.log('Produto não disponivel no estoque.')
        break;
}
