function showMyHand () {
    if (myHand == 1) {
        basic.showLeds(`
            # # # # .
            # . . # #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (myHand == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (myHand == 3) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showString("Shake your hand")
    }
}
input.onGesture(Gesture.Shake, function () {
    myHand = Math.randomRange(1, 3)
    radio.sendNumber(myHand)
    basic.pause(1000)
})
function showResult (my: number, other: number) {
    result = my - other
    if (result == 1 || result == -2) {
        basic.showIcon(IconNames.Happy)
    } else if (result == 0) {
        basic.showIcon(IconNames.Surprised)
    } else {
        basic.showIcon(IconNames.Sad)
    }
}
radio.onReceivedNumber(function (receivedNumber) {
    otherHand = receivedNumber
    basic.pause(200)
})
let otherHand = 0
let result = 0
let myHand = 0
radio.setGroup(1)
myHand = 0
basic.forever(function () {
    showMyHand()
    basic.pause(500)
    showResult(myHand, otherHand)
    basic.pause(500)
})
