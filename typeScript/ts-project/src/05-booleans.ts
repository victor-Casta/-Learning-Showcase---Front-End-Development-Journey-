(() => {
    let isEnable = true

    let isNew: boolean = false
    console.log(isNew)
    isNew = true

    const random = Math.random();
    console.log('random', random);
    isNew = random >= 0.5 ? true : false;
    console.log(isNew);

    const myBoolean: boolean = true
})();