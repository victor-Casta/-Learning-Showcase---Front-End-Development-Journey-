(() => {
    const numbersList = [1, 2, 3, 4, 5, 6, 'numbers', true]
    numbersList.push(7)

    const products = ['numbers', true]
    products.push('new string')

    const mixedArray: (number | boolean  | string | Object)[] = [2, 'hola', true]
    mixedArray.push(12)
    mixedArray.push('12')
    mixedArray.push({})
    mixedArray.push([])

    const numbers = [1, 2, 3, 4, 5, 6]
    numbers.map(item => item * 3)
})();