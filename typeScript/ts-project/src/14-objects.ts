(() => {
    type Sizes = 'S' | 'M' | 'L' | 'XL'; 
    type product = {
        title: string,
        createAt: Date,
        stock: number,
        size?: Sizes
    }

    const products:product[] = [];

    const addProduct = (data: product) => {
        products.push(data)
    }

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
    })

    console.log(products);
})();