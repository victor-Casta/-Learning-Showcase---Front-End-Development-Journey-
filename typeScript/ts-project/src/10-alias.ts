(() => {
    type UserID = number | string
    let user: UserID
    //literal types
    type sizes = 's' | 'm' | 'l' | 'xl'
    let shirtSize: sizes
    function greeting(userId: UserID, sizeShirt: sizes) {
        if(typeof userId === 'string') {
            console.log('Hello, ' + userId.toLocaleUpperCase());
        } else {
            console.log(userId + 5);
        } 
    }
    greeting(1, 'l')
})();