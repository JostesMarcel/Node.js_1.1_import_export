const {arrayNumbers, arrayCars} = require("./data.js")

arrayCars.sort()


arrayNumbers.sort(function(a, b) {
    return a - b 
})

module.exports = {arrayCars, arrayNumbers}