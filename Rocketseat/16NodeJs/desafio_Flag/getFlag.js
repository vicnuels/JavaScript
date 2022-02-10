module.exports = (flag) => {
    argument = process.argv
    index = argument.indexOf(flag)
    //console.log("Argumentos: ", argument)
    //console.log("Índice: " + index)
    if (index >= 0) {
        //console.log(argument.length)
        if (argument.length <= index + 1) {
            console.log("Flag exists, but does not have value.")
            return undefined
        }
        return argument[index + 1]
    }
    console.log(`The flag ${flag} does not exist.`)
    return null
}