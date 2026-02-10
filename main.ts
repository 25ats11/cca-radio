input.onButtonPressed(Button.A, function () {
    radio.sendString("6767676767676767676767676767")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(8)
basic.forever(function () {
	
})
