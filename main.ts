input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        # # . . .
        # # # # .
        # # # # .
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        # # # # #
        . # # . #
        # # # . #
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        . # # # #
        . # # # #
        . . . # #
        . # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # . # # #
        # . # # .
        # # # # #
        . # # # .
        `)
})
