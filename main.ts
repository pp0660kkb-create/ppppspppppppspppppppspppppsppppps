basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        music.play(music.stringPlayable("B C5 C5 E G E C5 G ", 120), music.PlaybackMode.UntilDone)
        basic.pause(100)
    }
    for (let index = 0; index <= 4; index++) {
        music.play(music.stringPlayable("B C5 C5 E G E C5 G ", 120), music.PlaybackMode.UntilDone)
        basic.pause(100)
    }
    for (let index = 0; index <= 4; index++) {
        music.play(music.stringPlayable("E F B D G F C C5 ", 120), music.PlaybackMode.UntilDone)
        basic.pause(100)
        for (let index = 0; index <= 4; index++) {
            music.play(music.stringPlayable("G E A D G F C5 A ", 120), music.PlaybackMode.UntilDone)
        }
        basic.pause(100)
    }
})
