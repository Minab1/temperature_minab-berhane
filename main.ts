let temperature = 0
basic.forever(function () {
    temperature = input.temperature()
    basic.showNumber(temperature)
    basic.pause(1000)
    basic.clearScreen()
})
