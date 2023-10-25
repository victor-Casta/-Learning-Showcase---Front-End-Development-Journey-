(() => {
    let myDynamicVar: string | number
    myDynamicVar = 2
    myDynamicVar = 'A'

    function greeting(myText: string | number) {
        if(typeof myText === 'string') {
            console.log('Hello, ' + myText.toLocaleUpperCase());
        } else {
            console.log(myText + 5);
            
        } 
    }

    greeting('victor')
})();