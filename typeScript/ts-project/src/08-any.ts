(() => {
    let dinamicVar: any
    dinamicVar = 9
    dinamicVar = '9'
    dinamicVar = true
    dinamicVar = {}

    dinamicVar = 'Hola'
    const rta = (dinamicVar as string).toLowerCase()
    console.log(rta)

    dinamicVar = 232
    const rta2 = (<number>dinamicVar).toFixed()
    console.log(rta2)
})();