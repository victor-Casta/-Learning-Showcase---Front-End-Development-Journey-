import _ from 'lodash';

const data = [
    { id: 1, name: "John", age: 20, role: 'admin' },
    { id: 2, name: "Jane", age: 30, role: 'seller' },
    { id: 3, name: "Daniel", age: 24, role: 'customer' },
    { id: 4, name: "Juan", age: 34, role: 'customer' },
    { id: 5, name: "Christopher", age: 20, role: 'customer' }
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);

