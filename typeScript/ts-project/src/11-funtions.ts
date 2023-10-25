(() => {
    type Sizes = 'S' | 'M' | 'X' | 'XL' | 'L';

    function createProductsToJson(
        title: string,
        createAt: Date,
        stock: number,
        size?: Sizes
    ) {
        return {
            title,
            createAt,
            stock,
            size
        }
    }

    const product1 = createProductsToJson('Oversize shirt', new Date(), 23);
    console.log(product1);
    console.log(product1.title);
    console.log(product1.createAt);
    
})();