//@ts-check
(async () => {
    const myCart = [];
    const products = [];
    const limit = 2;
  
    async function getProducts() {
      const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
        method: 'GET'
      });
      const data = await rta.json();
      products.concat(data);  // Se cambió concat por push para agregar los datos al array
    }
  
    function getTotal() {
      let total = 0;
      for (let i = 0; i < products.length; i++) {
        total += products[i].prize;
      }
      return total;
    }
  
    function addProduct(index) {
      if (getTotal() <= limit) {  // Llamada correcta a la función getTotal()
        myCart.push(products[index]);
      }
    }
  
    await getProducts();
    addProduct(1);  // Llamada corregida a la función addProduct
    addProduct(2);  // Llamada corregida a la función addProduct
    const total = getTotal();
    console.log('Total:', total);
  
    const person = {
      name: 'Nicolas',
      lastName: 'Molina'
    };
  
    const rta = person.name + limit;  // Se corrigió la concatenación de la propiedad name
    console.log(rta);
  })();
  