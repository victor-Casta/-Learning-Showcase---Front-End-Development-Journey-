(() => {
    const login = (data: {email: string, password: number}) => {
        console.log(data.email, data.password);
    }

    // login('victorarroyavecastaneda@gmail.com', '1233')
    login({
        email: "victorarroyavecastaneda@gmail.com",
        password: 1234
    });

    type Sizes = 'S' | 'M' | 'L' | 'XL'; 

    const products:any[] = [];

    const addProduct = (data: {
        title: string,
        createAt: Date,
        stock: number,
        size?: Sizes
    }) => {
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

    console.log(products);
})();