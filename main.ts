let b = 0
let s = 0
input.onButtonPressed(Button.A, function () {
    b = randint(1, 3)
    if (b == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    if (b == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (b == 3) {
        basic.showLeds(`
            . . . . #
            . . # # .
            # # # . #
            . . # # .
            . . . . #
            `)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    s = randint(1, 3)
    if (s == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    if (s == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (s == 3) {
        basic.showLeds(`
            . . . . #
            . . # # .
            # # # . #
            . . # # .
            . . . . #
            `)
    }
    basic.clearScreen()
    if (b == s) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    basic.clearScreen()
})
