import { addProduct, calcStock, products } from './product.service';

addProduct({
    title: 'Camiseta',
    createAt: new Date(),
    stock: 50,
    size: 'M'
});
addProduct({
    title: 'Pantalon',
    createAt: new Date(),
    stock: 70,
    size: 'XL'
});
addProduct({
    title: 'Zapato',
    createAt: new Date(),
    stock: 30,
});

console.log(products);
const total = calcStock();
console.log(`Total de productos en existencia: ${total}`);