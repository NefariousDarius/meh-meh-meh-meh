input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        music.setVolume(127)
        music.setTempo(119)
        music.playTone(440, music.beat(BeatFraction.Quarter))
        basic.pause(115)
        music.playTone(440, music.beat(BeatFraction.Quarter))
        basic.pause(115)
        music.playTone(220, music.beat(BeatFraction.Quarter))
        basic.pause(115)
        music.playTone(220, music.beat(BeatFraction.Quarter))
        basic.pause(115)
        music.playTone(330, music.beat(BeatFraction.Quarter))
        basic.pause(115)
        music.playTone(330, music.beat(BeatFraction.Quarter))
        basic.pause(115)
        music.playTone(220, music.beat(BeatFraction.Quarter))
        basic.pause(115)
        music.playTone(220, music.beat(BeatFraction.Quarter))
        basic.pause(115)
        music.playTone(392, music.beat(BeatFraction.Quarter))
        basic.pause(115)
        music.playTone(392, music.beat(BeatFraction.Quarter))
        basic.pause(115)
        music.playTone(196, music.beat(BeatFraction.Quarter))
        basic.pause(115)
        music.playTone(196, music.beat(BeatFraction.Quarter))
        basic.pause(115)
    }
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
