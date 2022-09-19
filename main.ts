input.onButtonPressed(Button.A, function () {
    basic.showString("S")
    stike += 1
    basic.showNumber(stike)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("S")
    basic.showNumber(stike)
    basic.showString("B")
    basic.showNumber(balls)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    balls += 1
    basic.showNumber(balls)
})
input.onGesture(Gesture.Shake, function () {
    stike = 0
    balls = 0
    basic.clearScreen()
})
let balls = 0
let stike = 0
basic.showIcon(IconNames.Square)
basic.forever(function () {
	
})
