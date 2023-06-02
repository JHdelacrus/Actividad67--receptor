radio.onReceivedString(function (receivedString) {
    if (receivedString == "POWER") {
        lista = [0, 1]
    }
})
let lista: number[] = []
radio.setGroup(1)
let encendido = false
led.enable(encendido)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
